/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  MADRouter1155,
  MADRouter1155Interface,
} from "../../Router/MADRouter1155";
import type { PromiseOrValue } from "../../common";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract FactoryVerifier",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_paymentTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WrongPrice",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "string",
        name: "_baseURI",
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
        indexed: false,
        internalType: "uint256",
        name: "feeVal2",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeVal3",
        type: "uint256",
      },
    ],
    name: "FeesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "FreeClaimState",
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
        name: "newPaymentToken",
        type: "address",
      },
    ],
    name: "PaymentTokenUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "PublicMintState",
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
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_payee",
        type: "address",
      },
    ],
    name: "TokenFundsWithdrawn",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "WhitelistMintState",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_balances",
        type: "uint256[]",
      },
    ],
    name: "basicMintBatchTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_balances",
        type: "uint256[]",
      },
    ],
    name: "basicMintTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_balances",
        type: "uint256[]",
      },
    ],
    name: "batchBurn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "to",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amount",
        type: "uint256[]",
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
    inputs: [],
    name: "feeBurn",
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
        internalType: "bytes4",
        name: "sigHash",
        type: "bytes4",
      },
    ],
    name: "feeLookup",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeMint",
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
    name: "madFactory",
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
    inputs: [],
    name: "maxFeeBurn",
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
    name: "maxFeeMint",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "string",
        name: "_uri",
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
        internalType: "uint256",
        name: "_feeMint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_feeBurn",
        type: "uint256",
      },
    ],
    name: "setFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "setMintState",
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
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "setURILock",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "_erc20",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x34620000835762001aa0388190036080601f8201601f19168101906001600160401b03821190821017620000885760609282916040526080391262000083576200007360805162000050816200009e565b60a0516200005e816200009e565b60c051916200006d836200009e565b620000b0565b6040516117399081620003678239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116036200008357565b91903315620001845762000170926200016a916000543360007f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768180a36001600160a81b0319163360ff60a01b19161760005560018055620001126000600355565b6200011d6000600455565b6200012f6722b1c8c1227a0000600655565b620001416706f05b59d3b20000600755565b620001536703782dace9d90000600355565b6001600160a01b03811662000172575b50620001f5565b62000252565b565b6200017d90620002d8565b3862000163565b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b15620001c157565b60405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606490fd5b6000546001600160a01b039190620002119083163314620001b9565b8015620002445780600855167f24cd1310c8883cbeaf5b805ab13586ce018b79c022827158ff3e8df14d344936600080a2565b63d92e233d6000526004601cfd5b6000546001600160a01b03906200026d9082163314620001b9565b8116908115620002a1576005557f566f16f5ede69bb6f837d5da3a6cf41c863ba95621d677ff3c931aa687da6466600080a2565b60405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606490fd5b6001600160a01b031680156200032157600280546001600160a01b031916821790557fbd4032c1c91da2791730ea1bbc82c6b6f857da7c0a8318143d19ef74e62cd913600080a2565b60405162461bcd60e51b815260206004820152601560248201527f496e76616c696420746f6b656e206164647265737300000000000000000000006044820152606490fdfe6080604052600436101561001257600080fd5b60003560e01c806306fdde03146101a7578063089f8b1b146101a25780630a98eae51461019d5780630b78f9c01461019857806313af4035146101935780633bbed4a01461018e5780633f4ba83a14610189578063535f64e714610184578063583fef341461017f578063586ba7821461017a5780635bb47808146101755780635c975abb1461017057806366d003ac1461016b578063785e9e86146101665780638456cb5914610161578063884336511461015c5780638b9f1815146101575780638da5cb5b14610152578063b611f9d61461014d578063c99aa4e514610148578063cd22e7d514610143578063e427affe1461013e578063edc9e7a414610139578063f940e385146101345763fde3704e1461012f57600080fd5b61101e565b610db2565b610d3b565b610d1d565b610c4d565b610c2f565b610b9f565b610b76565b610af1565b610a65565b6109ef565b6109c6565b61099d565b610977565b610903565b6108e5565b6108c7565b61083e565b61073e565b61069e565b610600565b610539565b610445565b61024c565b61020b565b60009103126101b757565b600080fd5b60005b8381106101cf5750506000910152565b81810151838201526020016101bf565b604091602082526101ff81518092816020860152602086860191016101bc565b601f01601f1916010190565b346101b75760003660031901126101b757602080526606726f7574657260465260606020f35b6001600160a01b038116036101b757565b801515036101b757565b346101b75760403660031901126101b75760043561026981610231565b60ff6024359161027883610242565b6102856001805414611047565b600260015560009261029d83855460a01c161561114a565b6102a6826113bf565b9093169160018303610346576001600160a01b0316803b156103425760405163879fbedf60e01b815282151560048201529085908290602490829084905af1801561033d57610324575b501515917f0c2bd698c33cf5bea165c8a607bdd7c7d806b8b10284bfcd5b6899674b5a486d8480a461032160018055565b80f35b8061033161033792610394565b806101ac565b386102f0565b61117f565b8480fd5b60405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b6044820152606490fd5b0390fd5b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff81116103a857604052565b61037e565b90601f8019910116810190811067ffffffffffffffff8211176103a857604052565b67ffffffffffffffff81116103a85760051b60200190565b81601f820112156101b7578035916103fe836103cf565b9261040c60405194856103ad565b808452602092838086019260051b8201019283116101b7578301905b828210610436575050505090565b81358152908301908301610428565b60803660031901126101b75760043561045d81610231565b6024359061046a82610231565b60643567ffffffffffffffff81116101b75761048a9036906004016103e7565b906104986001805414611047565b60026001556000926104b160ff855460a01c161561114a565b600160ff6104be846113bf565b905016036103465783916104d06114d6565b6001600160a01b0316803b156105355760405163f745586f60e01b81529384928391829161050791339160443590600486016111df565b039134905af1801561033d57610522575b5061032160018055565b8061033161052f92610394565b38610518565b8280fd5b346101b75760403660031901126101b75760043560243561056560018060a01b0360005416331461164c565b600654821115806105f4575b156105b0577f5c6323bf1c2d7aaea2c091a4751c1c87af7f2864650c336507a77d0557af37a191816040926004558160035582519182526020820152a1005b606460405162461bcd60e51b815260206004820152602060248201527f496e76616c6964206665652073657474696e67732c206265796f6e64206d61786044820152fd5b50600754811115610571565b346101b75760203660031901126101b75760043561061d81610231565b60018060a01b039060009161063681845416331461164c565b8116908115610669578255337f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768380a380f35b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b346101b75760203660031901126101b7576004356106bb81610231565b6000546001600160a01b03906106d4908216331461164c565b8116908115610707576005557f566f16f5ede69bb6f837d5da3a6cf41c863ba95621d677ff3c931aa687da6466600080a2005b60405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606490fd5b346101b7576000806003193601126107da578054610766336001600160a01b0383161461164c565b60ff8160a01c16156107aa5760ff60a01b191681556040513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa90602090a180f35b60405162461bcd60e51b8152602060048201526008602482015267155394105554d15160c21b6044820152606490fd5b80fd5b9060806003198301126101b7576004356107f681610231565b9160243561080381610231565b9167ffffffffffffffff6044358181116101b75783610824916004016103e7565b926064359182116101b75761083b916004016103e7565b90565b610847366107dd565b9290916108576001805414611047565b600260015560009361087060ff865460a01c161561114a565b600160ff61087d856113bf565b9050160361034657849261088f6114d6565b6001600160a01b031690813b156108c357610507946040519586948593849363d580725d60e01b8552339260048601611213565b8380fd5b346101b75760003660031901126101b7576020600454604051908152f35b346101b75760003660031901126101b7576020600354604051908152f35b346101b75760203660031901126101b75760043561092081610231565b60018060a01b0360009161093882845416331461164c565b801561096a5780600855167f24cd1310c8883cbeaf5b805ab13586ce018b79c022827158ff3e8df14d3449368280a280f35b63d92e233d83526004601cfd5b346101b75760003660031901126101b757602060ff60005460a01c166040519015158152f35b346101b75760003660031901126101b7576005546040516001600160a01b039091168152602090f35b346101b75760003660031901126101b7576002546040516001600160a01b039091168152602090f35b346101b7576000806003193601126107da578054610a17336001600160a01b0383161461164c565b610a2760ff8260a01c161561114a565b60ff60a01b1916600160a01b1781556040513381527f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25890602090a180f35b346101b75760403660031901126101b757600435610a8281610231565b6024359067ffffffffffffffff908183116101b757366023840112156101b75782600401359182116103a85760405191610ac6601f8201601f1916602001846103ad565b80835236602482860101116101b7576020816000926024610aef97018387013784010152611080565b005b610afa366107dd565b929091610b0a6001805414611047565b6002600155600093610b2360ff865460a01c161561114a565b600160ff610b30856113bf565b9050610b3a6115b9565b16036103465784926001600160a01b031690813b156108c357610507946040519586948593849363d78147cb60e01b8552339260048601611213565b346101b75760003660031901126101b7576000546040516001600160a01b039091168152602090f35b346101b75760203660031901126101b757600435610bbc81610231565b600090610bd060ff835460a01c161561114a565b600160ff610bdd836113bf565b905016146000146103465781906001600160a01b0316803b15610c2c5781906004604051809481936366c879a960e01b83525af1801561033d57610c1f575080f35b8061033161032192610394565b50fd5b346101b75760003660031901126101b7576020600654604051908152f35b60803660031901126101b757600435610c6581610231565b67ffffffffffffffff906024358281116101b757610c879036906004016103e7565b604435908382116101b757366023830112156101b7578160040135610cab816103cf565b92610cb960405194856103ad565b81845260209160248386019160051b830101913683116101b757602401905b828210610d0457505050506064359384116101b757610cfe610aef9436906004016103e7565b9261124c565b8380918335610d1281610231565b815201910190610cd8565b346101b75760003660031901126101b7576020600754604051908152f35b346101b75760203660031901126101b75760048035906001600160e01b0319821682036101b75763044df8e760e41b821491600091906340d097c360e01b14610da457610d9892610d9c57505b6040519081529081906020820190565b0390f35b905054610d88565b505050610d98600354610d88565b346101b7576040806003193601126101b75760ff90600490813591610dd683610231565b602435610de281610231565b610def6001805414611047565b6002600155610dfd846113bf565b9095169360018503610fe5576001600160a01b03908282168015159081610f71575b5015610ec5576005549116906001600160a01b031691813b156101b7579351632515bef360e21b81526001600160a01b0394851693810193845293909116602083015260009183919082908490829060400103925af1801561033d57610eb2575b505b33917ff15624beb70c8e7a7515ad5f81ee4c24dba144c4ef1b258f8075e1a519b1a5a1600080a4610aef60018055565b80610331610ebf92610394565b38610e80565b929392909150803115610f3b576005546001600160a01b03169116803b156101b75791516351cff8d960e01b81526001600160a01b0390911692810192835291600091839182908490829060200103925af1801561033d57610f28575b50610e82565b80610331610f3592610394565b38610f22565b825162461bcd60e51b81526020818601818152600891810191909152674e4f5f46554e445360c01b604082015281906060010390fd5b86516370a0823160e01b81526001600160a01b038416878201908152909250602091839182908190850103915afa90811561033d57600091610fb7575b50151538610e1f565b610fd8915060203d8111610fde575b610fd081836103ad565b810190611372565b38610fae565b503d610fc6565b835162461bcd60e51b81528061037a81860160609060208152600c60208201526b494e56414c49445f5459504560a01b60408201520190565b346101b75760003660031901126101b7576008546040516001600160a01b039091168152602090f35b1561104e57565b60405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606490fd5b9060ff906110916001805414611047565b60026001556000926110a983855460a01c161561114a565b60016110b4826113bf565b90941603610346576001600160a01b031690813b156108c3578360405180936355f804b360e01b82528183816110ed87600483016101df565b03925af190811561033d577f43644489da8fbb6bf513e3cbb8aefbc47ed49a5d8159243b448b2444e1d38b9e9261112992611137575b5061118b565b9280a361113560018055565b565b8061033161114492610394565b38611123565b1561115157565b60405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b6044820152606490fd5b6040513d6000823e3d90fd5b6111a3906020604051928284809451938492016101bc565b810103902090565b90815180825260208080930193019160005b8281106111cb575050505090565b8351855293810193928101926001016111bd565b9261120c9060609396959660018060a01b03809416865260208601526080604086015260808501906111ab565b9416910152565b9261120c9061123e60609497969760018060a01b0380951687526080602088015260808701906111ab565b9085820360408701526111ab565b91909161125c6001805414611047565b600260015561127360ff60005460a01c161561114a565b600160ff611280836113bf565b905061128a6115b9565b1603610346576001600160a01b0316803b156101b7576112c69360009360405195869485938493630d6fa7b160e41b85523392600486016112f4565b039134905af1801561033d576112e1575b5061113560018055565b806103316112ee92610394565b386112d7565b9291949394608084019160808552805180935260a085019260208092019060005b81811061135557505050826060949261133792876113459603908801526111ab565b9084820360408601526111ab565b6001600160a01b03909416910152565b82516001600160a01b031686529483019491830191600101611315565b908160209103126101b7575190565b91908260409103126101b7576020825161139a81610231565b92015161083b81610242565b908160209103126101b7575160ff811681036101b75790565b6008546040805163617d1d3b60e01b81526001600160a01b039384166004820152939260209216908285602481855afa94851561033d576000956114b7575b50805163b64bd5eb60e01b8152600481018690529185908284602481845afa92831561033d5761144e94869461148b575b5051808095819463d93cb8fd60e01b8352600483019190602083019252565b03915afa91821561033d5760009261146557505090565b61083b9250803d10611484575b61147c81836103ad565b8101906113a6565b503d611472565b6114aa90823d84116114b0575b6114a281836103ad565b810190611381565b5061142f565b503d611498565b6114cf919550833d8511610fde57610fd081836103ad565b93386113fe565b6002546001600160a01b031680806114ec575050565b604051636eb1769f60e11b8152336004820152306024820152906020908190839060449082905afa91821561033d5760009261159a575b50604051633b7279e960e21b81526340d097c360e01b6004820152818180602481015b0381305afa91821561033d5760009261157d575b5050810361156f576111359130903390611687565b63f7760f256000526004601cfd5b6115939250803d10610fde57610fd081836103ad565b388061155a565b816115b29293503d8411610fde57610fd081836103ad565b9038611523565b6002546001600160a01b031680806115cf575050565b604051636eb1769f60e11b8152336004820152306024820152906020908190839060449082905afa91821561033d5760009261162d575b50604051633b7279e960e21b815263044df8e760e41b600482015281818060248101611546565b816116459293503d8411610fde57610fd081836103ad565b9038611606565b1561165357565b60405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606490fd5b9060006064926020958295604051946323b872dd60e01b86526004860152602485015260448401525af13d15601f3d11600160005114161716156116c757565b60405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606490fdfea264697066735822122043c03d240989f1cf08c177745d656fa6ab8400c1ace2a2073d93b525238d5dfd64736f6c63430008130033";

type MADRouter1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MADRouter1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MADRouter1155__factory extends ContractFactory {
  constructor(...args: MADRouter1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _factory: PromiseOrValue<string>,
    _paymentTokenAddress: PromiseOrValue<string>,
    _recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MADRouter1155> {
    return super.deploy(
      _factory,
      _paymentTokenAddress,
      _recipient,
      overrides || {}
    ) as Promise<MADRouter1155>;
  }
  override getDeployTransaction(
    _factory: PromiseOrValue<string>,
    _paymentTokenAddress: PromiseOrValue<string>,
    _recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _factory,
      _paymentTokenAddress,
      _recipient,
      overrides || {}
    );
  }
  override attach(address: string): MADRouter1155 {
    return super.attach(address) as MADRouter1155;
  }
  override connect(signer: Signer): MADRouter1155__factory {
    return super.connect(signer) as MADRouter1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MADRouter1155Interface {
    return new utils.Interface(_abi) as MADRouter1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MADRouter1155 {
    return new Contract(address, _abi, signerOrProvider) as MADRouter1155;
  }
}
