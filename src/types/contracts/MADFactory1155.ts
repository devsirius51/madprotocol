/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface MADFactory1155Interface extends utils.Interface {
  functions: {
    "colInfo(bytes32)": FunctionFragment;
    "createCollection(uint8,string,string,string,uint256,uint256,string,address,uint256)": FunctionFragment;
    "creatorAuth(address,address)": FunctionFragment;
    "creatorCheck(bytes32)": FunctionFragment;
    "erc20()": FunctionFragment;
    "getColID(address)": FunctionFragment;
    "getDeployedAddr(string)": FunctionFragment;
    "getIDsLength(address)": FunctionFragment;
    "market()": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "router()": FunctionFragment;
    "setMarket(address)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setRouter(address)": FunctionFragment;
    "setSigner(address)": FunctionFragment;
    "splitterCheck(string,address,address,uint256,uint256)": FunctionFragment;
    "splitterInfo(address,address)": FunctionFragment;
    "typeChecker(bytes32)": FunctionFragment;
    "unpause()": FunctionFragment;
    "userTokens(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "colInfo"
      | "createCollection"
      | "creatorAuth"
      | "creatorCheck"
      | "erc20"
      | "getColID"
      | "getDeployedAddr"
      | "getIDsLength"
      | "market"
      | "name"
      | "owner"
      | "pause"
      | "paused"
      | "router"
      | "setMarket"
      | "setOwner"
      | "setRouter"
      | "setSigner"
      | "splitterCheck"
      | "splitterInfo"
      | "typeChecker"
      | "unpause"
      | "userTokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "colInfo",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "createCollection",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "creatorAuth",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "creatorCheck",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "erc20", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getColID",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDeployedAddr",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getIDsLength",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "market", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setMarket",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRouter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setSigner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "splitterCheck",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "splitterInfo",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "typeChecker",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "userTokens",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "colInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creatorAuth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creatorCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "erc20", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getColID", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDeployedAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIDsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "market", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setMarket", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setRouter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setSigner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "splitterCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "splitterInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "typeChecker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userTokens", data: BytesLike): Result;

  events: {
    "ERC1155BasicCreated(address,address,string,string,uint256,uint256,uint256)": EventFragment;
    "ERC1155LazyCreated(address,address,string,string,uint256,uint256,uint256)": EventFragment;
    "ERC1155MinimalCreated(address,address,string,string,uint256,uint256,uint256)": EventFragment;
    "ERC1155WhitelistCreated(address,address,string,string,uint256,uint256,uint256)": EventFragment;
    "FeesUpdated(uint256,uint256)": EventFragment;
    "MarketplaceUpdated(address)": EventFragment;
    "OwnerUpdated(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "PaymentTokenUpdated(address)": EventFragment;
    "RecipientUpdated(address)": EventFragment;
    "RouterUpdated(address)": EventFragment;
    "SignerUpdated(address)": EventFragment;
    "SplitterCreated(address,uint256[],address[],address,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC1155BasicCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC1155LazyCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC1155MinimalCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC1155WhitelistCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeesUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketplaceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentTokenUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RecipientUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RouterUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SplitterCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export interface ERC1155BasicCreatedEventObject {
  newSplitter: string;
  newCollection: string;
  name: string;
  symbol: string;
  royalties: BigNumber;
  maxSupply: BigNumber;
  mintPrice: BigNumber;
}
export type ERC1155BasicCreatedEvent = TypedEvent<
  [string, string, string, string, BigNumber, BigNumber, BigNumber],
  ERC1155BasicCreatedEventObject
>;

export type ERC1155BasicCreatedEventFilter =
  TypedEventFilter<ERC1155BasicCreatedEvent>;

export interface ERC1155LazyCreatedEventObject {
  newSplitter: string;
  newCollection: string;
  name: string;
  symbol: string;
  royalties: BigNumber;
  maxSupply: BigNumber;
  mintPrice: BigNumber;
}
export type ERC1155LazyCreatedEvent = TypedEvent<
  [string, string, string, string, BigNumber, BigNumber, BigNumber],
  ERC1155LazyCreatedEventObject
>;

export type ERC1155LazyCreatedEventFilter =
  TypedEventFilter<ERC1155LazyCreatedEvent>;

export interface ERC1155MinimalCreatedEventObject {
  newSplitter: string;
  newCollection: string;
  name: string;
  symbol: string;
  royalties: BigNumber;
  maxSupply: BigNumber;
  mintPrice: BigNumber;
}
export type ERC1155MinimalCreatedEvent = TypedEvent<
  [string, string, string, string, BigNumber, BigNumber, BigNumber],
  ERC1155MinimalCreatedEventObject
>;

export type ERC1155MinimalCreatedEventFilter =
  TypedEventFilter<ERC1155MinimalCreatedEvent>;

export interface ERC1155WhitelistCreatedEventObject {
  newSplitter: string;
  newCollection: string;
  name: string;
  symbol: string;
  royalties: BigNumber;
  maxSupply: BigNumber;
  mintPrice: BigNumber;
}
export type ERC1155WhitelistCreatedEvent = TypedEvent<
  [string, string, string, string, BigNumber, BigNumber, BigNumber],
  ERC1155WhitelistCreatedEventObject
>;

export type ERC1155WhitelistCreatedEventFilter =
  TypedEventFilter<ERC1155WhitelistCreatedEvent>;

export interface FeesUpdatedEventObject {
  feeVal2: BigNumber;
  feeVal3: BigNumber;
}
export type FeesUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  FeesUpdatedEventObject
>;

export type FeesUpdatedEventFilter = TypedEventFilter<FeesUpdatedEvent>;

export interface MarketplaceUpdatedEventObject {
  newMarket: string;
}
export type MarketplaceUpdatedEvent = TypedEvent<
  [string],
  MarketplaceUpdatedEventObject
>;

export type MarketplaceUpdatedEventFilter =
  TypedEventFilter<MarketplaceUpdatedEvent>;

export interface OwnerUpdatedEventObject {
  user: string;
  newOwner: string;
}
export type OwnerUpdatedEvent = TypedEvent<
  [string, string],
  OwnerUpdatedEventObject
>;

export type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface PaymentTokenUpdatedEventObject {
  newPaymentToken: string;
}
export type PaymentTokenUpdatedEvent = TypedEvent<
  [string],
  PaymentTokenUpdatedEventObject
>;

export type PaymentTokenUpdatedEventFilter =
  TypedEventFilter<PaymentTokenUpdatedEvent>;

export interface RecipientUpdatedEventObject {
  newRecipient: string;
}
export type RecipientUpdatedEvent = TypedEvent<
  [string],
  RecipientUpdatedEventObject
>;

export type RecipientUpdatedEventFilter =
  TypedEventFilter<RecipientUpdatedEvent>;

export interface RouterUpdatedEventObject {
  newRouter: string;
}
export type RouterUpdatedEvent = TypedEvent<[string], RouterUpdatedEventObject>;

export type RouterUpdatedEventFilter = TypedEventFilter<RouterUpdatedEvent>;

export interface SignerUpdatedEventObject {
  newSigner: string;
}
export type SignerUpdatedEvent = TypedEvent<[string], SignerUpdatedEventObject>;

export type SignerUpdatedEventFilter = TypedEventFilter<SignerUpdatedEvent>;

export interface SplitterCreatedEventObject {
  creator: string;
  shares: BigNumber[];
  payees: string[];
  splitter: string;
  flag: BigNumber;
}
export type SplitterCreatedEvent = TypedEvent<
  [string, BigNumber[], string[], string, BigNumber],
  SplitterCreatedEventObject
>;

export type SplitterCreatedEventFilter = TypedEventFilter<SplitterCreatedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface MADFactory1155 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MADFactory1155Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    colInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, number, string, BigNumber, string] & {
        creator: string;
        colType: number;
        colSalt: string;
        blocknumber: BigNumber;
        splitter: string;
      }
    >;

    createCollection(
      _tokenType: PromiseOrValue<BigNumberish>,
      _tokenSalt: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _maxSupply: PromiseOrValue<BigNumberish>,
      _uri: PromiseOrValue<string>,
      _splitter: PromiseOrValue<string>,
      _royalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    creatorAuth(
      _token: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { stdout: boolean }>;

    creatorCheck(
      _colID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string, boolean] & { creator: string; check: boolean }>;

    erc20(overrides?: CallOverrides): Promise<[string]>;

    getColID(
      _colAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { colID: string }>;

    getDeployedAddr(
      _salt: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getIDsLength(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    market(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    router(overrides?: CallOverrides): Promise<[string]>;

    setMarket(
      _market: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRouter(
      _router: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSigner(
      _signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    splitterCheck(
      _splitterSalt: PromiseOrValue<string>,
      _ambassador: PromiseOrValue<string>,
      _project: PromiseOrValue<string>,
      _ambShare: PromiseOrValue<BigNumberish>,
      _projectShare: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    splitterInfo(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, BigNumber, BigNumber, boolean] & {
        splitter: string;
        splitterSalt: string;
        ambassador: string;
        project: string;
        ambShare: BigNumber;
        projectShare: BigNumber;
        valid: boolean;
      }
    >;

    typeChecker(
      _colID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[number] & { pointer: number }>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    userTokens(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  colInfo(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [string, number, string, BigNumber, string] & {
      creator: string;
      colType: number;
      colSalt: string;
      blocknumber: BigNumber;
      splitter: string;
    }
  >;

  createCollection(
    _tokenType: PromiseOrValue<BigNumberish>,
    _tokenSalt: PromiseOrValue<string>,
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    _maxSupply: PromiseOrValue<BigNumberish>,
    _uri: PromiseOrValue<string>,
    _splitter: PromiseOrValue<string>,
    _royalty: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  creatorAuth(
    _token: PromiseOrValue<string>,
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  creatorCheck(
    _colID: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[string, boolean] & { creator: string; check: boolean }>;

  erc20(overrides?: CallOverrides): Promise<string>;

  getColID(
    _colAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getDeployedAddr(
    _salt: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getIDsLength(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  market(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  router(overrides?: CallOverrides): Promise<string>;

  setMarket(
    _market: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRouter(
    _router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSigner(
    _signer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  splitterCheck(
    _splitterSalt: PromiseOrValue<string>,
    _ambassador: PromiseOrValue<string>,
    _project: PromiseOrValue<string>,
    _ambShare: PromiseOrValue<BigNumberish>,
    _projectShare: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  splitterInfo(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, BigNumber, BigNumber, boolean] & {
      splitter: string;
      splitterSalt: string;
      ambassador: string;
      project: string;
      ambShare: BigNumber;
      projectShare: BigNumber;
      valid: boolean;
    }
  >;

  typeChecker(
    _colID: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<number>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  userTokens(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    colInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, number, string, BigNumber, string] & {
        creator: string;
        colType: number;
        colSalt: string;
        blocknumber: BigNumber;
        splitter: string;
      }
    >;

    createCollection(
      _tokenType: PromiseOrValue<BigNumberish>,
      _tokenSalt: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _maxSupply: PromiseOrValue<BigNumberish>,
      _uri: PromiseOrValue<string>,
      _splitter: PromiseOrValue<string>,
      _royalty: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    creatorAuth(
      _token: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    creatorCheck(
      _colID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string, boolean] & { creator: string; check: boolean }>;

    erc20(overrides?: CallOverrides): Promise<string>;

    getColID(
      _colAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getDeployedAddr(
      _salt: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getIDsLength(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    market(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    router(overrides?: CallOverrides): Promise<string>;

    setMarket(
      _market: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRouter(
      _router: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSigner(
      _signer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    splitterCheck(
      _splitterSalt: PromiseOrValue<string>,
      _ambassador: PromiseOrValue<string>,
      _project: PromiseOrValue<string>,
      _ambShare: PromiseOrValue<BigNumberish>,
      _projectShare: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    splitterInfo(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, BigNumber, BigNumber, boolean] & {
        splitter: string;
        splitterSalt: string;
        ambassador: string;
        project: string;
        ambShare: BigNumber;
        projectShare: BigNumber;
        valid: boolean;
      }
    >;

    typeChecker(
      _colID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<number>;

    unpause(overrides?: CallOverrides): Promise<void>;

    userTokens(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "ERC1155BasicCreated(address,address,string,string,uint256,uint256,uint256)"(
      newSplitter?: PromiseOrValue<string> | null,
      newCollection?: PromiseOrValue<string> | null,
      name?: null,
      symbol?: null,
      royalties?: null,
      maxSupply?: null,
      mintPrice?: null
    ): ERC1155BasicCreatedEventFilter;
    ERC1155BasicCreated(
      newSplitter?: PromiseOrValue<string> | null,
      newCollection?: PromiseOrValue<string> | null,
      name?: null,
      symbol?: null,
      royalties?: null,
      maxSupply?: null,
      mintPrice?: null
    ): ERC1155BasicCreatedEventFilter;

    "ERC1155LazyCreated(address,address,string,string,uint256,uint256,uint256)"(
      newSplitter?: PromiseOrValue<string> | null,
      newCollection?: PromiseOrValue<string> | null,
      name?: null,
      symbol?: null,
      royalties?: null,
      maxSupply?: null,
      mintPrice?: null
    ): ERC1155LazyCreatedEventFilter;
    ERC1155LazyCreated(
      newSplitter?: PromiseOrValue<string> | null,
      newCollection?: PromiseOrValue<string> | null,
      name?: null,
      symbol?: null,
      royalties?: null,
      maxSupply?: null,
      mintPrice?: null
    ): ERC1155LazyCreatedEventFilter;

    "ERC1155MinimalCreated(address,address,string,string,uint256,uint256,uint256)"(
      newSplitter?: PromiseOrValue<string> | null,
      newCollection?: PromiseOrValue<string> | null,
      name?: null,
      symbol?: null,
      royalties?: null,
      maxSupply?: null,
      mintPrice?: null
    ): ERC1155MinimalCreatedEventFilter;
    ERC1155MinimalCreated(
      newSplitter?: PromiseOrValue<string> | null,
      newCollection?: PromiseOrValue<string> | null,
      name?: null,
      symbol?: null,
      royalties?: null,
      maxSupply?: null,
      mintPrice?: null
    ): ERC1155MinimalCreatedEventFilter;

    "ERC1155WhitelistCreated(address,address,string,string,uint256,uint256,uint256)"(
      newSplitter?: PromiseOrValue<string> | null,
      newCollection?: PromiseOrValue<string> | null,
      name?: null,
      symbol?: null,
      royalties?: null,
      maxSupply?: null,
      mintPrice?: null
    ): ERC1155WhitelistCreatedEventFilter;
    ERC1155WhitelistCreated(
      newSplitter?: PromiseOrValue<string> | null,
      newCollection?: PromiseOrValue<string> | null,
      name?: null,
      symbol?: null,
      royalties?: null,
      maxSupply?: null,
      mintPrice?: null
    ): ERC1155WhitelistCreatedEventFilter;

    "FeesUpdated(uint256,uint256)"(
      feeVal2?: null,
      feeVal3?: null
    ): FeesUpdatedEventFilter;
    FeesUpdated(feeVal2?: null, feeVal3?: null): FeesUpdatedEventFilter;

    "MarketplaceUpdated(address)"(
      newMarket?: PromiseOrValue<string> | null
    ): MarketplaceUpdatedEventFilter;
    MarketplaceUpdated(
      newMarket?: PromiseOrValue<string> | null
    ): MarketplaceUpdatedEventFilter;

    "OwnerUpdated(address,address)"(
      user?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnerUpdatedEventFilter;
    OwnerUpdated(
      user?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnerUpdatedEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "PaymentTokenUpdated(address)"(
      newPaymentToken?: PromiseOrValue<string> | null
    ): PaymentTokenUpdatedEventFilter;
    PaymentTokenUpdated(
      newPaymentToken?: PromiseOrValue<string> | null
    ): PaymentTokenUpdatedEventFilter;

    "RecipientUpdated(address)"(
      newRecipient?: PromiseOrValue<string> | null
    ): RecipientUpdatedEventFilter;
    RecipientUpdated(
      newRecipient?: PromiseOrValue<string> | null
    ): RecipientUpdatedEventFilter;

    "RouterUpdated(address)"(
      newRouter?: PromiseOrValue<string> | null
    ): RouterUpdatedEventFilter;
    RouterUpdated(
      newRouter?: PromiseOrValue<string> | null
    ): RouterUpdatedEventFilter;

    "SignerUpdated(address)"(
      newSigner?: PromiseOrValue<string> | null
    ): SignerUpdatedEventFilter;
    SignerUpdated(
      newSigner?: PromiseOrValue<string> | null
    ): SignerUpdatedEventFilter;

    "SplitterCreated(address,uint256[],address[],address,uint256)"(
      creator?: PromiseOrValue<string> | null,
      shares?: null,
      payees?: null,
      splitter?: null,
      flag?: null
    ): SplitterCreatedEventFilter;
    SplitterCreated(
      creator?: PromiseOrValue<string> | null,
      shares?: null,
      payees?: null,
      splitter?: null,
      flag?: null
    ): SplitterCreatedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    colInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createCollection(
      _tokenType: PromiseOrValue<BigNumberish>,
      _tokenSalt: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _maxSupply: PromiseOrValue<BigNumberish>,
      _uri: PromiseOrValue<string>,
      _splitter: PromiseOrValue<string>,
      _royalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    creatorAuth(
      _token: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creatorCheck(
      _colID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    erc20(overrides?: CallOverrides): Promise<BigNumber>;

    getColID(
      _colAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDeployedAddr(
      _salt: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIDsLength(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    market(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    setMarket(
      _market: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRouter(
      _router: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSigner(
      _signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    splitterCheck(
      _splitterSalt: PromiseOrValue<string>,
      _ambassador: PromiseOrValue<string>,
      _project: PromiseOrValue<string>,
      _ambShare: PromiseOrValue<BigNumberish>,
      _projectShare: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    splitterInfo(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    typeChecker(
      _colID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    userTokens(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    colInfo(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createCollection(
      _tokenType: PromiseOrValue<BigNumberish>,
      _tokenSalt: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _maxSupply: PromiseOrValue<BigNumberish>,
      _uri: PromiseOrValue<string>,
      _splitter: PromiseOrValue<string>,
      _royalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    creatorAuth(
      _token: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creatorCheck(
      _colID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    erc20(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getColID(
      _colAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDeployedAddr(
      _salt: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIDsLength(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    market(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMarket(
      _market: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRouter(
      _router: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSigner(
      _signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    splitterCheck(
      _splitterSalt: PromiseOrValue<string>,
      _ambassador: PromiseOrValue<string>,
      _project: PromiseOrValue<string>,
      _ambShare: PromiseOrValue<BigNumberish>,
      _projectShare: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    splitterInfo(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    typeChecker(
      _colID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    userTokens(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
