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
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  Signer,
  utils,
} from "ethers";

export interface RouterEventsInterface extends utils.Interface {
  functions: {};

  events: {
    "BaseURISet(bytes32,string)": EventFragment;
    "FactoryUpdated(address)": EventFragment;
    "FeesUpdated(uint256,uint256)": EventFragment;
    "FreeClaimState(bytes32,uint8,bool)": EventFragment;
    "PaymentTokenUpdated(address)": EventFragment;
    "PublicMintState(bytes32,uint8,bool)": EventFragment;
    "RecipientUpdated(address)": EventFragment;
    "TokenFundsWithdrawn(bytes32,uint8,address)": EventFragment;
    "WhitelistMintState(bytes32,uint8,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BaseURISet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FactoryUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeesUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FreeClaimState"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentTokenUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PublicMintState"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RecipientUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenFundsWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistMintState"): EventFragment;
}

export interface BaseURISetEventObject {
  _id: string;
  _baseURI: string;
}
export type BaseURISetEvent = TypedEvent<
  [string, string],
  BaseURISetEventObject
>;

export type BaseURISetEventFilter = TypedEventFilter<BaseURISetEvent>;

export interface FactoryUpdatedEventObject {
  newFactory: string;
}
export type FactoryUpdatedEvent = TypedEvent<
  [string],
  FactoryUpdatedEventObject
>;

export type FactoryUpdatedEventFilter = TypedEventFilter<FactoryUpdatedEvent>;

export interface FeesUpdatedEventObject {
  feeVal2: BigNumber;
  feeVal3: BigNumber;
}
export type FeesUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  FeesUpdatedEventObject
>;

export type FeesUpdatedEventFilter = TypedEventFilter<FeesUpdatedEvent>;

export interface FreeClaimStateEventObject {
  _id: string;
  _type: number;
  _state: boolean;
}
export type FreeClaimStateEvent = TypedEvent<
  [string, number, boolean],
  FreeClaimStateEventObject
>;

export type FreeClaimStateEventFilter = TypedEventFilter<FreeClaimStateEvent>;

export interface PaymentTokenUpdatedEventObject {
  newPaymentToken: string;
}
export type PaymentTokenUpdatedEvent = TypedEvent<
  [string],
  PaymentTokenUpdatedEventObject
>;

export type PaymentTokenUpdatedEventFilter =
  TypedEventFilter<PaymentTokenUpdatedEvent>;

export interface PublicMintStateEventObject {
  _id: string;
  _type: number;
  _state: boolean;
}
export type PublicMintStateEvent = TypedEvent<
  [string, number, boolean],
  PublicMintStateEventObject
>;

export type PublicMintStateEventFilter = TypedEventFilter<PublicMintStateEvent>;

export interface RecipientUpdatedEventObject {
  newRecipient: string;
}
export type RecipientUpdatedEvent = TypedEvent<
  [string],
  RecipientUpdatedEventObject
>;

export type RecipientUpdatedEventFilter =
  TypedEventFilter<RecipientUpdatedEvent>;

export interface TokenFundsWithdrawnEventObject {
  _id: string;
  _type: number;
  _payee: string;
}
export type TokenFundsWithdrawnEvent = TypedEvent<
  [string, number, string],
  TokenFundsWithdrawnEventObject
>;

export type TokenFundsWithdrawnEventFilter =
  TypedEventFilter<TokenFundsWithdrawnEvent>;

export interface WhitelistMintStateEventObject {
  _id: string;
  _type: number;
  _state: boolean;
}
export type WhitelistMintStateEvent = TypedEvent<
  [string, number, boolean],
  WhitelistMintStateEventObject
>;

export type WhitelistMintStateEventFilter =
  TypedEventFilter<WhitelistMintStateEvent>;

export interface RouterEvents extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RouterEventsInterface;

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
    "BaseURISet(bytes32,string)"(
      _id?: PromiseOrValue<BytesLike> | null,
      _baseURI?: PromiseOrValue<string> | null
    ): BaseURISetEventFilter;
    BaseURISet(
      _id?: PromiseOrValue<BytesLike> | null,
      _baseURI?: PromiseOrValue<string> | null
    ): BaseURISetEventFilter;

    "FactoryUpdated(address)"(
      newFactory?: PromiseOrValue<string> | null
    ): FactoryUpdatedEventFilter;
    FactoryUpdated(
      newFactory?: PromiseOrValue<string> | null
    ): FactoryUpdatedEventFilter;

    "FeesUpdated(uint256,uint256)"(
      feeVal2?: null,
      feeVal3?: null
    ): FeesUpdatedEventFilter;
    FeesUpdated(feeVal2?: null, feeVal3?: null): FeesUpdatedEventFilter;

    "FreeClaimState(bytes32,uint8,bool)"(
      _id?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _state?: PromiseOrValue<boolean> | null
    ): FreeClaimStateEventFilter;
    FreeClaimState(
      _id?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _state?: PromiseOrValue<boolean> | null
    ): FreeClaimStateEventFilter;

    "PaymentTokenUpdated(address)"(
      newPaymentToken?: PromiseOrValue<string> | null
    ): PaymentTokenUpdatedEventFilter;
    PaymentTokenUpdated(
      newPaymentToken?: PromiseOrValue<string> | null
    ): PaymentTokenUpdatedEventFilter;

    "PublicMintState(bytes32,uint8,bool)"(
      _id?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _state?: PromiseOrValue<boolean> | null
    ): PublicMintStateEventFilter;
    PublicMintState(
      _id?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _state?: PromiseOrValue<boolean> | null
    ): PublicMintStateEventFilter;

    "RecipientUpdated(address)"(
      newRecipient?: PromiseOrValue<string> | null
    ): RecipientUpdatedEventFilter;
    RecipientUpdated(
      newRecipient?: PromiseOrValue<string> | null
    ): RecipientUpdatedEventFilter;

    "TokenFundsWithdrawn(bytes32,uint8,address)"(
      _id?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _payee?: PromiseOrValue<string> | null
    ): TokenFundsWithdrawnEventFilter;
    TokenFundsWithdrawn(
      _id?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _payee?: PromiseOrValue<string> | null
    ): TokenFundsWithdrawnEventFilter;

    "WhitelistMintState(bytes32,uint8,bool)"(
      _id?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _state?: PromiseOrValue<boolean> | null
    ): WhitelistMintStateEventFilter;
    WhitelistMintState(
      _id?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _state?: PromiseOrValue<boolean> | null
    ): WhitelistMintStateEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
