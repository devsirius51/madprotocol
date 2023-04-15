// SPDX-License-Identifier: AGPL-3.0-only

pragma solidity 0.8.16;

import { ERC1155WhitelistEventsAndErrors } from "../Base/interfaces/ERC1155EventAndErrors.sol";
import { ERC1155B as ERC1155, ERC1155TokenReceiver } from "../Base/ERC1155B.sol";
import { ERC2981 } from "../../common/ERC2981.sol";
import { ERC20 } from "../../ERC20.sol";

import { Owned } from "../../../auth/Owned.sol";
import { ReentrancyGuard } from "../../../security/ReentrancyGuard.sol";
import { MerkleProof } from "../../../utils/MerkleProof.sol";
import { SplitterImpl } from "../../../splitter/SplitterImpl.sol";
import { Counters } from "../../../utils/Counters.sol";
import { Strings } from "../../../utils/Strings.sol";
import { SafeTransferLib } from "../../../utils/SafeTransferLib.sol";
import { FeeOracle } from "../../common/FeeOracle.sol";

contract ERC1155Whitelist is
    ERC1155,
    ERC2981,
    ERC1155WhitelistEventsAndErrors,
    ERC1155TokenReceiver,
    Owned,
    ReentrancyGuard
{
    using Counters for Counters.Counter;
    using Strings for uint256;

    ////////////////////////////////////////////////////////////////
    //                           STORAGE                          //
    ////////////////////////////////////////////////////////////////

    /// @notice Splitter address relationship.
    SplitterImpl public splitter;

    /// @notice ERC20 payment token address.
    ERC20 public erc20;

    /// @notice Live supply counter, excludes burned tokens.
    Counters.Counter private liveSupply;

    /// @notice Mint counter, includes burnt count.
    uint256 private mintCount;

    /// @notice Fee counter.
    uint256 public feeCount;

    /// @notice Token base URI string.
    string private baseURI;

    /// @notice Lock the URI default := false.
    string private _uri;

    /// @notice Lock the URI default := false.
    bool public URILock;

    /// @notice Capped max supply.
    uint256 public maxSupply;

    /// @dev default := false.
    bool public publicMintState;

    /// @notice Public mint price.
    uint256 public publicPrice;

    /// @notice Public whitelist mint price.
    uint256 public whitelistPrice;

    /// @notice Whitelist max supply.
    uint256 public maxWhitelistSupply;

    /// @notice Whitelist merkel.
    bytes32 public whitelistMerkleRoot;

    /// @dev default := false.
    bool public whitelistMintState;

    /// @dev Current whitelist supply.
    uint256 public whitelistMinted;

    /// @notice Claim max supply.
    uint256 public maxFree;

    /// @notice Claim available supply.
    uint256 public freeSupply;

    /// @notice Claim merkel.
    bytes32 public claimListMerkleRoot;

    /// @notice True to enable free claiming default := false.
    bool public freeClaimState;

    /// @notice Default amount to be claimed as free in a collection.
    uint256 public freeAmount;

    /// @dev Stores the amount of whitelist minted tokens of an address.
    /// @dev For fetching purposes and max free claim control.
    mapping(address => bool) public claimed;

    ////////////////////////////////////////////////////////////////
    //                          MODIFIERS                         //
    ////////////////////////////////////////////////////////////////

    modifier publicMintAccess() {
        if (!publicMintState) revert PublicMintClosed();
        _;
    }

    modifier whitelistMintAccess() {
        if (!whitelistMintState) revert WhitelistMintClosed();
        _;
    }

    modifier freeClaimAccess() {
        if (!freeClaimState) revert FreeClaimClosed();
        _;
    }

    modifier hasReachedMax(uint256 amount) {
        if (
            totalSupply() + amount >
            maxSupply - maxWhitelistSupply - maxFree
        ) revert MaxMintReached();
        _;
    }

    modifier canMintFree(uint256 amount) {
        if (freeSupply + amount > maxFree)
            revert MaxFreeReached();
        if (totalSupply() + amount > maxSupply)
            revert MaxMintReached();
        _;
    }

    modifier whitelistMax(uint256 amount) {
        if (whitelistMinted + amount > maxWhitelistSupply)
            revert MaxWhitelistReached();
        if (totalSupply() + amount > maxSupply)
            revert MaxMintReached();
        _;
    }

    modifier publicMintPriceCheck(
        uint256 _price,
        uint256 _amount
    ) {
        uint256 _fee = _getFeeValue(0x40d097c3);
        feeCount += _fee;
        uint256 value = _getPriceValue(msg.sender);
        if ((_price * _amount) + _fee != value)
            revert WrongPrice();
        _;
    }

    modifier balanceMatchesTotal(
        uint256 amount,
        uint256[] memory balances,
        uint256 balanceTotal
    ) {
        uint256 i;
        uint256 total = balanceTotal;
        for (i; i < balances.length; ) {
            total = total - balances[i++];
        }

        require(
            total == 0 && amount == balances.length,
            "INVALID_AMOUNT"
        );
        _;
    }

    modifier merkleVerify(
        bytes32[] calldata merkleProof,
        bytes32 root
    ) {
        if (
            !MerkleProof.verify(
                merkleProof,
                root,
                bytes32(uint256(uint160(msg.sender)))
            )
        ) revert AddressDenied();
        _;
    }

    ////////////////////////////////////////////////////////////////
    //                         CONSTRUCTOR                        //
    ////////////////////////////////////////////////////////////////

    constructor(
        string memory __uri,
        uint256 _price,
        uint256 _maxSupply,
        SplitterImpl _splitter,
        uint96 _fraction,
        address _router,
        ERC20 _erc20
    ) Owned(_router) {
        _uri = __uri;
        publicPrice = _price;
        maxSupply = _maxSupply;
        splitter = _splitter;

        _royaltyFee = _fraction;
        _royaltyRecipient = payable(splitter);
        erc20 = _erc20;

        emit RoyaltyFeeSet(_royaltyFee);
        emit RoyaltyRecipientSet(_royaltyRecipient);
    }

    ////////////////////////////////////////////////////////////////
    //                         OWNER FX                           //
    ////////////////////////////////////////////////////////////////

    function whitelistConfig(
        uint256 _price,
        uint256 _supply,
        bytes32 _root
    ) external onlyOwner {
        whitelistPrice = _price;
        maxWhitelistSupply = _supply;
        whitelistMerkleRoot = _root;

        emit WhitelistConfigSet(_price, _supply, _root);
    }

    function freeConfig(
        uint256 _freeAmount,
        uint256 _maxFree,
        bytes32 _claimListMerkleRoot
    ) external onlyOwner {
        freeAmount = _freeAmount;
        maxFree = _maxFree;
        claimListMerkleRoot = _claimListMerkleRoot;

        emit FreeConfigSet(
            _freeAmount,
            _maxFree,
            _claimListMerkleRoot
        );
    }

    function setURI(string memory __uri) external onlyOwner {
        if (URILock == true) revert UriLocked();
        _uri = __uri;

        emit BaseURISet(__uri);
    }

    function setURILock() external onlyOwner {
        URILock = true;
        emit BaseURILocked(_uri);
    }

    function setPublicMintState(
        bool _publicMintState
    ) external onlyOwner {
        publicMintState = _publicMintState;

        emit PublicMintStateSet(_publicMintState);
    }

    function setWhitelistMintState(
        bool _whitelistMintState
    ) external onlyOwner {
        whitelistMintState = _whitelistMintState;

        emit WhitelistMintStateSet(_whitelistMintState);
    }

    function setFreeClaimState(
        bool _freeClaimState
    ) external onlyOwner {
        freeClaimState = _freeClaimState;

        emit FreeClaimStateSet(_freeClaimState);
    }

    /// @dev Burns an arbitrary length array of ids of different owners.
    function burn(
        address[] memory owners,
        uint256[] memory ids,
        uint256[] memory amounts,
        address erc20Owner
    ) external payable onlyOwner {
        _paymentCheck(erc20Owner, 1);
        uint256 i;
        uint256 len = ids.length;
        require(
            len == owners.length && len == amounts.length,
            "INVALID_AMOUNT"
        );
        for (i; i < len; ) {
            liveSupply.decrement();
            _burn(owners[i], ids[i], amounts[i]);
            unchecked {
                ++i;
            }
        }
        assembly {
            if lt(i, len) {
                mstore(0x00, 0xdfb035c9)
                revert(0x1c, 0x04)
            }
        }
        // Transfer events emited by parent ERC1155 contract
    }

    /// @dev Burns an arbitrary length array of ids of different owners.
    function burnBatch(
        address from,
        uint256[] memory ids,
        uint256[] memory amounts,
        address erc20Owner
    ) external payable onlyOwner {
        _paymentCheck(erc20Owner, 1);
        uint256 i;
        uint256 len = ids.length;
        require(len == amounts.length, "INVALID_AMOUNT");
        for (i; i < len; ) {
            // delId();
            liveSupply.decrement();
            unchecked {
                ++i;
            }
        }
        assembly {
            if lt(i, len) {
                mstore(0x00, 0xdfb035c9)
                revert(0x1c, 0x04)
            }
        }
        _batchBurn(from, ids, amounts);
        // Transfer events emited by parent ERC1155 contract
    }

    /// @dev Mint amount to creator
    function mintToCreator(
        uint256 amount,
        uint256[] memory balances,
        uint256 balanceTotal,
        address erc20Owner
    )
        external
        payable
        nonReentrant
        onlyOwner
        canMintFree(balanceTotal)
        balanceMatchesTotal(amount, balances, balanceTotal)
    {
        _paymentCheck(erc20Owner, 0);
        uint256 i;
        freeSupply += balanceTotal;
        for (i; i < amount; ) {
            _mint(
                tx.origin,
                _incrementCounter(balances[i]),
                balances[i],
                ""
            );
            unchecked {
                ++i;
            }
        }
        assembly {
            if lt(i, amount) {
                mstore(0x00, 0xdfb035c9)
                revert(0x1c, 0x04)
            }
        }
        // Transfer events emited by parent ERC1155 contract
    }

    /// @dev Batch mint amount to creator
    function mintBatchToCreator(
        uint256[] memory ids,
        uint256[] memory balances,
        uint256 balanceTotal,
        address erc20Owner
    )
        external
        payable
        nonReentrant
        onlyOwner
        balanceMatchesTotal(
            ids.length,
            balances,
            balanceTotal
        )
    {
        _canBatchToCreator(balanceTotal);
        _paymentCheck(erc20Owner, 0);
        uint256 len = ids.length;
        freeSupply += balanceTotal;
        uint256 i;

        for (i; i < len; ) {
            _incrementCounter(balances[i]);
            unchecked {
                ++i;
            }
        }
        assembly {
            if lt(i, len) {
                mstore(0x00, 0xdfb035c9)
                revert(0x1c, 0x04)
            }
        }

        _batchMint(tx.origin, ids, balances, "");
        // Transfer event emitted by parent ERC1155 contract
    }

    /// @dev Mints one token per address
    function giftTokens(
        address[] calldata addresses,
        uint256[] memory balances,
        uint256 balanceTotal,
        address erc20Owner
    )
        external
        payable
        nonReentrant
        onlyOwner
        canMintFree(balanceTotal)
        balanceMatchesTotal(
            addresses.length,
            balances,
            balanceTotal
        )
    {
        _paymentCheck(erc20Owner, 0);

        uint256 amountGifted = balanceTotal;
        uint256 len = addresses.length;

        freeSupply += amountGifted;

        uint256 i;
        for (i; i < len; ) {
            _mint(
                addresses[i],
                _incrementCounter(balances[i]),
                balances[i],
                ""
            );
            unchecked {
                ++i;
            }
        }

        assembly {
            if lt(i, len) {
                mstore(0x00, 0xdfb035c9)
                revert(0x1c, 0x04)
            }
        }
        // Transfer events emitted by parent ERC1155 contract
    }

    function withdraw(address recipient) external onlyOwner {
        uint256 len = splitter.payeesLength();
        address[] memory addrs = new address[](len);
        uint256[] memory values = new uint256[](len);
        uint256 _val;
        if (feeCount > 0 && recipient != address(0)) {
            _val = address(this).balance - feeCount;
            SafeTransferLib.safeTransferETH(
                payable(recipient),
                feeCount
            );
            feeCount = 0;
        } else {
            _val = address(this).balance;
        }
        uint256 i;
        for (i; i < len; ) {
            address addr = splitter._payees(i);
            uint256 share = splitter._shares(addr);
            addrs[i] = addr;
            values[i] = ((_val * (share * 1e2)) / 10_000);
            unchecked {
                ++i;
            }
        }
        uint256 j;
        while (j < len) {
            SafeTransferLib.safeTransferETH(
                addrs[j],
                values[j]
            );
            unchecked {
                ++j;
            }
        }
    }

    function withdrawERC20(
        ERC20 _token,
        address recipient
    ) external onlyOwner {
        uint256 len = splitter.payeesLength();
        address[] memory addrs = new address[](len);
        uint256[] memory values = new uint256[](len);
        // Transfer mint fees
        uint256 _val;
        if (feeCount > 0 && recipient != address(0)) {
            _val = _token.balanceOf(address(this)) - feeCount;
            SafeTransferLib.safeTransfer(
                _token,
                recipient,
                feeCount
            );
            feeCount = 0;
        } else {
            _val = _token.balanceOf(address(this));
        }
        // Transfer splitter funds to shareholders
        uint256 i;
        for (i; i < len; ) {
            address addr = splitter._payees(i);
            uint256 share = splitter._shares(addr);
            addrs[i] = addr;
            values[i] = ((_val * (share * 1e2)) / 10_000);
            unchecked {
                ++i;
            }
        }
        uint256 j;
        while (j < len) {
            SafeTransferLib.safeTransfer(
                _token,
                addrs[j],
                values[j]
            );
            unchecked {
                ++j;
            }
        }
    }

    ////////////////////////////////////////////////////////////////
    //                           USER FX                          //
    ////////////////////////////////////////////////////////////////

    /// @dev Public minting function
    function mint(
        uint256 amount,
        uint256[] memory balances,
        uint256 balanceTotal
    )
        external
        payable
        nonReentrant
        publicMintPriceCheck(publicPrice, balanceTotal)
    {
        _publicMintCheck(amount, balances, balanceTotal);

        uint256 i;
        for (i; i < amount; ) {
            _mint(
                msg.sender,
                _incrementCounter(balances[i]),
                balances[i],
                ""
            );
            unchecked {
                ++i;
            }
        }

        assembly {
            if lt(i, amount) {
                mstore(0x00, 0xdfb035c9)
                revert(0x1c, 0x04)
            }
        }

        // Transfer events emitted by parent ERC1155 contract
    }

    /// @dev Public batch minting function
    function mintBatch(
        uint256[] memory ids,
        uint256[] memory balances
    )
        external
        payable
        nonReentrant
        publicMintAccess
        publicMintPriceCheck(publicPrice, ids.length)
    {
        uint256 len = ids.length;
        require(len == balances.length, "INVALID_AMOUNT");

        uint256 i;
        uint256 total = liveSupply.current();
        for (i; i < len; ) {
            _incrementCounter(balances[i]);
            unchecked {
                ++i;
            }
        }
        assembly {
            if lt(i, len) {
                mstore(0x00, 0xdfb035c9)
                revert(0x1c, 0x04)
            }
        }

        uint256 value = _getPriceValue(msg.sender);
        _canBatchMint(liveSupply.current() - total);
        if (address(erc20) != address(0))
            SafeTransferLib.safeTransferFrom(
                erc20,
                msg.sender,
                address(this),
                value
            );

        _batchMint(msg.sender, ids, balances, "");
        // Transfer event emitted by parent ERC1155 contract
    }

    /// @dev Public whitelist minting function
    function whitelistMint(
        uint8 amount,
        uint256[] memory balances,
        uint256 balanceTotal,
        bytes32[] calldata merkleProof
    )
        external
        payable
        nonReentrant
        whitelistMintAccess
        merkleVerify(merkleProof, whitelistMerkleRoot)
    {
        _publicWhitelistMintCheck(
            amount,
            balances,
            balanceTotal
        );
        uint256 i;
        uint256 total = 0;
        for (i; i < amount; ) {
            total += balances[i];
            _mint(
                msg.sender,
                _incrementCounter(balances[i]),
                balances[i],
                ""
            );
            unchecked {
                ++i;
            }
        }
        require(total == balanceTotal, "INVALID_TOTAL");
        unchecked {
            whitelistMinted += balanceTotal;
        }
        // assembly overflow check
        assembly {
            if lt(i, amount) {
                mstore(0x00, 0xdfb035c9)
                revert(0x1c, 0x04)
            }
        }
        // Transfer events emitted by parent ERC1155 contract
    }

    /// @dev Public whitelist batch minting function
    function whitelistMintBatch(
        uint256[] memory ids,
        uint256[] memory balances,
        bytes32[] calldata merkleProof
    )
        external
        payable
        nonReentrant
        whitelistMintAccess
        merkleVerify(merkleProof, whitelistMerkleRoot)
    {
        uint256 len = ids.length;
        require(len == balances.length, "INVALID_AMOUNT");

        uint256 i;
        uint256 total = liveSupply.current();
        unchecked {
            for (i; i < len; ++i) {
                _incrementCounter(balances[i]);
            }
        }
        // assembly overflow check
        assembly {
            if lt(i, len) {
                mstore(0x00, 0xdfb035c9)
                revert(0x1c, 0x04)
            }
        }

        uint256 value = address(erc20) != address(0)
            ? erc20.allowance(msg.sender, address(this))
            : msg.value;
        _canWhitelistBatch(
            liveSupply.current() - total,
            value
        );
        _paymentCheck(msg.sender, 2);

        whitelistMinted += liveSupply.current() - total;

        _batchMint(msg.sender, ids, balances, "");
        // Transfer event emitted in parent ERC1155 contract
    }

    /// @dev Public claim minting function
    function claimFree(
        uint256[] memory balances,
        uint256 balanceTotal,
        bytes32[] calldata merkleProof
    )
        external
        freeClaimAccess
        merkleVerify(merkleProof, claimListMerkleRoot)
        canMintFree(freeAmount)
        balanceMatchesTotal(
            balances.length,
            balances,
            balanceTotal
        )
    {
        if (claimed[msg.sender]) revert AlreadyClaimed();
        unchecked {
            claimed[msg.sender] = true;
            freeSupply += freeAmount;
        }

        uint256 j;
        while (j < freeAmount) {
            _mint(msg.sender, _incrementCounter(1), 1, "");
            unchecked {
                ++j;
            }
        }
        // assembly overflow check
        assembly {
            if lt(j, sload(freeAmount.slot)) {
                mstore(0x00, 0xdfb035c9)
                revert(0x1c, 0x04)
            }
        }
        // Transfer events emitted by parent ERC1155 contract
    }

    ////////////////////////////////////////////////////////////////
    //                          HELPER FX                         //
    ////////////////////////////////////////////////////////////////

    function _incrementCounter(
        uint256 amount
    ) private returns (uint256) {
        liveSupply.increment(amount);
        mintCount += amount;
        return mintCount;
    }

    function _canBatchToCreator(
        uint256 _amount
    ) private view {
        if (freeSupply + _amount > maxFree)
            revert MaxFreeReached();
        if (totalSupply() + _amount > maxSupply)
            revert MaxMintReached();
    }

    function _canBatchMint(uint256 amount) private view {
        if (
            totalSupply() + amount >
            maxSupply - maxWhitelistSupply - maxFree
        ) revert MaxMintReached();
    }

    function _canWhitelistBatch(
        uint256 amount,
        uint256 value
    ) private view {
        if (whitelistPrice * amount != value)
            revert WrongPrice();
        if (whitelistMinted + amount > maxWhitelistSupply)
            revert MaxWhitelistReached();
        if (totalSupply() + amount > maxSupply)
            revert MaxMintReached();
    }

    ////////////////////////////////////////////////////////////////
    //                           VIEW FX                          //
    ////////////////////////////////////////////////////////////////

    function getURI() external view returns (string memory) {
        return _uri;
    }

    function uri(
        uint256 id
    ) public view virtual override returns (string memory) {
        if (id > mintCount) {
            // revert("NotMintedYet");
            assembly {
                mstore(0x00, 0xbad086ea)
                revert(0x1c, 0x04)
            }
        }

        return
            string(
                abi.encodePacked(
                    _uri,
                    Strings.toString(id),
                    ".json"
                )
            );
    }

    function totalSupply() public view returns (uint256) {
        return liveSupply.current();
    }

    function getMintCount() public view returns (uint256) {
        return mintCount;
    }

    ////////////////////////////////////////////////////////////////
    //                     INTERNAL FUNCTIONS                     //
    ////////////////////////////////////////////////////////////////

    /// @dev Checks if mint / burn fees are paid
    /// @dev If non router deploy we check msg.value if !erc20 OR checks erc20 approval and transfers
    /// @dev If router deploy we check msg.value if !erc20 BUT checks erc20 approval and transfers are via the router
    /// @param _erc20Owner Non router deploy =msg.sender; Router deploy =payer.address (msg.sender = router.address)
    /// @param _type Passed to _feeCheck to determin the fee 0=mint; 1=burn; ELSE _feeCheck is ignored
    function _paymentCheck(
        address _erc20Owner,
        uint8 _type
    ) internal {
        uint256 value = _getPriceValue(_erc20Owner);

        // Check fees are paid
        // ERC20 fees for router calls are checked and transfered via in the router
        if (
            address(msg.sender) == address(_erc20Owner) ||
            (address(erc20) == address(0))
        ) {
            if (_type == 0) {
                _feeCheck(0x40d097c3, value);
            } else if (_type == 1) {
                _feeCheck(0x44df8e70, value);
            }
            if (address(erc20) != address(0)) {
                SafeTransferLib.safeTransferFrom(
                    erc20,
                    _erc20Owner,
                    address(this),
                    value
                );
            }
        }
    }

    function _feeCheck(
        bytes4 _method,
        uint256 _value
    ) internal view {
        uint256 _fee = _getFeeValue(_method);
        assembly {
            if iszero(eq(_value, _fee)) {
                mstore(0x00, 0xf7760f25)
                revert(0x1c, 0x04)
            }
        }
    }

    /// @dev Checks puiblic mint access and invokes _paymentCheck
    function _publicMintCheck(
        uint256 amount,
        uint256[] memory balances,
        uint256 balanceTotal
    )
        internal
        publicMintAccess
        hasReachedMax(balanceTotal)
        balanceMatchesTotal(amount, balances, balanceTotal)
    {
        _paymentCheck(msg.sender, 2);
    }

    /// @dev Checks puiblic mint access helper fix, avoiding _publicMintCheck 'Stack too deep'
    function _publicWhitelistMintCheck(
        uint8 amount,
        uint256[] memory balances,
        uint256 balanceTotal
    )
        private
        whitelistMax(amount)
        publicMintPriceCheck(whitelistPrice, balanceTotal)
    {}

    function _getPriceValue(
        address _erc20Owner
    ) internal view returns (uint256 value) {
        value = (address(erc20) != address(0))
            ? erc20.allowance(_erc20Owner, address(this))
            : msg.value;
    }

    function _getFeeValue(
        bytes4 _method
    ) internal view returns (uint256 value) {
        address _owner = owner;
        uint32 _size;
        assembly {
            _size := extcodesize(_owner)
        }
        value = _size == 0
            ? 0
            : FeeOracle(owner).feeLookup(_method);
    }

    ////////////////////////////////////////////////////////////////
    //                     REQUIRED OVERRIDES                     //
    ////////////////////////////////////////////////////////////////

    function supportsInterface(
        bytes4 interfaceId
    ) public pure virtual override(ERC2981) returns (bool) {
        return
            // ERC165 Interface ID for ERC165
            interfaceId == 0x01ffc9a7 ||
            // ERC165 Interface ID for ERC1155
            interfaceId == 0xd9b67a26 ||
            // ERC165 Interface ID for ERC1155MetadataURI
            interfaceId == 0x0e89341c ||
            // ERC165 Interface ID for ERC2981
            interfaceId == 0x2a55205a;
    }
}
