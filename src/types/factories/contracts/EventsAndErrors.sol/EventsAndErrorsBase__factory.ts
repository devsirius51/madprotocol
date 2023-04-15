/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  EventsAndErrorsBase,
  EventsAndErrorsBaseInterface,
} from "../../../contracts/EventsAndErrors.sol/EventsAndErrorsBase";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
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
        internalType: "address",
        name: "newRecipient",
        type: "address",
      },
    ],
    name: "RecipientUpdated",
    type: "event",
  },
] as const;

export class EventsAndErrorsBase__factory {
  static readonly abi = _abi;
  static createInterface(): EventsAndErrorsBaseInterface {
    return new utils.Interface(_abi) as EventsAndErrorsBaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EventsAndErrorsBase {
    return new Contract(address, _abi, signerOrProvider) as EventsAndErrorsBase;
  }
}
