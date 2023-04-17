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

export interface FactoryEventsAndErrors1155Interface extends utils.Interface {
  functions: {};

  events: {
    "ERC1155BasicCreated(address,address,string,string,uint256,uint256,uint256)": EventFragment;
    "FeesUpdated(uint256,uint256)": EventFragment;
    "MarketplaceUpdated(address)": EventFragment;
    "PaymentTokenUpdated(address)": EventFragment;
    "RecipientUpdated(address)": EventFragment;
    "RouterUpdated(address)": EventFragment;
    "SignerUpdated(address)": EventFragment;
    "SplitterCreated(address,uint256[],address[],address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC1155BasicCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeesUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketplaceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentTokenUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RecipientUpdated"): EventFragment;
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
  };

  estimateGas: {};

  populateTransaction: {};
}
