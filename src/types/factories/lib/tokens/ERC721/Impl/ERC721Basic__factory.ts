/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC721Basic,
  ERC721BasicInterface,
} from "../../../../../lib/tokens/ERC721/Impl/ERC721Basic";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSupply",
        type: "uint256",
      },
      {
        internalType: "contract SplitterImpl",
        name: "_splitter",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "_fraction",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "_erc20",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "LoopOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxSupplyReached",
    type: "error",
  },
  {
    inputs: [],
    name: "NotMintedYet",
    type: "error",
  },
  {
    inputs: [],
    name: "PublicMintClosed",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongPrice",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "newBaseURI",
        type: "string",
      },
    ],
    name: "BaseURISet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bool",
        name: "newPublicState",
        type: "bool",
      },
    ],
    name: "PublicMintStateSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newRoyaltyFee",
        type: "uint256",
      },
    ],
    name: "RoyaltyFeeSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newRecipient",
        type: "address",
      },
    ],
    name: "RoyaltyRecipientSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "erc20Owner",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "erc20",
    outputs: [
      {
        internalType: "contract ERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBaseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMintCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "erc20Owner",
        type: "address",
      },
    ],
    name: "mintTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "publicMintState",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "royaltyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_publicMintState",
        type: "bool",
      },
    ],
    name: "setPublicMintState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "splitter",
    outputs: [
      {
        internalType: "contract SplitterImpl",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "withdrawERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260016009553480156200001657600080fd5b5060405162002d2e38038062002d2e83398101604081905262000039916200028b565b81898960006200004a83826200040a565b5060016200005982826200040a565b5050600880546001600160a01b0319166001600160a01b0384169081179091556040519091506000907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76908290a350600b620000b688826200040a565b50600c869055600d859055600e8054610100600160a81b0319166101006001600160a01b03878116820292909217928390556001600160601b0386166006819055600780549290940483166001600160a01b031992831617909355601080549091169184169190911790556040517fc36422dcc77a5c93a5c48743078f8130c9fcc2a0ff893904ee62a3565688117c90600090a26007546040516001600160a01b03909116907f2a5a1009e36beb67c3a1ada61dd1343d7e9ec62c70965492fbaa06234f8316b190600090a2505050505050505050620004d6565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001b957600080fd5b81516001600160401b0380821115620001d657620001d662000191565b604051601f8301601f19908116603f0116810190828211818310171562000201576200020162000191565b816040528381526020925086838588010111156200021e57600080fd5b600091505b8382101562000242578582018301518183018401529082019062000223565b600093810190920192909252949350505050565b80516001600160a01b03811681146200026e57600080fd5b919050565b80516001600160601b03811681146200026e57600080fd5b60008060008060008060008060006101208a8c031215620002ab57600080fd5b89516001600160401b0380821115620002c357600080fd5b620002d18d838e01620001a7565b9a5060208c0151915080821115620002e857600080fd5b620002f68d838e01620001a7565b995060408c01519150808211156200030d57600080fd5b506200031c8c828d01620001a7565b97505060608a0151955060808a015194506200033b60a08b0162000256565b93506200034b60c08b0162000273565b92506200035b60e08b0162000256565b91506200036c6101008b0162000256565b90509295985092959850929598565b600181811c908216806200039057607f821691505b602082108103620003b157634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200040557600081815260208120601f850160051c81016020861015620003e05750805b601f850160051c820191505b818110156200040157828155600101620003ec565b5050505b505050565b81516001600160401b0381111562000426576200042662000191565b6200043e816200043784546200037b565b84620003b7565b602080601f8311600181146200047657600084156200045d5750858301515b600019600386901b1c1916600185901b17855562000401565b600085815260208120601f198616915b82811015620004a75788860151825594840194600190910190840162000486565b5085821015620004c65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61284880620004e66000396000f3fe6080604052600436106101e35760003560e01c80636352211e11610102578063a035b1fe11610095578063c87b56dd11610064578063c87b56dd14610598578063d5abeb01146105b8578063e985e9c5146105ce578063f4f3b2001461060957600080fd5b8063a035b1fe1461052f578063a0712d6814610545578063a22cb46514610558578063b88d4fde1461057857600080fd5b8063879fbedf116100d1578063879fbedf146104c55780638da5cb5b146104e55780638fc3b5491461050557806395d89b411461051a57600080fd5b80636352211e1461045057806370a0823114610470578063714c539814610490578063785e9e86146104a557600080fd5b806323b872dd1161017a5780633cd8045e116101495780633cd8045e146103d857806342842e0e146103fd578063438b1b4b1461041d57806355f804b31461043057600080fd5b806323b872dd146103515780632a55205a14610371578063362c0cb5146103b05780633ccfd60b146103c357600080fd5b806313af4035116101b657806313af4035146102af578063150b7a02146102cf57806318160ddd1461031457806322ab47a11461033757600080fd5b806301ffc9a7146101e857806306fdde031461021d578063081812fc1461023f578063095ea7b31461028d575b600080fd5b3480156101f457600080fd5b506102086102033660046120a4565b610629565b60405190151581526020015b60405180910390f35b34801561022957600080fd5b50610232610696565b60405161021491906120ec565b34801561024b57600080fd5b5061027561025a36600461211f565b6004602052600090815260409020546001600160a01b031681565b6040516001600160a01b039091168152602001610214565b34801561029957600080fd5b506102ad6102a8366004612158565b610724565b005b3480156102bb57600080fd5b506102ad6102ca366004612184565b61080b565b3480156102db57600080fd5b506102fb6102ea3660046121a1565b630a85bd0160e11b95945050505050565b6040516001600160e01b03199091168152602001610214565b34801561032057600080fd5b506103296108a0565b604051908152602001610214565b34801561034357600080fd5b50600e546102089060ff1681565b34801561035d57600080fd5b506102ad61036c366004612240565b6108b0565b34801561037d57600080fd5b5061039161038c366004612281565b610a96565b604080516001600160a01b039093168352602083019190915201610214565b6102ad6103be3660046122ea565b610acc565b3480156103cf57600080fd5b506102ad610b81565b3480156103e457600080fd5b50600e546102759061010090046001600160a01b031681565b34801561040957600080fd5b506102ad610418366004612240565b610e99565b6102ad61042b3660046123a2565b610f91565b34801561043c57600080fd5b506102ad61044b3660046123e4565b611057565b34801561045c57600080fd5b5061027561046b36600461211f565b6110ee565b34801561047c57600080fd5b5061032961048b366004612184565b611145565b34801561049c57600080fd5b506102326111b9565b3480156104b157600080fd5b50601054610275906001600160a01b031681565b3480156104d157600080fd5b506102ad6104e0366004612489565b61124b565b3480156104f157600080fd5b50600854610275906001600160a01b031681565b34801561051157600080fd5b50600f54610329565b34801561052657600080fd5b506102326112d1565b34801561053b57600080fd5b50610329600c5481565b6102ad61055336600461211f565b6112de565b34801561056457600080fd5b506102ad6105733660046124a4565b611491565b34801561058457600080fd5b506102ad6105933660046121a1565b6114fd565b3480156105a457600080fd5b506102326105b336600461211f565b6115de565b3480156105c457600080fd5b50610329600d5481565b3480156105da57600080fd5b506102086105e93660046124d0565b600560209081526000928352604080842090915290825290205460ff1681565b34801561061557600080fd5b506102ad610624366004612184565b611635565b60006301ffc9a760e01b6001600160e01b03198316148061065a57506380ac58cd60e01b6001600160e01b03198316145b806106755750635b5e139f60e01b6001600160e01b03198316145b80610690575063152a902d60e11b6001600160e01b03198316145b92915050565b600080546106a390612509565b80601f01602080910402602001604051908101604052809291908181526020018280546106cf90612509565b801561071c5780601f106106f15761010080835404028352916020019161071c565b820191906000526020600020905b8154815290600101906020018083116106ff57829003601f168201915b505050505081565b6000818152600260205260409020546001600160a01b03163381148061076d57506001600160a01b038116600090815260056020908152604080832033845290915290205460ff165b6107af5760405162461bcd60e51b815260206004820152600e60248201526d1393d517d055551213d49256915160921b60448201526064015b60405180910390fd5b60008281526004602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6008546001600160a01b031633146108545760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016107a6565b600880546001600160a01b0319166001600160a01b03831690811790915560405133907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a350565b60006108ab600a5490565b905090565b6000818152600260205260409020546001600160a01b038481169116146109195760405162461bcd60e51b815260206004820152600a60248201527f57524f4e475f46524f4d0000000000000000000000000000000000000000000060448201526064016107a6565b6001600160a01b03821661096f5760405162461bcd60e51b815260206004820152601160248201527f494e56414c49445f524543495049454e5400000000000000000000000000000060448201526064016107a6565b336001600160a01b03841614806109a957506001600160a01b038316600090815260056020908152604080832033845290915290205460ff165b806109ca57506000818152600460205260409020546001600160a01b031633145b610a075760405162461bcd60e51b815260206004820152600e60248201526d1393d517d055551213d49256915160921b60448201526064016107a6565b6001600160a01b0380841660008181526003602090815260408083208054600019019055938616808352848320805460010190558583526002825284832080546001600160a01b03199081168317909155600490925284832080549092169091559251849392917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6007546006546001600160a01b039091169060009061271090610ab99085612559565b610ac39190612578565b90509250929050565b6008546001600160a01b03163314610b155760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016107a6565b610b208160016119c0565b81516000905b80821015610b6557610b38600a611ada565b610b5a848381518110610b4d57610b4d61259a565b6020026020010151611af7565b816001019150610b26565b80821015610b7b5763dfb035c96000526004601cfd5b50505050565b6008546001600160a01b03163314610bca5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016107a6565b6000600e60019054906101000a90046001600160a01b03166001600160a01b031663e919ecad6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c4391906125b0565b905060008167ffffffffffffffff811115610c6057610c606122a3565b604051908082528060200260200182016040528015610c89578160200160208202803683370190505b50905060008267ffffffffffffffff811115610ca757610ca76122a3565b604051908082528060200260200182016040528015610cd0578160200160208202803683370190505b5090504760005b84811015610e4257600e54604051631419245f60e11b81526004810183905260009161010090046001600160a01b03169063283248be90602401602060405180830381865afa158015610d2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5291906125c9565b600e5460405163b34c8caf60e01b81526001600160a01b0380841660048301529293506000926101009092049091169063b34c8caf90602401602060405180830381865afa158015610da8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dcc91906125b0565b905081868481518110610de157610de161259a565b6001600160a01b0390921660209283029190910190910152612710610e07826064612559565b610e119086612559565b610e1b9190612578565b858481518110610e2d57610e2d61259a565b60209081029190910101525050600101610cd7565b60005b85811015610e9157610e89858281518110610e6257610e6261259a565b6020026020010151858381518110610e7c57610e7c61259a565b6020026020010151611bc4565b600101610e45565b505050505050565b610ea48383836108b0565b6001600160a01b0382163b1580610f4d5750604051630a85bd0160e11b8082523360048301526001600160a01b03858116602484015260448301849052608060648401526000608484015290919084169063150b7a029060a4016020604051808303816000875af1158015610f1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4191906125e6565b6001600160e01b031916145b610f8c5760405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b60448201526064016107a6565b505050565b6008546001600160a01b03163314610fda5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016107a6565b81600d5481600f54610fec9190612603565b111561100b5760405163d05cb60960e01b815260040160405180910390fd5b6110168260006119c0565b60005b8381101561103a576110328561102d611c1f565b611c4a565b600101611019565b838110156110505763dfb035c96000526004601cfd5b5050505050565b6008546001600160a01b031633146110a05760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016107a6565b600b6110ac828261265c565b50806040516110bb919061271c565b604051908190038120907ff9c7803e94e0d3c02900d8a90893a6d5e90dd04d32a4cfe825520f82bf9f32f690600090a250565b6000818152600260205260409020546001600160a01b0316806111405760405162461bcd60e51b815260206004820152600a6024820152691393d517d3525395115160b21b60448201526064016107a6565b919050565b60006001600160a01b03821661119d5760405162461bcd60e51b815260206004820152600c60248201527f5a45524f5f41444452455353000000000000000000000000000000000000000060448201526064016107a6565b506001600160a01b031660009081526003602052604090205490565b6060600b80546111c890612509565b80601f01602080910402602001604051908101604052809291908181526020018280546111f490612509565b80156112415780601f1061121657610100808354040283529160200191611241565b820191906000526020600020905b81548152906001019060200180831161122457829003601f168201915b5050505050905090565b6008546001600160a01b031633146112945760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016107a6565b600e805460ff19168215159081179091556040517f2f3b349e2956d565a50532dcc875a49be7f558411642122cf5e50ca9b4bb14e690600090a250565b600180546106a390612509565b6009546001146113305760405162461bcd60e51b815260206004820152600a60248201527f5245454e5452414e43590000000000000000000000000000000000000000000060448201526064016107a6565b6002600955600e5460ff16611358576040516316851fc760e11b815260040160405180910390fd5b80600d5481600f5461136a9190612603565b11156113895760405163d05cb60960e01b815260040160405180910390fd5b600c5460105483906000906001600160a01b03166113a75734611419565b601054604051636eb1769f60e11b81523360048201523060248201526001600160a01b039091169063dd62ed3e90604401602060405180830381865afa1580156113f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061141991906125b0565b9050806114268385612559565b146114445760405163f7760f2560e01b815260040160405180910390fd5b61144f3360026119c0565b60005b8581101561146e576114663361102d611c1f565b600101611452565b858110156114845763dfb035c96000526004601cfd5b5050600160095550505050565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6115088585856108b0565b6001600160a01b0384163b158061159f5750604051630a85bd0160e11b808252906001600160a01b0386169063150b7a02906115509033908a90899089908990600401612738565b6020604051808303816000875af115801561156f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061159391906125e6565b6001600160e01b031916145b6110505760405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b60448201526064016107a6565b6060600f5482111561160357604051635d68437560e11b815260040160405180910390fd5b600b61160e83611d3d565b60405160200161161f92919061278c565b6040516020818303038152906040529050919050565b6008546001600160a01b0316331461167e5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016107a6565b6000600e60019054906101000a90046001600160a01b03166001600160a01b031663e919ecad6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116f791906125b0565b905060008167ffffffffffffffff811115611714576117146122a3565b60405190808252806020026020018201604052801561173d578160200160208202803683370190505b50905060008267ffffffffffffffff81111561175b5761175b6122a3565b604051908082528060200260200182016040528015611784578160200160208202803683370190505b506040516370a0823160e01b815230600482015290915060009081906001600160a01b038716906370a0823190602401602060405180830381865afa1580156117d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117f591906125b0565b90505b8482101561196757600e54604051631419245f60e11b81526004810184905260009161010090046001600160a01b03169063283248be90602401602060405180830381865afa15801561184f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061187391906125c9565b600e5460405163b34c8caf60e01b81526001600160a01b0380841660048301529293506000926101009092049091169063b34c8caf90602401602060405180830381865afa1580156118c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118ed91906125b0565b9050818685815181106119025761190261259a565b6001600160a01b0390921660209283029190910190910152612710611928826064612559565b6119329085612559565b61193c9190612578565b85858151811061194e5761194e61259a565b60200260200101818152505083600101935050506117f8565b60005b858110156119b7576119af878683815181106119885761198861259a565b60200260200101518684815181106119a2576119a261259a565b6020026020010151611d8c565b60010161196a565b50505050505050565b6010546000906001600160a01b03166119d95734611a4d565b601054604051636eb1769f60e11b81526001600160a01b0385811660048301523060248301529091169063dd62ed3e90604401602060405180830381865afa158015611a29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a4d91906125b0565b9050336001600160a01b0384161480611a6f57506010546001600160a01b0316155b15610f8c578160ff16600003611a9557611a906340d097c360e01b82611e12565b611ab1565b8160ff16600103611ab157611ab163044df8e760e41b82611e12565b6010546001600160a01b031615610f8c57601054610f8c906001600160a01b0316843084611ec2565b805480611aef5763ce3a3d376000526004601cfd5b600019019055565b6000818152600260205260409020546001600160a01b031680611b495760405162461bcd60e51b815260206004820152600a6024820152691393d517d3525395115160b21b60448201526064016107a6565b6001600160a01b038116600081815260036020908152604080832080546000190190558583526002825280832080546001600160a01b031990811690915560049092528083208054909216909155518492907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600080600080600085875af1905080610f8c5760405162461bcd60e51b815260206004820152601360248201527f4554485f5452414e534645525f4641494c45440000000000000000000000000060448201526064016107a6565b6000611c29611f4e565b506001600f6000828254611c3d9190612603565b9091555050600f54919050565b611c548282611f65565b6001600160a01b0382163b1580611cfa5750604051630a85bd0160e11b80825233600483015260006024830181905260448301849052608060648401526084830152906001600160a01b0384169063150b7a029060a4016020604051808303816000875af1158015611cca573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cee91906125e6565b6001600160e01b031916145b611d395760405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b60448201526064016107a6565b5050565b604080516080810191829052607f0190826030600a8206018353600a90045b8015611d7a57600183039250600a81066030018353600a9004611d5c565b50819003601f19909101908152919050565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080610b7b5760405162461bcd60e51b815260206004820152600f60248201527f5452414e534645525f4641494c4544000000000000000000000000000000000060448201526064016107a6565b6008546001600160a01b0316803b63ffffffff8116600003611e345750505050565b600854604051633b7279e960e21b81526001600160e01b0319861660048201526000916001600160a01b03169063edc9e7a490602401602060405180830381865afa158015611e87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611eab91906125b0565b90508084146110505763f7760f256000526004601cfd5b60006040516323b872dd60e01b81528460048201528360248201528260448201526020600060648360008a5af13d15601f3d11600160005114161716915050806110505760405162461bcd60e51b815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c454400000000000000000000000060448201526064016107a6565b6000611f5e600a80546001019055565b50600a5490565b6001600160a01b038216611fbb5760405162461bcd60e51b815260206004820152601160248201527f494e56414c49445f524543495049454e5400000000000000000000000000000060448201526064016107a6565b6000818152600260205260409020546001600160a01b0316156120205760405162461bcd60e51b815260206004820152600e60248201527f414c52454144595f4d494e54454400000000000000000000000000000000000060448201526064016107a6565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b0319811681146120a157600080fd5b50565b6000602082840312156120b657600080fd5b81356120c18161208b565b9392505050565b60005b838110156120e35781810151838201526020016120cb565b50506000910152565b602081526000825180602084015261210b8160408501602087016120c8565b601f01601f19169190910160400192915050565b60006020828403121561213157600080fd5b5035919050565b6001600160a01b03811681146120a157600080fd5b803561114081612138565b6000806040838503121561216b57600080fd5b823561217681612138565b946020939093013593505050565b60006020828403121561219657600080fd5b81356120c181612138565b6000806000806000608086880312156121b957600080fd5b85356121c481612138565b945060208601356121d481612138565b935060408601359250606086013567ffffffffffffffff808211156121f857600080fd5b818801915088601f83011261220c57600080fd5b81358181111561221b57600080fd5b89602082850101111561222d57600080fd5b9699959850939650602001949392505050565b60008060006060848603121561225557600080fd5b833561226081612138565b9250602084013561227081612138565b929592945050506040919091013590565b6000806040838503121561229457600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156122e2576122e26122a3565b604052919050565b600080604083850312156122fd57600080fd5b823567ffffffffffffffff8082111561231557600080fd5b818501915085601f83011261232957600080fd5b813560208282111561233d5761233d6122a3565b8160051b925061234e8184016122b9565b828152928401810192818101908985111561236857600080fd5b948201945b848610156123865785358252948201949082019061236d565b9650612395905087820161214d565b9450505050509250929050565b6000806000606084860312156123b757600080fd5b83356123c281612138565b92506020840135915060408401356123d981612138565b809150509250925092565b600060208083850312156123f757600080fd5b823567ffffffffffffffff8082111561240f57600080fd5b818501915085601f83011261242357600080fd5b813581811115612435576124356122a3565b612447601f8201601f191685016122b9565b9150808252868482850101111561245d57600080fd5b8084840185840137600090820190930192909252509392505050565b8035801515811461114057600080fd5b60006020828403121561249b57600080fd5b6120c182612479565b600080604083850312156124b757600080fd5b82356124c281612138565b9150610ac360208401612479565b600080604083850312156124e357600080fd5b82356124ee81612138565b915060208301356124fe81612138565b809150509250929050565b600181811c9082168061251d57607f821691505b60208210810361253d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561257357612573612543565b500290565b60008261259557634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156125c257600080fd5b5051919050565b6000602082840312156125db57600080fd5b81516120c181612138565b6000602082840312156125f857600080fd5b81516120c18161208b565b8082018082111561069057610690612543565b601f821115610f8c57600081815260208120601f850160051c8101602086101561263d5750805b601f850160051c820191505b81811015610e9157828155600101612649565b815167ffffffffffffffff811115612676576126766122a3565b61268a816126848454612509565b84612616565b602080601f8311600181146126bf57600084156126a75750858301515b600019600386901b1c1916600185901b178555610e91565b600085815260208120601f198616915b828110156126ee578886015182559484019460019091019084016126cf565b508582101561270c5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000825161272e8184602087016120c8565b9190910192915050565b60006001600160a01b03808816835280871660208401525084604083015260806060830152826080830152828460a0840137600060a0848401015260a0601f19601f85011683010190509695505050505050565b600080845461279a81612509565b600182811680156127b257600181146127c7576127f6565b60ff19841687528215158302870194506127f6565b8860005260208060002060005b858110156127ed5781548a8201529084019082016127d4565b50505082870194505b50505050835161280a8183602088016120c8565b7f2e6a736f6e000000000000000000000000000000000000000000000000000000910190815260050194935050505056fea164736f6c6343000810000a";

type ERC721BasicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721BasicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Basic__factory extends ContractFactory {
  constructor(...args: ERC721BasicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _baseURI: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    _maxSupply: PromiseOrValue<BigNumberish>,
    _splitter: PromiseOrValue<string>,
    _fraction: PromiseOrValue<BigNumberish>,
    _router: PromiseOrValue<string>,
    _erc20: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721Basic> {
    return super.deploy(
      _name,
      _symbol,
      _baseURI,
      _price,
      _maxSupply,
      _splitter,
      _fraction,
      _router,
      _erc20,
      overrides || {}
    ) as Promise<ERC721Basic>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _baseURI: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    _maxSupply: PromiseOrValue<BigNumberish>,
    _splitter: PromiseOrValue<string>,
    _fraction: PromiseOrValue<BigNumberish>,
    _router: PromiseOrValue<string>,
    _erc20: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _baseURI,
      _price,
      _maxSupply,
      _splitter,
      _fraction,
      _router,
      _erc20,
      overrides || {}
    );
  }
  override attach(address: string): ERC721Basic {
    return super.attach(address) as ERC721Basic;
  }
  override connect(signer: Signer): ERC721Basic__factory {
    return super.connect(signer) as ERC721Basic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721BasicInterface {
    return new utils.Interface(_abi) as ERC721BasicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Basic {
    return new Contract(address, _abi, signerOrProvider) as ERC721Basic;
  }
}
