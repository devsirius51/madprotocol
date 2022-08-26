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
import type { PromiseOrValue } from "../common";
import type {
  MADMarketplace721,
  MADMarketplace721Interface,
} from "../MADMarketplace721";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minOrderDuration",
        type: "uint256",
      },
      {
        internalType: "contract FactoryVerifier",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessDenied",
    type: "error",
  },
  {
    inputs: [],
    name: "BidExists",
    type: "error",
  },
  {
    inputs: [],
    name: "CanceledOrder",
    type: "error",
  },
  {
    inputs: [],
    name: "EAOnly",
    type: "error",
  },
  {
    inputs: [],
    name: "ExceedsMaxEP",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidBidder",
    type: "error",
  },
  {
    inputs: [],
    name: "NeedMoreTime",
    type: "error",
  },
  {
    inputs: [],
    name: "NotBuyable",
    type: "error",
  },
  {
    inputs: [],
    name: "SoldToken",
    type: "error",
  },
  {
    inputs: [],
    name: "Timeout",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFailed",
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
        internalType: "uint256",
        name: "newMinDuration",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "newIncrement",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "newMinBidValue",
        type: "uint256",
      },
    ],
    name: "AuctionSettingsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC721",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bidPrice",
        type: "uint256",
      },
    ],
    name: "Bid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC721",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    name: "CancelOrder",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC721",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract FactoryVerifier",
        name: "newFactory",
        type: "address",
      },
    ],
    name: "FactoryUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC721",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    name: "MakeOrder",
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
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
    name: "RecipientUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "MADFactory721",
    outputs: [
      {
        internalType: "contract FactoryVerifier",
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
        internalType: "bytes32",
        name: "_order",
        type: "bytes32",
      },
    ],
    name: "bid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_order",
        type: "bytes32",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_order",
        type: "bytes32",
      },
    ],
    name: "cancelOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_order",
        type: "bytes32",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "contract IERC721",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_seller",
        type: "address",
      },
    ],
    name: "delOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256",
      },
    ],
    name: "dutchAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256",
      },
    ],
    name: "englishAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feePercent",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256",
      },
    ],
    name: "fixedPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_order",
        type: "bytes32",
      },
    ],
    name: "getCurrentPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minAuctionIncrement",
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
    name: "minBidValue",
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
    name: "minOrderDuration",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
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
    inputs: [
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
    ],
    name: "orderIdBySeller",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "orderIdByToken",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "orderInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastBidPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "lastBidder",
        type: "address",
      },
      {
        internalType: "contract IERC721",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "orderType",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "isSold",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "recipient",
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
        internalType: "address",
        name: "_seller",
        type: "address",
      },
    ],
    name: "sellerOrderLength",
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
        internalType: "contract FactoryVerifier",
        name: "_factory",
        type: "address",
      },
    ],
    name: "setFactory",
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
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "setRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "tokenOrderLength",
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
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minAuctionIncrement",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minOrderDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minBidValue",
        type: "uint256",
      },
    ],
    name: "updateSettings",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620026db380380620026db83398101604081905262000034916200024e565b600080546001600160a01b031916339081178255604051909182917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76908290a3506000805460ff60a01b191690556200008d81620000b1565b62000098836200013c565b620000a861012c836014620001c3565b505050620002ae565b6000546001600160a01b03163314620001005760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064015b60405180910390fd5b60088190556040516001600160a01b038216907f24cd1310c8883cbeaf5b805ab13586ce018b79c022827158ff3e8df14d34493690600090a250565b6000546001600160a01b03163314620001875760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401620000f7565b60078190556040516001600160a01b038216907f566f16f5ede69bb6f837d5da3a6cf41c863ba95621d677ff3c931aa687da646690600090a250565b6000546001600160a01b031633146200020e5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401620000f7565b8160045582600555806006558083837f288721d069862d2f3f05bcfe0be48c2497ade4b48538a5f12400218944ac0e4f60405160405180910390a4505050565b60008060006060848603121562000263578283fd5b8351620002708162000295565b6020850151604086015191945092506200028a8162000295565b809150509250925092565b6001600160a01b0381168114620002ab57600080fd5b50565b61241d80620002be6000396000f3fe6080604052600436106101dc5760003560e01c80635bb47808116101025780638aae982a11610095578063bd66528a11610064578063bd66528a14610686578063d44619e3146106a6578063f4dae74c146106c6578063ff4217f1146106e657600080fd5b80638aae982a1461060a5780638da5cb5b14610640578063957bb1e0146106605780639c9a10611461067357600080fd5b80637489ec23116100d15780637489ec231461058d5780637fd6f15c146105ad5780638035eb5c146105d55780638456cb59146105f557600080fd5b80635bb47808146104f55780635c975abb1461051557806366d003ac1461053f578063708d4d351461057757600080fd5b8063161e444e1161017a578063275e086c11610149578063275e086c1461048b5780633bbed4a0146104ab5780633ccfd60b146104cb5780633f4ba83a146104e057600080fd5b8063161e444e1461031f578063174efd121461033f57806319daa10814610355578063238e203f1461039857600080fd5b806308745c98116101b657806308745c9814610255578063093dff7d1461028357806313af4035146102a3578063150b7a02146102c357600080fd5b80630465c563146101e857806306fdde031461020a578063076971a71461023557600080fd5b366101e357005b600080fd5b3480156101f457600080fd5b506102086102033660046122fb565b6106fc565b005b34801561021657600080fd5b5061021f61078a565b60405161022c9190612326565b60405180910390f35b34801561024157600080fd5b50610208610250366004612201565b6107a1565b34801561026157600080fd5b50610275610270366004612171565b610977565b60405190815260200161022c565b34801561028f57600080fd5b5061020861029e3660046122b8565b6109a8565b3480156102af57600080fd5b506102086102be366004612075565b610a0b565b3480156102cf57600080fd5b506102ee6102de366004612098565b630a85bd0160e11b949350505050565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200161022c565b34801561032b57600080fd5b5061027561033a3660046121e9565b610a90565b34801561034b57600080fd5b5061027560065481565b34801561036157600080fd5b50610275610370366004612171565b6001600160a01b03919091166000908152600160209081526040808320938352929052205490565b3480156103a457600080fd5b506104246103b33660046121e9565b60036020819052600091825260409091208054600182015460028301549383015460048401546005850154600686015460078701546008909701549597949694959394929391926001600160a01b03918216929082169181169060ff600160a01b8204811691600160a81b9004168b565b604080519b8c5260208c019a909a52988a01979097526060890195909552608088019390935260a08701919091526001600160a01b0390811660c087015290811660e08601521661010084015260ff1661012083015215156101408201526101600161022c565b34801561049757600080fd5b506102756104a636600461224a565b610b5d565b3480156104b757600080fd5b506102086104c6366004612075565b610b9b565b3480156104d757600080fd5b50610208610c20565b3480156104ec57600080fd5b50610208610cb9565b34801561050157600080fd5b50610208610510366004612075565b610d0a565b34801561052157600080fd5b50600054600160a01b900460ff16604051901515815260200161022c565b34801561054b57600080fd5b5060075461055f906001600160a01b031681565b6040516001600160a01b03909116815260200161022c565b34801561058357600080fd5b5061027560055481565b34801561059957600080fd5b506102086105a83660046121e9565b610d8f565b3480156105b957600080fd5b506105c260c881565b60405161ffff909116815260200161022c565b3480156105e157600080fd5b506102086105f036600461227e565b610e8f565b34801561060157600080fd5b50610208610ee8565b34801561061657600080fd5b50610275610625366004612075565b6001600160a01b031660009081526002602052604090205490565b34801561064c57600080fd5b5060005461055f906001600160a01b031681565b61020861066e3660046121e9565b610f39565b6102086106813660046121e9565b611066565b34801561069257600080fd5b506102086106a13660046121e9565b61126c565b3480156106b257600080fd5b5060085461055f906001600160a01b031681565b3480156106d257600080fd5b506102086106e136600461227e565b6114a1565b3480156106f257600080fd5b5061027560045481565b6000546001600160a01b0316331461074a5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064015b60405180910390fd5b8160045582600555806006558083837f288721d069862d2f3f05bcfe0be48c2497ade4b48538a5f12400218944ac0e4f60405160405180910390a4505050565b60606020805266066d61726b657460465260606020f35b6000546001600160a01b031633146107ea5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401610741565b600054600160a01b900460ff1661082e5760405162461bcd60e51b8152602060048201526008602482015267155394105554d15160c21b6044820152606401610741565b600084815260036020818152604080842084815560018082018690556002820186905593810185905560048101859055600581018590556006810180547fffffffffffffffffffffffff0000000000000000000000000000000000000000908116909155600782018054909116905560080180547fffffffffffffffffffff000000000000000000000000000000000000000000001690556001600160a01b0387168452918152818320858452905281206108e89161203b565b6001600160a01b03811660009081526002602052604081206109099161203b565b6040516323b872dd60e01b81523060048201526001600160a01b038281166024830152604482018490528416906323b872dd90606401600060405180830381600087803b15801561095957600080fd5b505af115801561096d573d6000803e3d6000fd5b5050505050505050565b6002602052816000526040600020818154811061099357600080fd5b90600052602060002001600091509150505481565b600054600160a01b900460ff16156109eb5760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606401610741565b6109f583836114f4565b610a046001868686868661150e565b5050505050565b6000546001600160a01b03163314610a545760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401610741565b60008181556040516001600160a01b0383169133917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d769190a350565b6000818152600360205260408120600881015460a01c60808190528015610ac65760018114610adb5760028114610b1757610b56565b60018201546001600160e01b03169250610b56565b60018201546003830154600284015460048501546001600160e01b03928316438190039184160391831693909216928303040290039250610b56565b60058201546001600160e01b0316801560018114610b3a578015610b4f57610b53565b60018401546001600160e01b03169450610b53565b8194505b50505b5050919050565b60016020528260005260406000206020528160005260406000208181548110610b8557600080fd5b9060005260206000200160009250925050505481565b6000546001600160a01b03163314610be45760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401610741565b60078190556040516001600160a01b038216907f566f16f5ede69bb6f837d5da3a6cf41c863ba95621d677ff3c931aa687da646690600090a250565b6000546001600160a01b03163314610c695760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401610741565b600054600160a01b900460ff16610cad5760405162461bcd60e51b8152602060048201526008602482015267155394105554d15160c21b6044820152606401610741565b610cb7334761186b565b565b6000546001600160a01b03163314610d025760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401610741565b610cb76118c6565b6000546001600160a01b03163314610d535760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401610741565b60088190556040516001600160a01b038216907f24cd1310c8883cbeaf5b805ab13586ce018b79c022827158ff3e8df14d34493690600090a250565b600081815260036020526040902060088101546005820154610dc7916001600160a01b03811691600160a81b90910460ff169061194d565b600781015481546000600480850191909155604051632142170760e11b81523091810191909152336024820152604481018290526001600160a01b039092169182906342842e0e90606401600060405180830381600087803b158015610e2c57600080fd5b505af1158015610e40573d6000803e3d6000fd5b5050604080518481523360208201528793506001600160a01b03861692507f856ac238bc6f4bb0c966003f34f148bf0ef3b60f266e451474de23ff78196c8b910160405180910390a350505050565b600054600160a01b900460ff1615610ed25760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606401610741565b610ee2600085858560008661150e565b50505050565b6000546001600160a01b03163314610f315760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401610741565b610cb761198a565b600054600160a01b900460ff1615610f7c5760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606401610741565b60008181526003602052604090206005810154600882015460048301546001840154610fc19260ff600160a01b82041692916001600160a01b03909116908590611a10565b60001960201c6004830154166005548103431115610fe457600554810160048401555b50336006830155346005830155801561100f57600682015461100f906001600160a01b03168261186b565b6007820154825460408051918252336020830152349082015284916001600160a01b0316907f7f99059564a74b5d2e3fbf994dec403ab0af5688c9a4e86ca2a933688eaf223b9060600160405180910390a3505050565b600054600160a01b900460ff16156110a95760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606401610741565b6000818152600360205260409020600481015460088201546110df919060ff600160a01b8204811691600160a81b900416611abc565b60006110ea83610a90565b905080341461110c5760405163f7760f2560e01b815260040160405180910390fd5b60088281018054600160a81b60ff60a81b19821617909155905460078401546040516376de0f3d60e01b81526001600160a01b039182166004820152928116602484015216906376de0f3d9060440160206040518083038186803b15801561117357600080fd5b505afa158015611187573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ab91906121c9565b1515600114156111c6576111c182828533611b14565b505050565b60078201546040516301ffc9a760e01b815263152a902d60e11b60048201526001600160a01b03909116906301ffc9a79060240160206040518083038186803b15801561121257600080fd5b505afa158015611226573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061124a91906121c9565b151560011415611260576111c182828533611cae565b6111c182828533611e81565b600054600160a01b900460ff16156112af5760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606401610741565b6000818152600360205260409020600681015460088201546112dd916001600160a01b039081169116611fa9565b600881015460048201546113069160ff600160a81b8204811692600160a01b9092041690611fc2565b60088181018054600160a81b60ff60a81b19821617909155905460078301546040516376de0f3d60e01b81526001600160a01b039182166004820152928116602484015216906376de0f3d9060440160206040518083038186803b15801561136d57600080fd5b505afa158015611381573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a591906121c9565b1515600114156113d357600581015460068201546113cf91839185906001600160a01b0316611b14565b5050565b60078101546040516301ffc9a760e01b815263152a902d60e11b60048201526001600160a01b03909116906301ffc9a79060240160206040518083038186803b15801561141f57600080fd5b505afa158015611433573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061145791906121c9565b15156001141561148157600581015460068201546113cf91839185906001600160a01b0316611cae565b600581015460068201546113cf91839185906001600160a01b0316611e81565b600054600160a01b900460ff16156114e45760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606401610741565b610ee2600285858560008661150e565b80821081831417156113cf576370f8f33a6000526004601cfd5b6115188184612006565b60408051436020808301919091526bffffffffffffffffffffffff19606089811b8216848601526054840189905233901b16607483015282518083036068018152608890920190925280519101206040518061016001604052808681526020018581526020018481526020014381526020018381526020016000815260200160006001600160a01b03168152602001876001600160a01b03168152602001336001600160a01b031681526020018860ff1681526020016000151581525060036000838152602001908152602001600020600082015181600001556020820151816001015560408201518160020155606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060e08201518160070160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506101008201518160080160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506101208201518160080160146101000a81548160ff021916908360ff1602179055506101408201518160080160156101000a81548160ff02191690831515021790555090505060016000876001600160a01b03166001600160a01b03168152602001908152602001600020600086815260200190815260200160002081908060018154018082558091505060019003906000526020600020016000909190919091505560026000336001600160a01b03166001600160a01b03168152602001908152602001600020819080600181540180825580915050600190039060005260206000200160009091909190915055856001600160a01b03166342842e0e3330886040518463ffffffff1660e01b81526004016117ea939291906001600160a01b039384168152919092166020820152604081019190915260600190565b600060405180830381600087803b15801561180457600080fd5b505af1158015611818573d6000803e3d6000fd5b5050604080518881523360208201528493506001600160a01b038a1692507f165b17602125a20b222f9736f06d776e39507d7dc60ddef32ccc23ea2f1b50e591015b60405180910390a350505050505050565b600080600080600085875af19050806111c15760405162461bcd60e51b815260206004820152601360248201527f4554485f5452414e534645525f4641494c4544000000000000000000000000006044820152606401610741565b600054600160a01b900460ff1661190a5760405162461bcd60e51b8152602060048201526008602482015267155394105554d15160c21b6044820152606401610741565b6000805460ff60a01b191690556040513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa906020015b60405180910390a1565b33831461196257634ca888676000526004601cfd5b81156119765763f88b07a36000526004601cfd5b80156111c157633e0827ab6000526004601cfd5b600054600160a01b900460ff16156119cd5760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606401610741565b6000805460ff60a01b1916600160a01b1790556040513381527f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25890602001611943565b60028514611a265763ffc96cb06000526004601cfd5b83611a395763df9428da6000526004601cfd5b83431115611a4f57632af0c7f86000526004601cfd5b82331415611a6557630863b1036000526004601cfd5b81158015611a7a5760018114611a9b57611ab4565b60065483048301341015611a965763f7760f256000526004601cfd5b611ab4565b81341034151715611ab45763f7760f256000526004601cfd5b505050505050565b82611acf5763df9428da6000526004601cfd5b4383108343141715611ae957632af0c7f86000526004601cfd5b6002821415611b00576307ae57446000526004601cfd5b80156111c15763f88b07a36000526004601cfd5b6007840154845460405163152a902d60e11b815260009283926001600160a01b0390911691632a55205a91611b56918990600401918252602082015260400190565b604080518083038186803b158015611b6d57600080fd5b505afa158015611b81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ba5919061219c565b91509150611bb3828261186b565b6008860154611bd4906001600160a01b0316611bcf83886123b8565b61186b565b60078601548654604051632142170760e11b81523060048201526001600160a01b03868116602483015260448201929092529116906342842e0e90606401600060405180830381600087803b158015611c2c57600080fd5b505af1158015611c40573d6000803e3d6000fd5b50505050600786015486546008880154604080519283526001600160a01b0391821660208401528682169083015260608201889052869216907f37a6d1163573be2522695f96cbee3037bf297187c0378e8903ac1ae0192f699f9060800160405180910390a3505050505050565b6007840154845460405163152a902d60e11b815260009283926001600160a01b0390911691632a55205a91611cf0918990600401918252602082015260400190565b604080518083038186803b158015611d0757600080fd5b505afa158015611d1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d3f919061219c565b91509150611d4d828261186b565b600061271060c8611d5e84896123b8565b611d689190612399565b611d729190612379565b600754909150611d8b906001600160a01b03168261186b565b6008870154611db2906001600160a01b031682611da8858a6123b8565b611bcf91906123b8565b60078701548754604051632142170760e11b81523060048201526001600160a01b03878116602483015260448201929092529116906342842e0e90606401600060405180830381600087803b158015611e0a57600080fd5b505af1158015611e1e573d6000803e3d6000fd5b50505050600787015487546008890154604080519283526001600160a01b0391821660208401528782169083015260608201899052879216907f37a6d1163573be2522695f96cbee3037bf297187c0378e8903ac1ae0192f699f9060800161185a565b6000612710611e9160c886612399565b611e9b9190612379565b600754909150611eb4906001600160a01b03168261186b565b6008850154611ed0906001600160a01b0316611bcf83876123b8565b60078501548554604051632142170760e11b81523060048201526001600160a01b03858116602483015260448201929092529116906342842e0e90606401600060405180830381600087803b158015611f2857600080fd5b505af1158015611f3c573d6000803e3d6000fd5b50505050600785015485546008870154604080519283526001600160a01b0391821660208401528582169083015260608201879052859216907f37a6d1163573be2522695f96cbee3037bf297187c0378e8903ac1ae0192f699f9060800160405180910390a35050505050565b813314813314176113cf57634ca888676000526004601cfd5b8215611fd65763f88b07a36000526004601cfd5b60028214611fec5763ffc96cb06000526004601cfd5b80431081431417156111c15763921dbfec6000526004601cfd5b600454438303104383108343141717156120285763921dbfec6000526004601cfd5b806113cf5763f7760f256000526004601cfd5b5080546000825590600052602060002090810190612059919061205c565b50565b5b80821115612071576000815560010161205d565b5090565b600060208284031215612086578081fd5b8135612091816123fb565b9392505050565b600080600080608085870312156120ad578283fd5b84356120b8816123fb565b935060208501356120c8816123fb565b925060408501359150606085013567ffffffffffffffff808211156120eb578283fd5b818701915087601f8301126120fe578283fd5b813581811115612110576121106123e5565b604051601f8201601f19908116603f01168101908382118183101715612138576121386123e5565b816040528281528a6020848701011115612150578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215612183578182fd5b823561218e816123fb565b946020939093013593505050565b600080604083850312156121ae578182fd5b82516121b9816123fb565b6020939093015192949293505050565b6000602082840312156121da578081fd5b81518015158114612091578182fd5b6000602082840312156121fa578081fd5b5035919050565b60008060008060808587031215612216578384fd5b843593506020850135612228816123fb565b925060408501359150606085013561223f816123fb565b939692955090935050565b60008060006060848603121561225e578283fd5b8335612269816123fb565b95602085013595506040909401359392505050565b60008060008060808587031215612293578384fd5b843561229e816123fb565b966020860135965060408601359560600135945092505050565b600080600080600060a086880312156122cf578081fd5b85356122da816123fb565b97602087013597506040870135966060810135965060800135945092505050565b60008060006060848603121561230f578081fd5b505081359360208301359350604090920135919050565b6000602080835283518082850152825b8181101561235257858101830151858201604001528201612336565b818111156123635783604083870101525b50601f01601f1916929092016040019392505050565b60008261239457634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156123b3576123b36123cf565b500290565b6000828210156123ca576123ca6123cf565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461205957600080fdfea164736f6c6343000804000a";

type MADMarketplace721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MADMarketplace721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MADMarketplace721__factory extends ContractFactory {
  constructor(...args: MADMarketplace721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _recipient: PromiseOrValue<string>,
    _minOrderDuration: PromiseOrValue<BigNumberish>,
    _factory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MADMarketplace721> {
    return super.deploy(
      _recipient,
      _minOrderDuration,
      _factory,
      overrides || {}
    ) as Promise<MADMarketplace721>;
  }
  override getDeployTransaction(
    _recipient: PromiseOrValue<string>,
    _minOrderDuration: PromiseOrValue<BigNumberish>,
    _factory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _recipient,
      _minOrderDuration,
      _factory,
      overrides || {}
    );
  }
  override attach(address: string): MADMarketplace721 {
    return super.attach(address) as MADMarketplace721;
  }
  override connect(signer: Signer): MADMarketplace721__factory {
    return super.connect(signer) as MADMarketplace721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MADMarketplace721Interface {
    return new utils.Interface(_abi) as MADMarketplace721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MADMarketplace721 {
    return new Contract(address, _abi, signerOrProvider) as MADMarketplace721;
  }
}
