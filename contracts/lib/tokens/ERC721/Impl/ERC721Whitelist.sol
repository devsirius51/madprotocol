// SPDX-License-Identifier: AGPL-3.0-only

pragma solidity 0.8.16;

import { ERC721WhitelistEventsAndErrors } from "../Base/interfaces/ERC721EventAndErrors.sol";
import { ERC721, ERC721TokenReceiver } from "../Base/ERC721.sol";
import { ERC2981 } from "../../common/ERC2981.sol";
import { ERC20 } from "../../ERC20.sol";
import { ReentrancyGuard } from "../../../security/ReentrancyGuard.sol";
import { SplitterImpl } from "../../../splitter/SplitterImpl.sol";
import { MerkleProof } from "../../../utils/MerkleProof.sol";
import { Counters } from "../../../utils/Counters.sol";
import { Strings } from "../../../utils/Strings.sol";
import { Owned } from "../../../auth/Owned.sol";
import { SafeTransferLib } from "../../../utils/SafeTransferLib.sol";
import { FeeOracle } from "../../common/FeeOracle.sol";

contract ERC721Whitelist is
    ERC721,
    ERC2981,
    ERC721WhitelistEventsAndErrors,
    ERC721TokenReceiver,
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
    bool public baseURILock; 
    
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

    modifier publicMintPriceCheck(uint256 _price, uint256 _amount) {        
        uint256 _fee = _getFeeValue(0x40d097c3);
        feeCount += _fee;
        uint256 value = _getPriceValue(msg.sender);
        if ((_price * _amount) + _fee != value) revert WrongPrice();
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
            mintCount + amount >
            maxSupply - maxWhitelistSupply - maxFree
        ) revert MaxMintReached();
        _;
    }

    modifier canMintFree(uint256 amount) {
        if (freeSupply + amount > maxFree)
            revert MaxFreeReached();
        if (mintCount + amount > maxSupply)
            revert MaxMintReached();
        _;
    }

    modifier whitelistMax(uint8 amount) {
        if (whitelistMinted + amount > maxWhitelistSupply)
            revert MaxWhitelistReached();
        if (mintCount + amount > maxSupply)
            revert MaxMintReached();
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
        string memory _name,
        string memory _symbol,
        string memory _baseURI,
        uint256 _price,
        uint256 _maxSupply,
        SplitterImpl _splitter,
        uint96 _fraction,
        address _router,
        ERC20 _erc20
    ) ERC721(_name, _symbol) Owned(_router) {
        baseURI = _baseURI;
        publicPrice = _price;
        maxSupply = _maxSupply;
        splitter = _splitter;
        erc20 = _erc20;

        _royaltyFee = _fraction;
        _royaltyRecipient = payable(splitter);

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

    function setBaseURI(string memory _baseURI)
        external
        onlyOwner
    {
        if (baseURILock == true) revert UriLocked();
        baseURI = _baseURI;

        emit BaseURISet(_baseURI);
    }

    function setBaseURILock()
        external
        onlyOwner
    {
        baseURILock = true;
        emit BaseURILocked(baseURI);
    }

    function setPublicMintState(bool _publicMintState)
        external
        onlyOwner
    {
        publicMintState = _publicMintState;

        emit PublicMintStateSet(_publicMintState);
    }

    function setWhitelistMintState(bool _whitelistMintState)
        external
        onlyOwner
    {
        whitelistMintState = _whitelistMintState;

        emit WhitelistMintStateSet(_whitelistMintState);
    }

    function setFreeClaimState(bool _freeClaimState)
        external
        onlyOwner
    {
        freeClaimState = _freeClaimState;

        emit FreeClaimStateSet(_freeClaimState);
    }

    function burn(uint256[] memory ids, address erc20Owner)
        external
        payable
        onlyOwner
    {
        _paymentCheck(erc20Owner, 1);
        uint256 i;
        uint256 len = ids.length;
        for (i; i < len; ) {
            // delId();
            liveSupply.decrement();
            _burn(ids[i]);
            unchecked {
                ++i;
            }
        }
        // assembly overflow check
        assembly {
            if lt(i, len) {
                mstore(0x00, 0xdfb035c9)
                revert(0x1c, 0x04)
            }
        }
        // Transfer event emited by parent ERC721 contract
    }

    function mintToCreator(uint256 amount, address erc20Owner)
        external
        payable
        nonReentrant
        onlyOwner
        canMintFree(amount)
    {
        _paymentCheck(erc20Owner, 0);

        freeSupply += amount;
        uint256 i;
        for (i; i < amount; ) {
            _safeMint(tx.origin, _incrementCounter());
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
        // Transfer event emitted in parent ERC721 contract
    }

    /// @dev Mints one token per address.
    /// @dev Allows erc20 payments only if erc20 exists
    function giftTokens(
        address[] calldata addresses,
        address erc20Owner
    )
        external
        payable
        nonReentrant
        onlyOwner
        canMintFree(addresses.length)
    {
        _paymentCheck(erc20Owner, 0);

        uint256 amountGifted = addresses.length;
        freeSupply += amountGifted;
        uint256 i;
        for (i; i < amountGifted; ) {
            _safeMint(addresses[i], _incrementCounter());
            unchecked {
                ++i;
            }
        }
        assembly {
            if lt(i, amountGifted) {
                mstore(0x00, 0xdfb035c9)
                revert(0x1c, 0x04)
            }
        }
        // Transfer event emitted in parent ERC721 contract
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

    function withdrawERC20(ERC20 _token, address recipient) external onlyOwner {
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

    /// @dev Public minting
    function mint(uint256 amount)
        external
        payable
        nonReentrant
        publicMintAccess
        hasReachedMax(amount)
        publicMintPriceCheck(publicPrice, amount)
    {
        _paymentCheck(msg.sender, 2);

        uint256 i;
        for (i; i < amount; ) {
            _safeMint(msg.sender, _incrementCounter());
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

        // Transfer event emitted in parent ERC721 contract
    }

    /// @dev Public whilist mint
    function whitelistMint(
        uint8 amount,
        bytes32[] calldata merkleProof
    )
        external
        payable
        nonReentrant
        whitelistMintAccess
        publicMintPriceCheck(whitelistPrice, amount)
        merkleVerify(merkleProof, whitelistMerkleRoot)
        whitelistMax(amount)
    {
        _paymentCheck(msg.sender, 2);

        unchecked {
            whitelistMinted += amount;
        }
        uint256 i;
        for (i; i < amount; ) {
            _safeMint(msg.sender, _incrementCounter());
            unchecked {
                ++i;
            }
        }
        // assembly overflow check
        assembly {
            if lt(i, amount) {
                mstore(0x00, 0xdfb035c9)
                revert(0x1c, 0x04)
            }
        }
        // Transfer event emitted in parent ERC721 contract
    }

    function claimFree(bytes32[] calldata merkleProof)
        external
        freeClaimAccess
        merkleVerify(merkleProof, claimListMerkleRoot)
        canMintFree(freeAmount)
    {
        if (claimed[msg.sender]) revert AlreadyClaimed();

        unchecked {
            claimed[msg.sender] = true;
            freeSupply += freeAmount;
        }

        uint256 j;
        while (j < freeAmount) {
            _safeMint(msg.sender, _incrementCounter());
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
        // Transfer event emitted in parent ERC721 contract
    }

    ////////////////////////////////////////////////////////////////
    //                          HELPER FX                         //
    ////////////////////////////////////////////////////////////////

    function _incrementCounter() private returns (uint256) {
        liveSupply.increment();
        mintCount += 1;
        return mintCount;
    }

    ////////////////////////////////////////////////////////////////
    //                           VIEW FX                          //
    ////////////////////////////////////////////////////////////////

    function getBaseURI()
        external
        view
        returns (string memory)
    {
        return baseURI;
    }

    function tokenURI(uint256 id)
        public
        view
        virtual
        override
        returns (string memory)
    {
        if (id > mintCount) revert NotMintedYet();
        return
            string(
                abi.encodePacked(
                    baseURI,
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
    function _paymentCheck(address _erc20Owner, uint8 _type)
        internal
    {
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

    function _feeCheck(bytes4 _method, uint256 _value)
        internal
        view
    {
        uint256 _fee = _getFeeValue(_method);
        assembly {
            if iszero(eq(_value, _fee)) {
                mstore(0x00, 0xf7760f25)
                revert(0x1c, 0x04)
            }
        }
    }

    function _getPriceValue(address _erc20Owner)
        internal
        view
        returns (uint256 value)
    {
        value = 
            (address(erc20) != address(0))
                ? erc20.allowance(_erc20Owner, address(this))
                : msg.value;
    }

    function _getFeeValue(bytes4 _method)
        internal
        view
        returns (uint256 value)
    {
        address _owner = owner;
        uint32 _size;
        assembly {
            _size := extcodesize(_owner)
        }
        value = _size == 0 ? 0 : FeeOracle(owner).feeLookup(_method);
    }

    ////////////////////////////////////////////////////////////////
    //                     REQUIRED OVERRIDES                     //
    ////////////////////////////////////////////////////////////////

    function supportsInterface(bytes4 interfaceId)
        public
        pure
        virtual
        override(ERC721, ERC2981)
        returns (bool)
    {
        return
            // ERC165 Interface ID for ERC165
            interfaceId == 0x01ffc9a7 ||
            // ERC165 Interface ID for ERC721
            interfaceId == 0x80ac58cd ||
            // ERC165 Interface ID for ERC721Metadata
            interfaceId == 0x5b5e139f ||
            // ERC165 Interface ID for ERC2981
            interfaceId == 0x2a55205a;
    }
}
