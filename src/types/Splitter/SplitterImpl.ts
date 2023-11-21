/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";

export interface SplitterImplInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "_payees"
      | "_shares"
      | "payeesLength"
      | "releasable(address)"
      | "releasable(address,address)"
      | "release(address)"
      | "release(address,address)"
      | "releaseAll(address)"
      | "releaseAll()"
      | "released(address,address)"
      | "released(address)"
      | "totalReleased(address)"
      | "totalReleased()"
      | "totalShares"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ERC20PaymentReleased"
      | "PayeeAdded"
      | "PaymentReceived"
      | "PaymentReleased"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "_payees",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_shares",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "payeesLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "releasable(address)",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "releasable(address,address)",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "release(address)",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "release(address,address)",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "releaseAll(address)",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "releaseAll()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "released(address,address)",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "released(address)",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalReleased(address)",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalReleased()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalShares",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "_payees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_shares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "payeesLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releasable(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releasable(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "release(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "release(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releaseAll(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releaseAll()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "released(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "released(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalReleased(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalReleased()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalShares",
    data: BytesLike
  ): Result;
}

export namespace ERC20PaymentReleasedEvent {
  export type InputTuple = [
    token: AddressLike,
    to: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [token: string, to: string, amount: bigint];
  export interface OutputObject {
    token: string;
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PayeeAddedEvent {
  export type InputTuple = [account: AddressLike, shares: BigNumberish];
  export type OutputTuple = [account: string, shares: bigint];
  export interface OutputObject {
    account: string;
    shares: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PaymentReceivedEvent {
  export type InputTuple = [from: AddressLike, amount: BigNumberish];
  export type OutputTuple = [from: string, amount: bigint];
  export interface OutputObject {
    from: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PaymentReleasedEvent {
  export type InputTuple = [to: AddressLike, amount: BigNumberish];
  export type OutputTuple = [to: string, amount: bigint];
  export interface OutputObject {
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SplitterImpl extends BaseContract {
  connect(runner?: ContractRunner | null): SplitterImpl;
  waitForDeployment(): Promise<this>;

  interface: SplitterImplInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  _payees: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  _shares: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  payeesLength: TypedContractMethod<[], [bigint], "view">;

  "releasable(address)": TypedContractMethod<
    [account: AddressLike],
    [bigint],
    "view"
  >;

  "releasable(address,address)": TypedContractMethod<
    [token: AddressLike, account: AddressLike],
    [bigint],
    "view"
  >;

  "release(address)": TypedContractMethod<
    [account: AddressLike],
    [void],
    "nonpayable"
  >;

  "release(address,address)": TypedContractMethod<
    [token: AddressLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  "releaseAll(address)": TypedContractMethod<
    [token: AddressLike],
    [void],
    "nonpayable"
  >;

  "releaseAll()": TypedContractMethod<[], [void], "nonpayable">;

  "released(address,address)": TypedContractMethod<
    [token: AddressLike, account: AddressLike],
    [bigint],
    "view"
  >;

  "released(address)": TypedContractMethod<
    [account: AddressLike],
    [bigint],
    "view"
  >;

  "totalReleased(address)": TypedContractMethod<
    [token: AddressLike],
    [bigint],
    "view"
  >;

  "totalReleased()": TypedContractMethod<[], [bigint], "view">;

  totalShares: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "_payees"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "_shares"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "payeesLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "releasable(address)"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "releasable(address,address)"
  ): TypedContractMethod<
    [token: AddressLike, account: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "release(address)"
  ): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "release(address,address)"
  ): TypedContractMethod<
    [token: AddressLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "releaseAll(address)"
  ): TypedContractMethod<[token: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "releaseAll()"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "released(address,address)"
  ): TypedContractMethod<
    [token: AddressLike, account: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "released(address)"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalReleased(address)"
  ): TypedContractMethod<[token: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalReleased()"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalShares"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "ERC20PaymentReleased"
  ): TypedContractEvent<
    ERC20PaymentReleasedEvent.InputTuple,
    ERC20PaymentReleasedEvent.OutputTuple,
    ERC20PaymentReleasedEvent.OutputObject
  >;
  getEvent(
    key: "PayeeAdded"
  ): TypedContractEvent<
    PayeeAddedEvent.InputTuple,
    PayeeAddedEvent.OutputTuple,
    PayeeAddedEvent.OutputObject
  >;
  getEvent(
    key: "PaymentReceived"
  ): TypedContractEvent<
    PaymentReceivedEvent.InputTuple,
    PaymentReceivedEvent.OutputTuple,
    PaymentReceivedEvent.OutputObject
  >;
  getEvent(
    key: "PaymentReleased"
  ): TypedContractEvent<
    PaymentReleasedEvent.InputTuple,
    PaymentReleasedEvent.OutputTuple,
    PaymentReleasedEvent.OutputObject
  >;

  filters: {
    "ERC20PaymentReleased(address,address,uint256)": TypedContractEvent<
      ERC20PaymentReleasedEvent.InputTuple,
      ERC20PaymentReleasedEvent.OutputTuple,
      ERC20PaymentReleasedEvent.OutputObject
    >;
    ERC20PaymentReleased: TypedContractEvent<
      ERC20PaymentReleasedEvent.InputTuple,
      ERC20PaymentReleasedEvent.OutputTuple,
      ERC20PaymentReleasedEvent.OutputObject
    >;

    "PayeeAdded(address,uint256)": TypedContractEvent<
      PayeeAddedEvent.InputTuple,
      PayeeAddedEvent.OutputTuple,
      PayeeAddedEvent.OutputObject
    >;
    PayeeAdded: TypedContractEvent<
      PayeeAddedEvent.InputTuple,
      PayeeAddedEvent.OutputTuple,
      PayeeAddedEvent.OutputObject
    >;

    "PaymentReceived(address,uint256)": TypedContractEvent<
      PaymentReceivedEvent.InputTuple,
      PaymentReceivedEvent.OutputTuple,
      PaymentReceivedEvent.OutputObject
    >;
    PaymentReceived: TypedContractEvent<
      PaymentReceivedEvent.InputTuple,
      PaymentReceivedEvent.OutputTuple,
      PaymentReceivedEvent.OutputObject
    >;

    "PaymentReleased(address,uint256)": TypedContractEvent<
      PaymentReleasedEvent.InputTuple,
      PaymentReleasedEvent.OutputTuple,
      PaymentReleasedEvent.OutputObject
    >;
    PaymentReleased: TypedContractEvent<
      PaymentReleasedEvent.InputTuple,
      PaymentReleasedEvent.OutputTuple,
      PaymentReleasedEvent.OutputObject
    >;
  };
}
