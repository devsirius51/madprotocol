/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  FactoryVerifier,
  FactoryVerifierInterface,
} from "../../../lib/auth/FactoryVerifier";
import { Contract, Interface, type ContractRunner } from "ethers";

const _abi = [
  {
    inputs: [],
    name: "AccessDenied",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_collectionId",
        type: "address",
      },
    ],
    name: "collectionCheck",
    outputs: [
      {
        internalType: "bool",
        name: "check",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "creatorAuth",
    outputs: [
      {
        internalType: "bool",
        name: "stdout",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class FactoryVerifier__factory {
  static readonly abi = _abi;
  static createInterface(): FactoryVerifierInterface {
    return new Interface(_abi) as FactoryVerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): FactoryVerifier {
    return new Contract(address, _abi, runner) as unknown as FactoryVerifier;
  }
}
