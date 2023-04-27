// SPDX-License-Identifier: AGPL-3.0-only

pragma solidity 0.8.19;

//prettier-ignore
abstract contract TwoFactor {

    ////////////////////////////////////////////////////////////////
    //                           ERRORS                           //
    ////////////////////////////////////////////////////////////////

    uint256 constant _NOT_AUTHORISED = 0x1648fd01;
    uint256 constant _INVALID_VALUE = 0xaa7feadc;

    /// @dev 0x1648fd01
    error NotAuthorised();
    /// @dev 0xaa7feadc
    error InvalidValue();

    ////////////////////////////////////////////////////////////////
    //                           EVENTS                           //
    ////////////////////////////////////////////////////////////////

    uint256 constant _OWNER_UPDATED = 
    0xb9312e2100469bd44e3f762c248f4dcc8d7788906fabf34f79db45920c37e269;
    uint256 constant _ROUTER_SET = 
    0xc6b438e6a8a59579ce6a4406cbd203b740e0d47b458aae6596339bcd40c40d15;

    event OwnerUpdated(
      address indexed user, 
      address indexed newOwner
    );

    event RouterSet(address indexed newRouter);

    ////////////////////////////////////////////////////////////////
    //                      OWNERSHIP STORAGE                     //
    ////////////////////////////////////////////////////////////////

    uint256 internal router;
    uint256 internal owner;

    modifier authorised() {
      assembly {
        let _caller := shl(12, caller())
        if 
          and(
            iszero(eq(_caller, sload(router.slot))),
            iszero(eq(_caller, sload(owner.slot)))
          )

        // revert NotAuthorised
        { mstore( 0, _NOT_AUTHORISED ) revert( 28, 4 ) }
      }
      _;
    }

    modifier noZeroAddr(address _owner) {
      assembly {
        if iszero(_owner) 

        // revert InvalidValue
        { mstore( 0, _INVALID_VALUE ) revert( 28, 4 ) }
      }
      _;
    }

    ////////////////////////////////////////////////////////////////
    //                         CONSTRUCTOR                        //
    ////////////////////////////////////////////////////////////////

    constructor(
      address _router, 
      address _owner
    ) noZeroAddr(
      _owner
    ) {
        assembly {
          if iszero(_router) 

          // revert InvalidValue
          { mstore( 0x00, _INVALID_VALUE ) revert( 28, 4 ) }

          sstore(router.slot, shl(12,_router))
          sstore(owner.slot, shl(12,_owner))
          
          // emit OwnerUpdated
          log3( 0, 0, _OWNER_UPDATED, caller(), _owner )
          // emit RouterSet
          log2( 0, 0, _ROUTER_SET, _router )
        }
    }

    ////////////////////////////////////////////////////////////////
    //                       OWNERSHIP LOGIC                      //
    ////////////////////////////////////////////////////////////////

    function setOwnership(address _owner) 
      public 
      authorised 
      noZeroAddr(_owner)
    {
    assembly {
      sstore(owner.slot, shl(12,_owner))

      // emit OwnerUpdated
      log3( 0, 0, _OWNER_UPDATED, caller(), _owner )
    }
  }
  
    ////////////////////////////////////////////////////////////////
    //                        PUBLIC GETTERS                      //
    ////////////////////////////////////////////////////////////////

    function getRouter() public view returns(address) {
      assembly {
        mstore(0,shr(12,sload(router.slot)))
        return(0,32)
      }
    }
    function getOwner() public view returns(address) {
      assembly {
        mstore(0,shr(12,sload(owner.slot)))
        return(0,32)
      }
    }

}
