/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "FeeHandlerFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FeeHandlerFactory__factory>;
    getContractFactory(
      name: "MADFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MADFactory__factory>;
    getContractFactory(
      name: "MADFactoryBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MADFactoryBase__factory>;
    getContractFactory(
      name: "FactoryVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FactoryVerifier__factory>;
    getContractFactory(
      name: "Owned",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Owned__factory>;
    getContractFactory(
      name: "TwoFactor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TwoFactor__factory>;
    getContractFactory(
      name: "ERC2981",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC2981__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "ERC1155Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Holder__factory>;
    getContractFactory(
      name: "ERC1155TokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155TokenReceiver__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "MockERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "ERC721Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Holder__factory>;
    getContractFactory(
      name: "ERC721TokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721TokenReceiver__factory>;
    getContractFactory(
      name: "SafeTransferLib",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeTransferLib__factory>;
    getContractFactory(
      name: "MAD",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MAD__factory>;
    getContractFactory(
      name: "ImplBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ImplBase__factory>;
    getContractFactory(
      name: "ImplBaseEventsAndErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ImplBaseEventsAndErrors__factory>;
    getContractFactory(
      name: "PaymentManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PaymentManager__factory>;
    getContractFactory(
      name: "ERC1155Basic",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Basic__factory>;
    getContractFactory(
      name: "ERC721Basic",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Basic__factory>;
    getContractFactory(
      name: "FeeHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FeeHandler__factory>;
    getContractFactory(
      name: "MADRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MADRouter__factory>;
    getContractFactory(
      name: "IOwned",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwned__factory>;
    getContractFactory(
      name: "MADRouterBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MADRouterBase__factory>;
    getContractFactory(
      name: "EventsAndErrorsBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EventsAndErrorsBase__factory>;
    getContractFactory(
      name: "FactoryEventsAndErrorsBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FactoryEventsAndErrorsBase__factory>;
    getContractFactory(
      name: "RouterEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RouterEvents__factory>;
    getContractFactory(
      name: "MADBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MADBase__factory>;
    getContractFactory(
      name: "SimpleTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimpleTest__factory>;
    getContractFactory(
      name: "SplitterEventsAndErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SplitterEventsAndErrors__factory>;
    getContractFactory(
      name: "SplitterImpl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SplitterImpl__factory>;

    getContractAt(
      name: "FeeHandlerFactory",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.FeeHandlerFactory>;
    getContractAt(
      name: "MADFactory",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MADFactory>;
    getContractAt(
      name: "MADFactoryBase",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MADFactoryBase>;
    getContractAt(
      name: "FactoryVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.FactoryVerifier>;
    getContractAt(
      name: "Owned",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Owned>;
    getContractAt(
      name: "TwoFactor",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.TwoFactor>;
    getContractAt(
      name: "ERC2981",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC2981>;
    getContractAt(
      name: "ERC1155",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "IERC1155",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "ERC1155Holder",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Holder>;
    getContractAt(
      name: "ERC1155TokenReceiver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155TokenReceiver>;
    getContractAt(
      name: "ERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "MockERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MockERC20>;
    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "ERC721Holder",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Holder>;
    getContractAt(
      name: "ERC721TokenReceiver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721TokenReceiver>;
    getContractAt(
      name: "SafeTransferLib",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.SafeTransferLib>;
    getContractAt(
      name: "MAD",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MAD>;
    getContractAt(
      name: "ImplBase",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ImplBase>;
    getContractAt(
      name: "ImplBaseEventsAndErrors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ImplBaseEventsAndErrors>;
    getContractAt(
      name: "PaymentManager",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.PaymentManager>;
    getContractAt(
      name: "ERC1155Basic",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Basic>;
    getContractAt(
      name: "ERC721Basic",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Basic>;
    getContractAt(
      name: "FeeHandler",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.FeeHandler>;
    getContractAt(
      name: "MADRouter",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MADRouter>;
    getContractAt(
      name: "IOwned",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwned>;
    getContractAt(
      name: "MADRouterBase",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MADRouterBase>;
    getContractAt(
      name: "EventsAndErrorsBase",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.EventsAndErrorsBase>;
    getContractAt(
      name: "FactoryEventsAndErrorsBase",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.FactoryEventsAndErrorsBase>;
    getContractAt(
      name: "RouterEvents",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.RouterEvents>;
    getContractAt(
      name: "MADBase",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MADBase>;
    getContractAt(
      name: "SimpleTest",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.SimpleTest>;
    getContractAt(
      name: "SplitterEventsAndErrors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.SplitterEventsAndErrors>;
    getContractAt(
      name: "SplitterImpl",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.SplitterImpl>;

    deployContract(
      name: "FeeHandlerFactory",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FeeHandlerFactory>;
    deployContract(
      name: "MADFactory",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MADFactory>;
    deployContract(
      name: "MADFactoryBase",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MADFactoryBase>;
    deployContract(
      name: "FactoryVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FactoryVerifier>;
    deployContract(
      name: "Owned",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Owned>;
    deployContract(
      name: "TwoFactor",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.TwoFactor>;
    deployContract(
      name: "ERC2981",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC2981>;
    deployContract(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC1155>;
    deployContract(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155>;
    deployContract(
      name: "ERC1155Holder",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC1155Holder>;
    deployContract(
      name: "ERC1155TokenReceiver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC1155TokenReceiver>;
    deployContract(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "MockERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockERC20>;
    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721>;
    deployContract(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721>;
    deployContract(
      name: "ERC721Holder",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721Holder>;
    deployContract(
      name: "ERC721TokenReceiver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721TokenReceiver>;
    deployContract(
      name: "SafeTransferLib",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SafeTransferLib>;
    deployContract(
      name: "MAD",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MAD>;
    deployContract(
      name: "ImplBase",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ImplBase>;
    deployContract(
      name: "ImplBaseEventsAndErrors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ImplBaseEventsAndErrors>;
    deployContract(
      name: "PaymentManager",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PaymentManager>;
    deployContract(
      name: "ERC1155Basic",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC1155Basic>;
    deployContract(
      name: "ERC721Basic",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721Basic>;
    deployContract(
      name: "FeeHandler",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FeeHandler>;
    deployContract(
      name: "MADRouter",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MADRouter>;
    deployContract(
      name: "IOwned",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IOwned>;
    deployContract(
      name: "MADRouterBase",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MADRouterBase>;
    deployContract(
      name: "EventsAndErrorsBase",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.EventsAndErrorsBase>;
    deployContract(
      name: "FactoryEventsAndErrorsBase",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FactoryEventsAndErrorsBase>;
    deployContract(
      name: "RouterEvents",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.RouterEvents>;
    deployContract(
      name: "MADBase",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MADBase>;
    deployContract(
      name: "SimpleTest",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SimpleTest>;
    deployContract(
      name: "SplitterEventsAndErrors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SplitterEventsAndErrors>;
    deployContract(
      name: "SplitterImpl",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SplitterImpl>;

    deployContract(
      name: "FeeHandlerFactory",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FeeHandlerFactory>;
    deployContract(
      name: "MADFactory",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MADFactory>;
    deployContract(
      name: "MADFactoryBase",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MADFactoryBase>;
    deployContract(
      name: "FactoryVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FactoryVerifier>;
    deployContract(
      name: "Owned",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Owned>;
    deployContract(
      name: "TwoFactor",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.TwoFactor>;
    deployContract(
      name: "ERC2981",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC2981>;
    deployContract(
      name: "ERC1155",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC1155>;
    deployContract(
      name: "IERC1155",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155>;
    deployContract(
      name: "ERC1155Holder",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC1155Holder>;
    deployContract(
      name: "ERC1155TokenReceiver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC1155TokenReceiver>;
    deployContract(
      name: "ERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "MockERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockERC20>;
    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "ERC721",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721>;
    deployContract(
      name: "IERC721",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721>;
    deployContract(
      name: "ERC721Holder",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721Holder>;
    deployContract(
      name: "ERC721TokenReceiver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721TokenReceiver>;
    deployContract(
      name: "SafeTransferLib",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SafeTransferLib>;
    deployContract(
      name: "MAD",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MAD>;
    deployContract(
      name: "ImplBase",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ImplBase>;
    deployContract(
      name: "ImplBaseEventsAndErrors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ImplBaseEventsAndErrors>;
    deployContract(
      name: "PaymentManager",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PaymentManager>;
    deployContract(
      name: "ERC1155Basic",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC1155Basic>;
    deployContract(
      name: "ERC721Basic",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721Basic>;
    deployContract(
      name: "FeeHandler",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FeeHandler>;
    deployContract(
      name: "MADRouter",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MADRouter>;
    deployContract(
      name: "IOwned",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IOwned>;
    deployContract(
      name: "MADRouterBase",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MADRouterBase>;
    deployContract(
      name: "EventsAndErrorsBase",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.EventsAndErrorsBase>;
    deployContract(
      name: "FactoryEventsAndErrorsBase",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FactoryEventsAndErrorsBase>;
    deployContract(
      name: "RouterEvents",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.RouterEvents>;
    deployContract(
      name: "MADBase",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MADBase>;
    deployContract(
      name: "SimpleTest",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SimpleTest>;
    deployContract(
      name: "SplitterEventsAndErrors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SplitterEventsAndErrors>;
    deployContract(
      name: "SplitterImpl",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SplitterImpl>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
