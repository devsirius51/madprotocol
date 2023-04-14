/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../../../common";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  Signer,
  utils,
} from "ethers";

export interface ERC1155BasicEventsAndErrorsInterface extends utils.Interface {
  functions: {};

  events: {
    "BaseURILocked(string)": EventFragment;
    "BaseURISet(string)": EventFragment;
    "PublicMintStateSet(bool)": EventFragment;
    "RoyaltyFeeSet(uint256)": EventFragment;
    "RoyaltyRecipientSet(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BaseURILocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BaseURISet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PublicMintStateSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoyaltyFeeSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoyaltyRecipientSet"): EventFragment;
}

export interface BaseURILockedEventObject {
  baseURI: string;
}
export type BaseURILockedEvent = TypedEvent<[string], BaseURILockedEventObject>;

export type BaseURILockedEventFilter = TypedEventFilter<BaseURILockedEvent>;

export interface BaseURISetEventObject {
  newBaseURI: string;
}
export type BaseURISetEvent = TypedEvent<[string], BaseURISetEventObject>;

export type BaseURISetEventFilter = TypedEventFilter<BaseURISetEvent>;

export interface PublicMintStateSetEventObject {
  newPublicState: boolean;
}
export type PublicMintStateSetEvent = TypedEvent<
  [boolean],
  PublicMintStateSetEventObject
>;

export type PublicMintStateSetEventFilter =
  TypedEventFilter<PublicMintStateSetEvent>;

export interface RoyaltyFeeSetEventObject {
  newRoyaltyFee: BigNumber;
}
export type RoyaltyFeeSetEvent = TypedEvent<
  [BigNumber],
  RoyaltyFeeSetEventObject
>;

export type RoyaltyFeeSetEventFilter = TypedEventFilter<RoyaltyFeeSetEvent>;

export interface RoyaltyRecipientSetEventObject {
  newRecipient: string;
}
export type RoyaltyRecipientSetEvent = TypedEvent<
  [string],
  RoyaltyRecipientSetEventObject
>;

export type RoyaltyRecipientSetEventFilter =
  TypedEventFilter<RoyaltyRecipientSetEvent>;

export interface ERC1155BasicEventsAndErrors extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC1155BasicEventsAndErrorsInterface;

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
    "BaseURILocked(string)"(
      baseURI?: PromiseOrValue<string> | null
    ): BaseURILockedEventFilter;
    BaseURILocked(
      baseURI?: PromiseOrValue<string> | null
    ): BaseURILockedEventFilter;

    "BaseURISet(string)"(
      newBaseURI?: PromiseOrValue<string> | null
    ): BaseURISetEventFilter;
    BaseURISet(
      newBaseURI?: PromiseOrValue<string> | null
    ): BaseURISetEventFilter;

    "PublicMintStateSet(bool)"(
      newPublicState?: PromiseOrValue<boolean> | null
    ): PublicMintStateSetEventFilter;
    PublicMintStateSet(
      newPublicState?: PromiseOrValue<boolean> | null
    ): PublicMintStateSetEventFilter;

    "RoyaltyFeeSet(uint256)"(
      newRoyaltyFee?: PromiseOrValue<BigNumberish> | null
    ): RoyaltyFeeSetEventFilter;
    RoyaltyFeeSet(
      newRoyaltyFee?: PromiseOrValue<BigNumberish> | null
    ): RoyaltyFeeSetEventFilter;

    "RoyaltyRecipientSet(address)"(
      newRecipient?: PromiseOrValue<string> | null
    ): RoyaltyRecipientSetEventFilter;
    RoyaltyRecipientSet(
      newRecipient?: PromiseOrValue<string> | null
    ): RoyaltyRecipientSetEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
