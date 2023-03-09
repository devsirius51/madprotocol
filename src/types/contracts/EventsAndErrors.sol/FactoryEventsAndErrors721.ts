/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, Signer, utils } from "ethers";

export interface FactoryEventsAndErrors721Interface extends utils.Interface {
  functions: {};

  events: {
    "ERC721BasicCreated(address,address,string,string,uint256,uint256,uint256)": EventFragment;
    "ERC721LazyCreated(address,address,string,string,uint256,uint256,uint256)": EventFragment;
    "ERC721MinimalCreated(address,address,string,string,uint256,uint256,uint256)": EventFragment;
    "ERC721WhitelistCreated(address,address,string,string,uint256,uint256,uint256)": EventFragment;
    "MarketplaceUpdated(address)": EventFragment;
    "PaymentTokenUpdated(address)": EventFragment;
    "RouterUpdated(address)": EventFragment;
    "SignerUpdated(address)": EventFragment;
    "SplitterCreated(address,uint256[],address[],address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC721BasicCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC721LazyCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC721MinimalCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC721WhitelistCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketplaceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentTokenUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RouterUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SplitterCreated"): EventFragment;
}

export interface ERC721BasicCreatedEventObject {
  newSplitter: string;
  newCollection: string;
  name: string;
  symbol: string;
  royalties: BigNumber;
  maxSupply: BigNumber;
  mintPrice: BigNumber;
}
export type ERC721BasicCreatedEvent = TypedEvent<
  [string, string, string, string, BigNumber, BigNumber, BigNumber],
  ERC721BasicCreatedEventObject
>;

export type ERC721BasicCreatedEventFilter =
  TypedEventFilter<ERC721BasicCreatedEvent>;

export interface ERC721LazyCreatedEventObject {
  newSplitter: string;
  newCollection: string;
  name: string;
  symbol: string;
  royalties: BigNumber;
  maxSupply: BigNumber;
  mintPrice: BigNumber;
}
export type ERC721LazyCreatedEvent = TypedEvent<
  [string, string, string, string, BigNumber, BigNumber, BigNumber],
  ERC721LazyCreatedEventObject
>;

export type ERC721LazyCreatedEventFilter =
  TypedEventFilter<ERC721LazyCreatedEvent>;

export interface ERC721MinimalCreatedEventObject {
  newSplitter: string;
  newCollection: string;
  name: string;
  symbol: string;
  royalties: BigNumber;
  maxSupply: BigNumber;
  mintPrice: BigNumber;
}
export type ERC721MinimalCreatedEvent = TypedEvent<
  [string, string, string, string, BigNumber, BigNumber, BigNumber],
  ERC721MinimalCreatedEventObject
>;

export type ERC721MinimalCreatedEventFilter =
  TypedEventFilter<ERC721MinimalCreatedEvent>;

export interface ERC721WhitelistCreatedEventObject {
  newSplitter: string;
  newCollection: string;
  name: string;
  symbol: string;
  royalties: BigNumber;
  maxSupply: BigNumber;
  mintPrice: BigNumber;
}
export type ERC721WhitelistCreatedEvent = TypedEvent<
  [string, string, string, string, BigNumber, BigNumber, BigNumber],
  ERC721WhitelistCreatedEventObject
>;

export type ERC721WhitelistCreatedEventFilter =
  TypedEventFilter<ERC721WhitelistCreatedEvent>;

export interface MarketplaceUpdatedEventObject {
  newMarket: string;
}
export type MarketplaceUpdatedEvent = TypedEvent<
  [string],
  MarketplaceUpdatedEventObject
>;

export type MarketplaceUpdatedEventFilter =
  TypedEventFilter<MarketplaceUpdatedEvent>;

export interface PaymentTokenUpdatedEventObject {
  newPaymentToken: string;
}
export type PaymentTokenUpdatedEvent = TypedEvent<
  [string],
  PaymentTokenUpdatedEventObject
>;

export type PaymentTokenUpdatedEventFilter =
  TypedEventFilter<PaymentTokenUpdatedEvent>;

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

export interface FactoryEventsAndErrors721 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FactoryEventsAndErrors721Interface;

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
    "ERC721BasicCreated(address,address,string,string,uint256,uint256,uint256)"(
      newSplitter?: PromiseOrValue<string> | null,
      newCollection?: PromiseOrValue<string> | null,
      name?: null,
      symbol?: null,
      royalties?: null,
      maxSupply?: null,
      mintPrice?: null
    ): ERC721BasicCreatedEventFilter;
    ERC721BasicCreated(
      newSplitter?: PromiseOrValue<string> | null,
      newCollection?: PromiseOrValue<string> | null,
      name?: null,
      symbol?: null,
      royalties?: null,
      maxSupply?: null,
      mintPrice?: null
    ): ERC721BasicCreatedEventFilter;

    "ERC721LazyCreated(address,address,string,string,uint256,uint256,uint256)"(
      newSplitter?: PromiseOrValue<string> | null,
      newCollection?: PromiseOrValue<string> | null,
      name?: null,
      symbol?: null,
      royalties?: null,
      maxSupply?: null,
      mintPrice?: null
    ): ERC721LazyCreatedEventFilter;
    ERC721LazyCreated(
      newSplitter?: PromiseOrValue<string> | null,
      newCollection?: PromiseOrValue<string> | null,
      name?: null,
      symbol?: null,
      royalties?: null,
      maxSupply?: null,
      mintPrice?: null
    ): ERC721LazyCreatedEventFilter;

    "ERC721MinimalCreated(address,address,string,string,uint256,uint256,uint256)"(
      newSplitter?: PromiseOrValue<string> | null,
      newCollection?: PromiseOrValue<string> | null,
      name?: null,
      symbol?: null,
      royalties?: null,
      maxSupply?: null,
      mintPrice?: null
    ): ERC721MinimalCreatedEventFilter;
    ERC721MinimalCreated(
      newSplitter?: PromiseOrValue<string> | null,
      newCollection?: PromiseOrValue<string> | null,
      name?: null,
      symbol?: null,
      royalties?: null,
      maxSupply?: null,
      mintPrice?: null
    ): ERC721MinimalCreatedEventFilter;

    "ERC721WhitelistCreated(address,address,string,string,uint256,uint256,uint256)"(
      newSplitter?: PromiseOrValue<string> | null,
      newCollection?: PromiseOrValue<string> | null,
      name?: null,
      symbol?: null,
      royalties?: null,
      maxSupply?: null,
      mintPrice?: null
    ): ERC721WhitelistCreatedEventFilter;
    ERC721WhitelistCreated(
      newSplitter?: PromiseOrValue<string> | null,
      newCollection?: PromiseOrValue<string> | null,
      name?: null,
      symbol?: null,
      royalties?: null,
      maxSupply?: null,
      mintPrice?: null
    ): ERC721WhitelistCreatedEventFilter;

    "MarketplaceUpdated(address)"(
      newMarket?: PromiseOrValue<string> | null
    ): MarketplaceUpdatedEventFilter;
    MarketplaceUpdated(
      newMarket?: PromiseOrValue<string> | null
    ): MarketplaceUpdatedEventFilter;

    "PaymentTokenUpdated(address)"(
      newPaymentToken?: PromiseOrValue<string> | null
    ): PaymentTokenUpdatedEventFilter;
    PaymentTokenUpdated(
      newPaymentToken?: PromiseOrValue<string> | null
    ): PaymentTokenUpdatedEventFilter;

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
