/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../../common";
import type {
  MockERC1155,
  MockERC1155Interface,
} from "../../../../lib/test/erc1155-mock.sol/MockERC1155";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccountBalanceOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "ArrayLengthsMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "NotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC1155ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isApproved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
    ],
    name: "batchMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "result",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isApproved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461008a57331561005857600080546001600160a01b031916339081178255604051917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768180a3610f2590816100908239f35b62461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b600080fdfe6080806040526004908136101561001557600080fd5b60003560e01c908162fdd58e14610cc85750806301ffc9a714610bf75780630ca83480146109db5780630e89341c1461095f57806313af40351461088e578063156e29f61461072b5780632eb2c2d61461046e5780634e1273f41461037a5780638da5cb5b14610346578063a22cb465146102c0578063e985e9c5146102795763f242432a146100a457600080fd5b346102745760a0600319360112610274576100bd610d03565b6100c5610d26565b604435916064359060843567ffffffffffffffff8111610274576100ec9036908701610e5c565b9091679a31110384e0b0c99060601b81179460601b179160209480865260601c938360601c93853303610259575b841561024c57876000526040600020805480841161023f5783900390558652604060002080549082820191821061023257558086528385337fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6260406000a4833b61018057005b60405196879563f23a6e618752338888015260408701526060860152608085015260a0808501527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828601910160c085013760c401906000601c8401915af11561021a575b517f0dc5919f000000000000000000000000000000000000000000000000000000000161020e57005b639c05499b600052601cfd5b3d61022857600081526101e5565b3d6000803e3d6000fd5b896301336cea600052601cfd5b8a63f4d678b8600052601cfd5b8863ea553b34600052601cfd5b336000526034600c205461011a5788634b6e7f18600052601cfd5b600080fd5b3461027457604060031936011261027457610292610d03565b61029a610d26565b9060601b679a31110384e0b0c91760205260005260206034600c20546040519015158152f35b34610274576040600319360112610274576102d9610d03565b602435908115158092036102745773ffffffffffffffffffffffffffffffffffffffff16903360601b679a31110384e0b0c91760205281600052806034600c2055600052337f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160206000a3005b3461027457600060031936011261027457602073ffffffffffffffffffffffffffffffffffffffff60005416604051908152f35b50346102745760406003193601126102745767ffffffffffffffff8135818111610274576103ab9036908401610e2b565b929091602435908111610274576103c59036908301610e2b565b9190938203610462575091906040519280845260051b602092838583010160405260005b8281036104345785856040519181839283018184528251809152816040850193019160005b82811061041d57505050500390f35b83518552869550938101939281019260010161040e565b679a31110384e0b0c98482013560601b178552818101356000908152604090205486820186015284016103e9565b633b800a46600052601cfd5b50346102745760a060031936011261027457610488610d03565b610490610d26565b67ffffffffffffffff91604435838111610274576104b19036908601610e2b565b91606435858111610274576104c99036908801610e2b565b929095608435908111610274576104e39036908901610e5c565b919084860361071e57679a31110384e0b0c9948460601b86176020528760601b861760601c15610711578460601b861760601c33036106f6575b60005b8760051b810361068b5750604051966040885260051b9687602001997fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0809501988b8a60408501376060810160208401528083019360051b938685602001930193838560608401378c60601b8b1760601c917f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8b60601b8d1760601c926080818a339501030190a48a60601b891760601c3b6105d857005b83916040519c8d9b8c9a63bc197c818c523360208d015260601b8c1760601c60408c015260608b0160a0905260c08b013760c0820160808a01528189019360e08501370160e00160a0870152019183602001910161010083013701036101040190601c83019360601b1760601c925a602094600091f11561067d575b517f43e6837f000000000000000000000000000000000000000000000000000000000161020e57005b3d6102285760008152610654565b8560601b8717602052808401356000526040600020805480838d0135116106e957828c0135900390558860601b87176020526040600020908154818c013581019081106106dc576020925501610520565b8c6301336cea600052601cfd5b8c63f4d678b8600052601cfd5b336000526034600c205461051d5789634b6e7f18600052601cfd5b8963ea553b34600052601cfd5b88633b800a46600052601cfd5b503461027457606060031936011261027457610745610d03565b602435906044359161077073ffffffffffffffffffffffffffffffffffffffff600054163314610e8a565b610778610d49565b916000835260601b679a31110384e0b0c9178060601c9081156108815760205281600052604060002080549085820191821061087457558160005283602052806000337fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62604083a4803b6107e857005b60209260405194859363f23a6e6185523386860152600060408601526060850152608084015260a08084015280518091818060c0870152610861575b505060c401906000601c8401915af11561021a57517f0dc5919f000000000000000000000000000000000000000000000000000000000161020e57005b818660e087019201895afa508038610824565b866301336cea600052601cfd5b8563ea553b34600052601cfd5b5034610274576020600319360112610274576108a8610d03565b73ffffffffffffffffffffffffffffffffffffffff6108cc81600054163314610e8a565b81169182156109015750600055337f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76600080a3005b6064906020604051917f08c379a0000000000000000000000000000000000000000000000000000000008352820152600d60248201527f496e76616c6964206f776e6572000000000000000000000000000000000000006044820152fd5b346102745760208060031936011261027457604051908082528160605191828183015260005b8381106109c55750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f836000604080968601015201168101030190f35b6080810151858201604001528492508101610985565b5034610274576060600319360112610274576109f5610d03565b67ffffffffffffffff919060243583811161027457610a179036908401610d98565b9260443590811161027457610a2f9036908401610d98565b90610a5373ffffffffffffffffffffffffffffffffffffffff600054163314610e8a565b610a5b610d49565b906000825260601b679a31110384e0b0c917938460601c8015610bea57815160051b926000915b82858414610ac557602080940193808289010151918a82528601015160005260406000208054918201918210610ab85755610a82565b886301336cea600052601cfd5b87838689856040519260408452816000825160051b9560209687016040820181868c5afa503d604001878201527f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb3d820191875160051b89018b818a60408701925afa5060408133943d01030190a4813b610b3c57005b60a490604051958694859263bc197c81845233888501526000604085015260a06060850152805160051b8801908160c08601918c5afa5060a03d80820160808601523d8501928b815160051b8b01809260c08701925afa503d010160a08401523d019080518701908160c08401918b5afa503d010301906000601c8401915af11561067d57517f43e6837f000000000000000000000000000000000000000000000000000000000161020e57005b8463ea553b34600052601cfd5b503461027457602060031936011261027457357fffffffff00000000000000000000000000000000000000000000000000000000811680910361027457807f01ffc9a70000000000000000000000000000000000000000000000000000000060209214908115610c9e575b8115610c74575b506040519015158152f35b7f0e89341c0000000000000000000000000000000000000000000000000000000091501438610c69565b7fd9b67a260000000000000000000000000000000000000000000000000000000081149150610c62565b3461027457604060031936011261027457602090610ce4610d03565b60601b679a31110384e0b0c91782526024356000526040600020548152f35b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361027457565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361027457565b604051906020820182811067ffffffffffffffff821117610d6957604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b81601f820112156102745767ffffffffffffffff918135838111610d69578060051b90604051947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f84011686019086821090821117610d695760405284526020928380860192820101928311610274578301905b828210610e1c575050505090565b81358152908301908301610e0e565b9181601f840112156102745782359167ffffffffffffffff8311610274576020808501948460051b01011161027457565b9181601f840112156102745782359167ffffffffffffffff8311610274576020838186019501011161027457565b15610e9157565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a454400000000000000000000000000000000000000006044820152fdfea2646970667358221220318de6af4e87fe0c453b280528a8876c0b6257b2d70edc864d86edafa9bc66eb64736f6c63430008130033";

type MockERC1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC1155__factory extends ContractFactory {
  constructor(...args: MockERC1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockERC1155> {
    return super.deploy(overrides || {}) as Promise<MockERC1155>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockERC1155 {
    return super.attach(address) as MockERC1155;
  }
  override connect(signer: Signer): MockERC1155__factory {
    return super.connect(signer) as MockERC1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC1155Interface {
    return new utils.Interface(_abi) as MockERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC1155 {
    return new Contract(address, _abi, signerOrProvider) as MockERC1155;
  }
}
