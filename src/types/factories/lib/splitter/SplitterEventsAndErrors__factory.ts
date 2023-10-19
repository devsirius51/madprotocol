/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  SplitterEventsAndErrors,
  SplitterEventsAndErrorsInterface,
} from "../../../lib/splitter/SplitterEventsAndErrors";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [],
    name: "AlreadyPayee",
    type: "error",
  },
  {
    inputs: [],
    name: "DeadAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "DeniedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidShare",
    type: "error",
  },
  {
    inputs: [],
    name: "LengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "NoPayees",
    type: "error",
  },
  {
    inputs: [],
    name: "NoShares",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ERC20PaymentReleased",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "PayeeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReleased",
    type: "event",
  },
] as const;

export class SplitterEventsAndErrors__factory {
  static readonly abi = _abi;
  static createInterface(): SplitterEventsAndErrorsInterface {
    return new utils.Interface(_abi) as SplitterEventsAndErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SplitterEventsAndErrors {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SplitterEventsAndErrors;
  }
}
