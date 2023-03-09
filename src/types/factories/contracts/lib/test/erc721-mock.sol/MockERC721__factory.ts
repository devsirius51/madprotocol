/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../../../common";
import type {
  MockERC721,
  MockERC721Interface,
} from "../../../../../contracts/lib/test/erc721-mock.sol/MockERC721";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

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
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    stateMutability: "view",
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
        name: "",
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
    stateMutability: "pure",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200109438038062001094833981016040819052620000349162000123565b818160006200004483826200021c565b5060016200005382826200021c565b5050505050620002e8565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200008657600080fd5b81516001600160401b0380821115620000a357620000a36200005e565b604051601f8301601f19908116603f01168101908282118183101715620000ce57620000ce6200005e565b81604052838152602092508683858801011115620000eb57600080fd5b600091505b838210156200010f5785820183015181830184015290820190620000f0565b600093810190920192909252949350505050565b600080604083850312156200013757600080fd5b82516001600160401b03808211156200014f57600080fd5b6200015d8683870162000074565b935060208501519150808211156200017457600080fd5b50620001838582860162000074565b9150509250929050565b600181811c90821680620001a257607f821691505b602082108103620001c357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200021757600081815260208120601f850160051c81016020861015620001f25750805b601f850160051c820191505b818110156200021357828155600101620001fe565b5050505b505050565b81516001600160401b038111156200023857620002386200005e565b62000250816200024984546200018d565b84620001c9565b602080601f8311600181146200028857600084156200026f5750858301515b600019600386901b1c1916600185901b17855562000213565b600085815260208120601f198616915b82811015620002b95788860151825594840194600190910190840162000298565b5085821015620002d85787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610d9c80620002f86000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101f7578063b88d4fde1461020a578063c87b56dd1461021d578063e985e9c51461023157600080fd5b80636352211e146101bb57806370a08231146101ce57806395d89b41146101ef57600080fd5b8063095ea7b3116100c8578063095ea7b31461016d57806323b872dd1461018257806340c10f191461019557806342842e0e146101a857600080fd5b806301ffc9a7146100ef57806306fdde0314610117578063081812fc1461012c575b600080fd5b6101026100fd366004610ab7565b61025f565b60405190151581526020015b60405180910390f35b61011f6102b1565b60405161010e9190610adb565b61015561013a366004610b29565b6004602052600090815260409020546001600160a01b031681565b6040516001600160a01b03909116815260200161010e565b61018061017b366004610b59565b61033f565b005b610180610190366004610b83565b610433565b6101806101a3366004610b59565b610626565b6101806101b6366004610b83565b610634565b6101556101c9366004610b29565b61072c565b6101e16101dc366004610bbf565b610796565b60405190815260200161010e565b61011f61080a565b610180610205366004610bda565b610817565b610180610218366004610c16565b610883565b61011f61022b366004610b29565b50606090565b61010261023f366004610cb1565b600560209081526000928352604080842090915290825290205460ff1681565b60006301ffc9a760e01b6001600160e01b03198316148061029057506380ac58cd60e01b6001600160e01b03198316145b806102ab5750635b5e139f60e01b6001600160e01b03198316145b92915050565b600080546102be90610ce4565b80601f01602080910402602001604051908101604052809291908181526020018280546102ea90610ce4565b80156103375780601f1061030c57610100808354040283529160200191610337565b820191906000526020600020905b81548152906001019060200180831161031a57829003601f168201915b505050505081565b6000818152600260205260409020546001600160a01b03163381148061038857506001600160a01b038116600090815260056020908152604080832033845290915290205460ff165b6103ca5760405162461bcd60e51b815260206004820152600e60248201526d1393d517d055551213d49256915160921b60448201526064015b60405180910390fd5b600082815260046020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6000818152600260205260409020546001600160a01b0384811691161461049c5760405162461bcd60e51b815260206004820152600a60248201527f57524f4e475f46524f4d0000000000000000000000000000000000000000000060448201526064016103c1565b6001600160a01b0382166104f25760405162461bcd60e51b815260206004820152601160248201527f494e56414c49445f524543495049454e5400000000000000000000000000000060448201526064016103c1565b336001600160a01b038416148061052c57506001600160a01b038316600090815260056020908152604080832033845290915290205460ff165b8061054d57506000818152600460205260409020546001600160a01b031633145b61058a5760405162461bcd60e51b815260206004820152600e60248201526d1393d517d055551213d49256915160921b60448201526064016103c1565b6001600160a01b03808416600081815260036020908152604080832080546000190190559386168083528483208054600101905585835260028252848320805473ffffffffffffffffffffffffffffffffffffffff199081168317909155600490925284832080549092169091559251849392917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610630828261096b565b5050565b61063f838383610433565b6001600160a01b0382163b15806106e85750604051630a85bd0160e11b8082523360048301526001600160a01b03858116602484015260448301849052608060648401526000608484015290919084169063150b7a029060a4016020604051808303816000875af11580156106b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106dc9190610d1e565b6001600160e01b031916145b6107275760405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b60448201526064016103c1565b505050565b6000818152600260205260409020546001600160a01b0316806107915760405162461bcd60e51b815260206004820152600a60248201527f4e4f545f4d494e5445440000000000000000000000000000000000000000000060448201526064016103c1565b919050565b60006001600160a01b0382166107ee5760405162461bcd60e51b815260206004820152600c60248201527f5a45524f5f41444452455353000000000000000000000000000000000000000060448201526064016103c1565b506001600160a01b031660009081526003602052604090205490565b600180546102be90610ce4565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61088e858585610433565b6001600160a01b0384163b15806109255750604051630a85bd0160e11b808252906001600160a01b0386169063150b7a02906108d69033908a90899089908990600401610d3b565b6020604051808303816000875af11580156108f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109199190610d1e565b6001600160e01b031916145b6109645760405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b60448201526064016103c1565b5050505050565b6001600160a01b0382166109c15760405162461bcd60e51b815260206004820152601160248201527f494e56414c49445f524543495049454e5400000000000000000000000000000060448201526064016103c1565b6000818152600260205260409020546001600160a01b031615610a265760405162461bcd60e51b815260206004820152600e60248201527f414c52454144595f4d494e54454400000000000000000000000000000000000060448201526064016103c1565b6001600160a01b0382166000818152600360209081526040808320805460010190558483526002909152808220805473ffffffffffffffffffffffffffffffffffffffff19168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b031981168114610ab457600080fd5b50565b600060208284031215610ac957600080fd5b8135610ad481610a9e565b9392505050565b600060208083528351808285015260005b81811015610b0857858101830151858201604001528201610aec565b506000604082860101526040601f19601f8301168501019250505092915050565b600060208284031215610b3b57600080fd5b5035919050565b80356001600160a01b038116811461079157600080fd5b60008060408385031215610b6c57600080fd5b610b7583610b42565b946020939093013593505050565b600080600060608486031215610b9857600080fd5b610ba184610b42565b9250610baf60208501610b42565b9150604084013590509250925092565b600060208284031215610bd157600080fd5b610ad482610b42565b60008060408385031215610bed57600080fd5b610bf683610b42565b915060208301358015158114610c0b57600080fd5b809150509250929050565b600080600080600060808688031215610c2e57600080fd5b610c3786610b42565b9450610c4560208701610b42565b935060408601359250606086013567ffffffffffffffff80821115610c6957600080fd5b818801915088601f830112610c7d57600080fd5b813581811115610c8c57600080fd5b896020828501011115610c9e57600080fd5b9699959850939650602001949392505050565b60008060408385031215610cc457600080fd5b610ccd83610b42565b9150610cdb60208401610b42565b90509250929050565b600181811c90821680610cf857607f821691505b602082108103610d1857634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215610d3057600080fd5b8151610ad481610a9e565b60006001600160a01b03808816835280871660208401525084604083015260806060830152826080830152828460a0840137600060a0848401015260a0601f19601f8501168301019050969550505050505056fea164736f6c6343000810000a";

type MockERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC721__factory extends ContractFactory {
  constructor(...args: MockERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockERC721> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<MockERC721>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override attach(address: string): MockERC721 {
    return super.attach(address) as MockERC721;
  }
  override connect(signer: Signer): MockERC721__factory {
    return super.connect(signer) as MockERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC721Interface {
    return new utils.Interface(_abi) as MockERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC721 {
    return new Contract(address, _abi, signerOrProvider) as MockERC721;
  }
}
