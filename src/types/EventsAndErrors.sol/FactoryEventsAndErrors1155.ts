/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface FactoryEventsAndErrors1155Interface extends utils.Interface {
  functions: {};

  events: {
    "ERC1155BasicCreated(address,address,string,string,uint256,uint256,uint256)": EventFragment;
    "ERC1155LazyCreated(address,address,string,string,uint256,uint256,uint256)": EventFragment;
    "ERC1155MinimalCreated(address,address,string,string,uint256,uint256,uint256)": EventFragment;
    "ERC1155WhitelistCreated(address,address,string,string,uint256,uint256,uint256)": EventFragment;
    "MarketplaceUpdated(address)": EventFragment;
    "RouterUpdated(address)": EventFragment;
    "SignerUpdated(address)": EventFragment;
    "SplitterCreated(address,uint256[],address[],address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC1155BasicCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC1155LazyCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC1155MinimalCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC1155WhitelistCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketplaceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RouterUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SplitterCreated"): EventFragment;
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

export interface MarketplaceUpdatedEventObject {
  newMarket: string;
}
export type MarketplaceUpdatedEvent = TypedEvent<
  [string],
  MarketplaceUpdatedEventObject
>;

export type MarketplaceUpdatedEventFilter =
  TypedEventFilter<MarketplaceUpdatedEvent>;

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

export interface FactoryEventsAndErrors1155 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FactoryEventsAndErrors1155Interface;

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

  functions: {};

  callStatic: {};

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

    "MarketplaceUpdated(address)"(
      newMarket?: PromiseOrValue<string> | null
    ): MarketplaceUpdatedEventFilter;
    MarketplaceUpdated(
      newMarket?: PromiseOrValue<string> | null
    ): MarketplaceUpdatedEventFilter;

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
  };

  estimateGas: {};

  populateTransaction: {};
}
