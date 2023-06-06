// SPDX-License-Identifier: AGPL-3.0-only

pragma solidity 0.8.19;

import { FactoryEventsAndErrors721 } from "contracts/Shared/EventsAndErrors.sol";
import {
    MADFactoryBase,
    Types,
    Bytes32AddressLib
} from "contracts/Factory/MADFactoryBase.sol";

contract MADFactory721 is MADFactoryBase, FactoryEventsAndErrors721 {
    ////////////////////////////////////////////////////////////////
    //                         CONSTRUCTOR                        //
    ////////////////////////////////////////////////////////////////

    constructor(
        address _marketplace,
        address _signer,
        address _paymentTokenAddress
    ) MADFactoryBase(_marketplace, _signer, _paymentTokenAddress) { }

    function createCollection(
        uint8 _tokenType,
        string memory _tokenSalt,
        string memory _name,
        string memory _symbol,
        uint256 _price,
        uint256 _maxSupply,
        string memory _baseURI,
        address _splitter,
        uint96 _royalty,
        bytes32[] memory _extra
    ) public {
        emit ERC721BasicCreated(
            _splitter,
            _createCollection(
                _tokenType,
                _tokenSalt,
                _name,
                _symbol,
                _price,
                _maxSupply,
                _baseURI,
                _splitter,
                _royalty,
                _extra
            ),
            _name,
            _symbol,
            _royalty,
            _maxSupply,
            _price
            );
    }
}
