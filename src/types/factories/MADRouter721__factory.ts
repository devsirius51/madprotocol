/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MADRouter721, MADRouter721Interface } from "../MADRouter721";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract FactoryVerifier",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_paymentTokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
    ],
    name: "BaseURI",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "burnFees",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mintFees",
        type: "uint256",
      },
    ],
    name: "FeesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "FreeClaimState",
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPaymentToken",
        type: "address",
      },
    ],
    name: "PaymentTokenUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "PublicMintState",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_payee",
        type: "address",
      },
    ],
    name: "TokenFundsWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "WhitelistMintState",
    type: "event",
  },
  {
    inputs: [],
    name: "MADFactory721",
    outputs: [
      {
        internalType: "contract FactoryVerifier",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "basicMintTo",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "creatorMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "erc20",
    outputs: [
      {
        internalType: "contract ERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeBurn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "sigHash",
        type: "bytes4",
      },
    ],
    name: "feeLookup",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
        internalType: "uint256",
        name: "_freeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxFree",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_claimRoot",
        type: "bytes32",
      },
    ],
    name: "freeSettings",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address[]",
        name: "_addresses",
        type: "address[]",
      },
    ],
    name: "gift",
    outputs: [],
    stateMutability: "payable",
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
        name: "_to",
        type: "address",
      },
    ],
    name: "minimalSafeMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paymentTokenAddress",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
    ],
    name: "setBase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feeMint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_feeBurn",
        type: "uint256",
      },
    ],
    name: "setFees",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
      {
        internalType: "uint8",
        name: "_stateType",
        type: "uint8",
      },
    ],
    name: "setMintState",
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
        internalType: "address",
        name: "_paymentTokenAddress",
        type: "address",
      },
    ],
    name: "setPaymentToken",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_signer",
        type: "address",
      },
    ],
    name: "setSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_supply",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "whitelistSettings",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "contract ERC20",
        name: "_erc20",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600180556703782dace9d9000060035560006004553480156200002657600080fd5b50604051620028b8380380620028b88339810160408190526200004991620001e1565b600080546001600160a01b031916339081178255604051909182917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76908290a3506000805460ff60a01b19169055600280546001600160a01b0319166001600160a01b0384811691909117909155811615620000ca57620000ca81620000d2565b505062000220565b6000546001600160a01b03163314620001215760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064015b60405180910390fd5b6001600160a01b038116620001795760405162461bcd60e51b815260206004820152601560248201527f496e76616c696420746f6b656e20616464726573730000000000000000000000604482015260640162000118565b6005819055600680546001600160a01b0319166001600160a01b0383169081179091556040517fbd4032c1c91da2791730ea1bbc82c6b6f857da7c0a8318143d19ef74e62cd91390600090a250565b6001600160a01b0381168114620001de57600080fd5b50565b60008060408385031215620001f557600080fd5b82516200020281620001c8565b60208401519092506200021581620001c8565b809150509250929050565b61268880620002306000396000f3fe6080604052600436106101965760003560e01c806367b5a642116100e1578063ab9acd571161008a578063cab2e41f11610064578063cab2e41f1461040d578063d44619e31461042d578063edc9e7a41461044d578063f940e3851461046d57600080fd5b8063ab9acd57146103ba578063afb18fe7146103da578063ba36b92d146103fa57600080fd5b80638456cb59116100bb5780638456cb59146103655780638da5cb5b1461037a578063a123c38d1461039a57600080fd5b806367b5a642146102fa5780636a326ab11461030d578063785e9e861461032d57600080fd5b806342a4275211610143578063583fef341161011d578063583fef3414610296578063586ba782146102ba5780635c975abb146102d057600080fd5b806342a42752146102505780634328bd0014610263578063490f70271461028357600080fd5b806317f9fad11161017457806317f9fad114610208578063182ee485146102285780633f4ba83a1461023b57600080fd5b806306fdde031461019b5780630b78f9c0146101c657806313af4035146101e8575b600080fd5b3480156101a757600080fd5b506101b061048d565b6040516101bd91906120f8565b60405180910390f35b3480156101d257600080fd5b506101e66101e136600461212b565b6104a4565b005b3480156101f457600080fd5b506101e6610203366004612165565b6105a5565b34801561021457600080fd5b506101e6610223366004612189565b610672565b6101e66102363660046121c2565b610762565b34801561024757600080fd5b506101e66108aa565b6101e661025e366004612189565b6108fd565b34801561026f57600080fd5b506101e661027e366004612235565b610a86565b6101e66102913660046122dd565b610c44565b3480156102a257600080fd5b506102ac60045481565b6040519081526020016101bd565b3480156102c657600080fd5b506102ac60035481565b3480156102dc57600080fd5b50600054600160a01b900460ff1660405190151581526020016101bd565b6101e661030836600461231e565b610e10565b34801561031957600080fd5b506101e6610328366004612165565b610ee2565b34801561033957600080fd5b5060065461034d906001600160a01b031681565b6040516001600160a01b0390911681526020016101bd565b34801561037157600080fd5b506101e6610fe8565b34801561038657600080fd5b5060005461034d906001600160a01b031681565b3480156103a657600080fd5b506101e66103b53660046123a6565b611039565b3480156103c657600080fd5b506101e66103d53660046123fe565b61114e565b3480156103e657600080fd5b5060055461034d906001600160a01b031681565b6101e6610408366004612449565b61131b565b34801561041957600080fd5b506101e66104283660046123a6565b611471565b34801561043957600080fd5b5060025461034d906001600160a01b031681565b34801561045957600080fd5b506102ac610468366004612504565b61154c565b34801561047957600080fd5b506101e6610488366004612189565b611582565b6060602080526606726f7574657260465260606020f35b6000546001600160a01b031633146104f25760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064015b60405180910390fd5b6802b5e3af16b18800008210801561051257506802b5e3af16b188000081105b61055e5760405162461bcd60e51b815260206004820152600c60248201527f496e76616c69642046656573000000000000000000000000000000000000000060448201526064016104e9565b6004819055600382905560408051838152602081018390527f5c6323bf1c2d7aaea2c091a4751c1c87af7f2864650c336507a77d0557af37a1910160405180910390a15050565b6000546001600160a01b031633146105ee5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016104e9565b6001600160a01b0381166106365760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016104e9565b60008181556040516001600160a01b0383169133917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d769190a350565b6000546001600160a01b031633146106bb5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016104e9565b6001600160a01b0381166107035760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016104e9565b604051636c19e78360e01b81526001600160a01b038281166004830152831690636c19e78390602401600060405180830381600087803b15801561074657600080fd5b505af115801561075a573d6000803e3d6000fd5b505050505050565b6001546001146107a15760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff16156107e95760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b60006107f483611d0c565b9150508060ff1660020361086a576040516369fd0e0b60e01b8152600481018390523360248201526001600160a01b038416906369fd0e0b9034906044015b6000604051808303818588803b15801561084c57600080fd5b505af1158015610860573d6000803e3d6000fd5b50505050506108a1565b60405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b60448201526064016104e9565b50506001805550565b6000546001600160a01b031633146108f35760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016104e9565b6108fb611e61565b565b60015460011461093c5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff16156109845760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b600061098f83611d0c565b91505060ff8116156109d25760405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b60448201526064016104e9565b6006546001600160a01b031615610a1957604051633966bb8360e21b81526001600160a01b03838116600483015233602483015284169063e59aee0c903490604401610833565b604051633966bb8360e21b81526001600160a01b03838116600483015233602483015284169063e59aee0c9034906044015b6000604051808303818588803b158015610a6457600080fd5b505af1158015610a78573d6000803e3d6000fd5b505050505050506001805550565b600154600114610ac55760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff1615610b0d5760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b600080610b1984611d0c565b915091508060ff16600103610bcb576040516355f804b360e01b81526001600160a01b038516906355f804b390610b549086906004016120f8565b600060405180830381600087803b158015610b6e57600080fd5b505af1158015610b82573d6000803e3d6000fd5b5050505082604051610b949190612546565b6040519081900381209083907f6f8750bee7bd7661be202812d7503ffaf307fb27b6d6a954a1989fdcd156bfb790600090a3610c3a565b8060ff16600203610c02576040516355f804b360e01b81526001600160a01b038516906355f804b390610b549086906004016120f8565b60028160ff16111561086a576040516355f804b360e01b81526001600160a01b038516906355f804b390610b549086906004016120f8565b5050600180555050565b600154600114610c835760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff1615610ccb5760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b6000610cd684611d0c565b9150508060ff16600114610d1b5760405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b60448201526064016104e9565b6006546001600160a01b031615610d9c5760405163438b1b4b60e01b81526001600160a01b0384811660048301526024820184905233604483015285169063438b1b4b9034906064015b6000604051808303818588803b158015610d7e57600080fd5b505af1158015610d92573d6000803e3d6000fd5b5050505050610c3a565b60405163438b1b4b60e01b81526001600160a01b0384811660048301526024820184905233604483015285169063438b1b4b9034906064016000604051808303818588803b158015610ded57600080fd5b505af1158015610e01573d6000803e3d6000fd5b50505050505050600180555050565b600154600114610e4f5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff1615610e975760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b6000610ea284611d0c565b9150508060ff1660020361086a576040516369eff00560e01b81526001600160a01b038516906369eff005903490610d6590879087903390600401612562565b6000546001600160a01b03163314610f2b5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016104e9565b6001600160a01b038116610f815760405162461bcd60e51b815260206004820152601560248201527f496e76616c696420746f6b656e2061646472657373000000000000000000000060448201526064016104e9565b6005819055600680547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556040517fbd4032c1c91da2791730ea1bbc82c6b6f857da7c0a8318143d19ef74e62cd91390600090a250565b6000546001600160a01b031633146110315760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016104e9565b6108fb611efd565b6001546001146110785760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff16156110c05760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b60006110cb85611d0c565b9150508060ff1660020361086a576040516386997e7d60e01b81526004810185905260248101849052604481018390526001600160a01b038616906386997e7d906064015b600060405180830381600087803b15801561112a57600080fd5b505af115801561113e573d6000803e3d6000fd5b505050505b505060018055505050565b60015460011461118d5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff16156111d55760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b60038160ff16106112175760405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b60448201526064016104e9565b60008061122385611d0c565b9150915060018360ff1610156112775761123e818686611f83565b8315158160ff16837f0c2bd698c33cf5bea165c8a607bdd7c7d806b8b10284bfcd5b6899674b5a486d60405160405180910390a4611143565b8260ff166001036112c65761128d818686612062565b8315158160ff16837f8fb26c046352958e1f6b6a24432925f21e52878afea867b4b642e5d07c6abf0f60405160405180910390a4611143565b8260ff16600203611143576112dc81868661209b565b8315158160ff16837fcaca6c2e85f8f4d6f254385762b7a5baec7c68441678ee0a9b1ea8bb4b05bf0b60405160405180910390a4505060018055505050565b60015460011461135a5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff16156113a25760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b60006113ad83611d0c565b91505060018160ff1610611443578060ff16600114611413578060ff166002146114135760028160ff16116114135760405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b60448201526064016104e9565b60405163362c0cb560e01b81526001600160a01b0384169063362c0cb590349061083390869033906004016125c2565b60405163226bf2d160e21b81523360048201526001600160a01b038416906389afcb44903490602401610a4b565b6001546001146114b05760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff16156114f85760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b600061150385611d0c565b9150508060ff1660020361086a576040516313e0c8c360e11b81526004810185905260248101849052604481018390526001600160a01b038616906327c1918690606401611110565b6000816340d097c360e01b0361156457505060035490565b8163044df8e760e41b0361157a57505060045490565b506000919050565b6001546001146115c15760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104e9565b6002600155600054600160a01b900460ff16156116095760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b60008061161584611d0c565b9150915060018160ff1610156117d4576001600160a01b038316158015906116a557506040516370a0823160e01b81526001600160a01b0385811660048301528416906370a0823190602401602060405180830381865afa15801561167e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a29190612616565b15155b61174657836001600160a01b0316316000036116ee5760405162461bcd60e51b81526020600482015260086024820152674e4f5f46554e445360c01b60448201526064016104e9565b836001600160a01b0316633ccfd60b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561172957600080fd5b505af115801561173d573d6000803e3d6000fd5b505050506117a1565b604051627a79d960e91b81526001600160a01b03848116600483015285169063f4f3b20090602401600060405180830381600087803b15801561178857600080fd5b505af115801561179c573d6000803e3d6000fd5b505050505b604051339060ff83169084907ff15624beb70c8e7a7515ad5f81ee4c24dba144c4ef1b258f8075e1a519b1a5a190600090a45b8060ff1660010361198e576001600160a01b0383161580159061185f57506040516370a0823160e01b81526001600160a01b0385811660048301528416906370a0823190602401602060405180830381865afa158015611838573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061185c9190612616565b15155b61190057836001600160a01b0316316000036118a85760405162461bcd60e51b81526020600482015260086024820152674e4f5f46554e445360c01b60448201526064016104e9565b836001600160a01b0316633ccfd60b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156118e357600080fd5b505af11580156118f7573d6000803e3d6000fd5b5050505061195b565b604051627a79d960e91b81526001600160a01b03848116600483015285169063f4f3b20090602401600060405180830381600087803b15801561194257600080fd5b505af1158015611956573d6000803e3d6000fd5b505050505b604051339060ff83169084907ff15624beb70c8e7a7515ad5f81ee4c24dba144c4ef1b258f8075e1a519b1a5a190600090a45b8060ff16600203611b48576001600160a01b03831615801590611a1957506040516370a0823160e01b81526001600160a01b0385811660048301528416906370a0823190602401602060405180830381865afa1580156119f2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a169190612616565b15155b611aba57836001600160a01b031631600003611a625760405162461bcd60e51b81526020600482015260086024820152674e4f5f46554e445360c01b60448201526064016104e9565b836001600160a01b0316633ccfd60b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611a9d57600080fd5b505af1158015611ab1573d6000803e3d6000fd5b50505050611b15565b604051627a79d960e91b81526001600160a01b03848116600483015285169063f4f3b20090602401600060405180830381600087803b158015611afc57600080fd5b505af1158015611b10573d6000803e3d6000fd5b505050505b604051339060ff83169084907ff15624beb70c8e7a7515ad5f81ee4c24dba144c4ef1b258f8075e1a519b1a5a190600090a45b60028160ff161115610c3a576001600160a01b03831615801590611bd457506040516370a0823160e01b81526001600160a01b0385811660048301528416906370a0823190602401602060405180830381865afa158015611bad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bd19190612616565b15155b611c7557836001600160a01b031631600003611c1d5760405162461bcd60e51b81526020600482015260086024820152674e4f5f46554e445360c01b60448201526064016104e9565b836001600160a01b0316633ccfd60b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611c5857600080fd5b505af1158015611c6c573d6000803e3d6000fd5b50505050611cd0565b604051627a79d960e91b81526001600160a01b03848116600483015285169063f4f3b20090602401600060405180830381600087803b158015611cb757600080fd5b505af1158015611ccb573d6000803e3d6000fd5b505050505b604051339060ff83169084907ff15624beb70c8e7a7515ad5f81ee4c24dba144c4ef1b258f8075e1a519b1a5a190600090a45050600180555050565b60025460405163617d1d3b60e01b81526001600160a01b038381166004830152600092839291169063617d1d3b90602401602060405180830381865afa158015611d5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d7e9190612616565b60025460405163b64bd5eb60e01b8152600481018390529193506001600160a01b03169063b64bd5eb906024016040805180830381865afa158015611dc7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611deb919061262f565b505060025460405163d93cb8fd60e01b8152600481018490526001600160a01b039091169063d93cb8fd90602401602060405180830381865afa158015611e36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e5a919061265e565b9050915091565b600054600160a01b900460ff16611eba5760405162461bcd60e51b815260206004820152600860248201527f554e50415553454400000000000000000000000000000000000000000000000060448201526064016104e9565b6000805460ff60a01b191690556040513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa906020015b60405180910390a1565b600054600160a01b900460ff1615611f405760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104e9565b6000805460ff60a01b1916600160a01b1790556040513381527f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25890602001611ef3565b60018360ff161015611ff05760405163879fbedf60e01b815281151560048201526001600160a01b0383169063879fbedf906024015b600060405180830381600087803b158015611fd357600080fd5b505af1158015611fe7573d6000803e3d6000fd5b50505050505050565b8260ff166001036120295760405163879fbedf60e01b815281151560048201526001600160a01b0383169063879fbedf90602401611fb9565b8260ff1660020361086a5760405163879fbedf60e01b815281151560048201526001600160a01b0383169063879fbedf90602401611fb9565b8260ff1660020361086a576040516331a9da3d60e21b815281151560048201526001600160a01b0383169063c6a768f490602401611fb9565b8260ff1660020361086a57604051637e62f3b360e01b815281151560048201526001600160a01b03831690637e62f3b390602401611fb9565b60005b838110156120ef5781810151838201526020016120d7565b50506000910152565b60208152600082518060208401526121178160408501602087016120d4565b601f01601f19169190910160400192915050565b6000806040838503121561213e57600080fd5b50508035926020909101359150565b6001600160a01b038116811461216257600080fd5b50565b60006020828403121561217757600080fd5b81356121828161214d565b9392505050565b6000806040838503121561219c57600080fd5b82356121a78161214d565b915060208301356121b78161214d565b809150509250929050565b600080604083850312156121d557600080fd5b82356121e08161214d565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561222d5761222d6121ee565b604052919050565b6000806040838503121561224857600080fd5b82356122538161214d565b915060208381013567ffffffffffffffff8082111561227157600080fd5b818601915086601f83011261228557600080fd5b813581811115612297576122976121ee565b6122a9601f8201601f19168501612204565b915080825287848285010111156122bf57600080fd5b80848401858401376000848284010152508093505050509250929050565b6000806000606084860312156122f257600080fd5b83356122fd8161214d565b9250602084013561230d8161214d565b929592945050506040919091013590565b60008060006040848603121561233357600080fd5b833561233e8161214d565b9250602084013567ffffffffffffffff8082111561235b57600080fd5b818601915086601f83011261236f57600080fd5b81358181111561237e57600080fd5b8760208260051b850101111561239357600080fd5b6020830194508093505050509250925092565b600080600080608085870312156123bc57600080fd5b84356123c78161214d565b966020860135965060408601359560600135945092505050565b801515811461216257600080fd5b60ff8116811461216257600080fd5b60008060006060848603121561241357600080fd5b833561241e8161214d565b9250602084013561242e816123e1565b9150604084013561243e816123ef565b809150509250925092565b6000806040838503121561245c57600080fd5b82356124678161214d565b915060208381013567ffffffffffffffff8082111561248557600080fd5b818601915086601f83011261249957600080fd5b8135818111156124ab576124ab6121ee565b8060051b91506124bc848301612204565b81815291830184019184810190898411156124d657600080fd5b938501935b838510156124f4578435825293850193908501906124db565b8096505050505050509250929050565b60006020828403121561251657600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461218257600080fd5b600082516125588184602087016120d4565b9190910192915050565b6040808252810183905260008460608301825b868110156125a55782356125888161214d565b6001600160a01b0316825260209283019290910190600101612575565b5080925050506001600160a01b0383166020830152949350505050565b604080825283519082018190526000906020906060840190828701845b828110156125fb578151845292840192908401906001016125df565b5050506001600160a01b039490941692019190915250919050565b60006020828403121561262857600080fd5b5051919050565b6000806040838503121561264257600080fd5b825161264d8161214d565b60208401519092506121b7816123e1565b60006020828403121561267057600080fd5b8151612182816123ef56fea164736f6c6343000810000a";

type MADRouter721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MADRouter721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MADRouter721__factory extends ContractFactory {
  constructor(...args: MADRouter721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _factory: PromiseOrValue<string>,
    _paymentTokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MADRouter721> {
    return super.deploy(
      _factory,
      _paymentTokenAddress,
      overrides || {}
    ) as Promise<MADRouter721>;
  }
  override getDeployTransaction(
    _factory: PromiseOrValue<string>,
    _paymentTokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _factory,
      _paymentTokenAddress,
      overrides || {}
    );
  }
  override attach(address: string): MADRouter721 {
    return super.attach(address) as MADRouter721;
  }
  override connect(signer: Signer): MADRouter721__factory {
    return super.connect(signer) as MADRouter721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MADRouter721Interface {
    return new utils.Interface(_abi) as MADRouter721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MADRouter721 {
    return new Contract(address, _abi, signerOrProvider) as MADRouter721;
  }
}
