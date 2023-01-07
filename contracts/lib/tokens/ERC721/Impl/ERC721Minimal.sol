// SPDX-License-Identifier: AGPL-3.0-only

pragma solidity 0.8.16;

import { ERC721MinimalEventsAndErrors } from "../Base/interfaces/ERC721EventAndErrors.sol";
import { ERC721, ERC721TokenReceiver } from "../Base/ERC721.sol";
import { ERC2981 } from "../../common/ERC2981.sol";
import { ERC20 } from "../../ERC20.sol";
import { SplitterImpl } from "../../../splitter/SplitterImpl.sol";

import { ReentrancyGuard } from "../../../security/ReentrancyGuard.sol";
import { Owned } from "../../../auth/Owned.sol";
import { SafeTransferLib } from "../../../utils/SafeTransferLib.sol";
import { FeeOracle } from "../../common/FeeOracle.sol";

contract ERC721Minimal is
    ERC721,
    ERC2981,
    ERC721TokenReceiver,
    ERC721MinimalEventsAndErrors,
    Owned,
    ReentrancyGuard
{
    ////////////////////////////////////////////////////////////////
    //                           STORAGE                          //
    ////////////////////////////////////////////////////////////////

    SplitterImpl public splitter;
    uint256 public price;
    string private _tokenURI;
    /// @dev  default := false
    bool private minted;
    /// @dev  default := false
    bool public publicMintState;
    ERC20 public erc20;

    ////////////////////////////////////////////////////////////////
    //                         CONSTRUCTOR                        //
    ////////////////////////////////////////////////////////////////

    /// @dev The fee of royalties denominator is 10000 in BPS.
    constructor(
        string memory _name,
        string memory _symbol,
        string memory __tokenURI,
        uint256 _price,
        SplitterImpl _splitter,
        uint96 _fraction,
        address _router,
        ERC20 _erc20
    ) ERC721(_name, _symbol) Owned(_router) {
        _tokenURI = __tokenURI;
        price = _price;
        splitter = _splitter;
        _royaltyFee = _fraction;
        _royaltyRecipient = payable(splitter);
        erc20 = _erc20;

        emit RoyaltyFeeSet(_royaltyFee);
        emit RoyaltyRecipientSet(_royaltyRecipient);
    }

    ////////////////////////////////////////////////////////////////
    //                          OWNER FX                          //
    ////////////////////////////////////////////////////////////////

    /// @dev Can't be reminted if already minted, due to boolean.
    /// @dev Allows msg.value payments only if !erc20
    function safeMint(address to) external payable onlyOwner {
        if (address(erc20) != address(0)) revert("INVALID_TYPE");
        _feeCheck(0x40d097c3, msg.value);
        if (minted) revert AlreadyMinted();
        minted = true;
        _safeMint(to, 1);
    }

    /// @dev Can't be reminted if already minted, due to boolean.
    /// @dev ERC20 payment minting compatible with MADRouter.
    /// @dev msg.sender = router
    /// @dev erc20Owner = paying user
    function safeMint(address to, address erc20Owner) external payable onlyOwner {
        if (address(erc20) == address(0)) revert("INVALID_TYPE");
        uint256 value = erc20.allowance(erc20Owner, address(this));
        _feeCheck(0x40d097c3, value);
        if (minted) revert AlreadyMinted();
        SafeTransferLib.safeTransferFrom(erc20, erc20Owner, address(this), value);
        minted = true;
        _safeMint(to, 1);
    }

    /// @dev Can't be reburnt since `minted` is not updated to false.
    /// @dev Allows msg.value payments only if !erc20
    function burn() external payable onlyOwner {
        if (address(erc20) != address(0)) revert("INVALID_TYPE");
        _feeCheck(0x44df8e70, msg.value);
        _burn(1);
    }

    /// @dev Can't be reburnt since `minted` is not updated to false.
    /// @dev ERC20 payment for burning compatible with MADRouter.
    /// @dev Allows msg.value payments only if erc20
    function burn(address erc20Owner) external payable onlyOwner {
        if (address(erc20) == address(0)) revert("INVALID_TYPE");
        uint256 value = erc20.allowance(erc20Owner, address(this));
        _feeCheck(0x44df8e70, value);
        SafeTransferLib.safeTransferFrom(erc20, erc20Owner, address(this), value);
        _burn(1);
    }

    function setPublicMintState(bool _publicMintState)
        external
        onlyOwner
    {
        publicMintState = _publicMintState;

        emit PublicMintStateSet(_publicMintState);
    }

    function withdraw() external onlyOwner {
        uint256 len = splitter.payeesLength();
        address[] memory addrs = new address[](len);
        uint256[] memory values = new uint256[](len);
        uint256 _val = address(this).balance;
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

    function withdrawERC20(ERC20 _token) external onlyOwner {
        uint256 len = splitter.payeesLength();
        address[] memory addrs = new address[](len);
        uint256[] memory values = new uint256[](len);
        uint256 i;
        uint256 _val = _token.balanceOf(address(this));
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

    function publicMint() external payable nonReentrant {
        if (address(erc20) != address(0)) revert("INVALID_TYPE");
        if (!publicMintState) revert PublicMintOff();
        if (msg.value != price) revert WrongPrice();
        if (minted) revert AlreadyMinted();

        minted = true;
        
        _safeMint(msg.sender, 1);
    }

    function publicMint(address erc20Owner) external payable nonReentrant {
        if (address(erc20) == address(0)) revert("INVALID_TYPE");
        uint256 value = erc20.allowance(erc20Owner, address(this));
        
        if (!publicMintState) revert PublicMintOff();
        if (value != price) revert WrongPrice();
        if (minted) revert AlreadyMinted();

        SafeTransferLib.safeTransferFrom(erc20, erc20Owner, address(this), value);
        minted = true;

        _safeMint(msg.sender, 1);
    }

    ////////////////////////////////////////////////////////////////
    //                           VIEW FX                          //
    ////////////////////////////////////////////////////////////////

    function tokenURI(uint256 id)
        public
        view
        virtual
        override
        returns (string memory _uri)
    {
        if (id != 1) revert InvalidId();
        if (!minted) revert NotMinted();
        return _tokenURI;
    }

    ////////////////////////////////////////////////////////////////
    //                     INTERNAL FUNCTIONS                     //
    ////////////////////////////////////////////////////////////////

    function _feeCheck(bytes4 _method, uint256 _value) internal view {
        address _owner = owner;
        uint32 size;
        assembly {
            size := extcodesize(_owner)
        }
        if (size == 0) {
            return; 
        }
        uint256 _fee = FeeOracle(owner).feeLookup(_method);
        assembly {
            if iszero(eq(_value, _fee)) {
                mstore(0x00, 0xf7760f25)
                revert(0x1c, 0x04)
            }
        }
    }

    ////////////////////////////////////////////////////////////////
    //                      REQUIRED OVERRIDES                    //
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
