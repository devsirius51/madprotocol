/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../../../common";
import type {
  MockERC2981,
  MockERC2981Interface,
} from "../../../../../contracts/lib/test/erc2981-mock.sol/MockERC2981";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
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
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "setRoyaltyFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "setRoyaltyRecipient",
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
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080346101145761048a80380390601f19601f83011683019183831060018060401b038411176100fe5780849260409485528339810103126100f957602081519101519060018060a01b0382168092036100f45760018060a01b0319913383600254161760025580604051933360007f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768188a360015416176001557f2a5a1009e36beb67c3a1ada61dd1343d7e9ec62c70965492fbaa06234f8316b1600084a2806000557fc36422dcc77a5c93a5c48743078f8130c9fcc2a0ff893904ee62a3565688117c600083a2610370908161011a8239f35b600080fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe6080604081815260049182361015610017575b600080fd5b600092833560e01c91826301ffc9a7146102905750816313af4035146101d65781632a55205a146101755781633e4086e51461011857816341e42f30146100965750638da5cb5b146100695780610012565b34610092578160031936011261008e5760209060018060a01b03600254169051908152f35b5080fd5b5080fd5b90503461011457602060031936011261011057359060018060a01b0380831680930361010c576100cb906002541633146102ef565b816bffffffffffffffffffffffff60a01b600154161760015551907f2a5a1009e36beb67c3a1ada61dd1343d7e9ec62c70965492fbaa06234f8316b18383a2f35b8380fd5b8280fd5b8280fd5b90503461017157602060031936011261016d57359061014260018060a01b036002541633146102ef565b81835551907fc36422dcc77a5c93a5c48743078f8130c9fcc2a0ff893904ee62a3565688117c8383a2f35b8280fd5b8280fd5b8284346101d357816003193601126101d0576024359060018060a01b03600154169181549181600019048311821515166101bd57509061271091845193845202046020820152f35b602490601187634e487b7160e01b835252fd5b80fd5b80fd5b9190503461028c57602060031936011261028857813560018060a01b0392838216938483036102845761020e906002541633146102ef565b831561024157506002555190337f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768484a3f35b606490602084519162461bcd60e51b8352820152600d60248201527f496e76616c6964206f776e6572000000000000000000000000000000000000006044820152fd5b8580fd5b8280fd5b8280fd5b8491346102eb5760206003193601126102e7573563ffffffff60e01b81168091036102e357602092506301ffc9a760e01b81149081156102d2575b5015158152f35b905063152a902d60e11b14836102cb565b8280fd5b8280fd5b8280fd5b156102f657565b606460405162461bcd60e51b815260206004820152600c60248201527f554e415554484f52495a454400000000000000000000000000000000000000006044820152fdfea2646970667358221220071802f777cd4bd960f4dfcf76136552c437ff6ee620eb4e864b04272761a93664736f6c63430008100033";

type MockERC2981ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC2981ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC2981__factory extends ContractFactory {
  constructor(...args: MockERC2981ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    fee: PromiseOrValue<BigNumberish>,
    recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockERC2981> {
    return super.deploy(
      fee,
      recipient,
      overrides || {}
    ) as Promise<MockERC2981>;
  }
  override getDeployTransaction(
    fee: PromiseOrValue<BigNumberish>,
    recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(fee, recipient, overrides || {});
  }
  override attach(address: string): MockERC2981 {
    return super.attach(address) as MockERC2981;
  }
  override connect(signer: Signer): MockERC2981__factory {
    return super.connect(signer) as MockERC2981__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC2981Interface {
    return new utils.Interface(_abi) as MockERC2981Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC2981 {
    return new Contract(address, _abi, signerOrProvider) as MockERC2981;
  }
}
