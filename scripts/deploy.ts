import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import { config } from "dotenv";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { resolve } from "path";

import { MockERC20 } from "../src/types";

config({ path: resolve(__dirname, "./.env") });

const uniswapRouterAddress = ethers.constants.AddressZero;

const { ERC20_TOKEN } = process.env;
const hre = require("hardhat");

const main = async () => {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with ${deployer.address}`);

  // Deploying with / without ERC20 support
  let erc20Address = ethers.constants.AddressZero;
  if (ERC20_TOKEN == "mock") {
    const ERC20 = await ethers.getContractFactory(
      "MockERC20",
    );
    const erc20 = (await ERC20.deploy(
      BigNumber.from(2).pow(255),
    )) as MockERC20;
    erc20Address = erc20.address;
    console.log(`MockERC20 address: ${erc20Address}`);
  } else if (ERC20_TOKEN) {
    erc20Address = ERC20_TOKEN;
    console.log(`ERC20 address: ${erc20Address}`);
  }

  const MADMarketplace721 = await ethers.getContractFactory(
    "MADMarketplace721",
  );
  const m721 = await MADMarketplace721.deploy(
    deployer.address, // recipient addr
    erc20Address, // ERC20 payment token addr
    uniswapRouterAddress, // Uniswap router
  );

  console.log(`ERC721 Marketplace address: ${m721.address}`);

  /// deploy the libraries and link them
  const SplitterDeployer = await ethers.getContractFactory(
    "SplitterDeployer",
  );

  const ERC1155BasicDeployer =
    await ethers.getContractFactory("ERC1155BasicDeployer");

  const ERC721BasicDeployer = await ethers.getContractFactory(
    "ERC721BasicDeployer",
  );

  const sd = await SplitterDeployer.deploy();
  const bd1155 = await ERC1155BasicDeployer.deploy();
  const bd721 = await ERC721BasicDeployer.deploy();

  const MADFactory721 = await ethers.getContractFactory(
    "MADFactory721",
    {
      libraries: {
        ERC721BasicDeployer: bd721.address,
        SplitterDeployer: sd.address,
      },
    },
  );
  const f721 = await MADFactory721.deploy(
    m721.address, // marketplace addr
    ethers.constants.AddressZero, // router addr
    deployer.address, // lazy signer addr
    erc20Address,
  );
  console.log(`ERC721 Factory address: ${f721.address}`);

  const MADRouter721 = await ethers.getContractFactory(
    "MADRouter721",
  );

  const r721 = await MADRouter721.deploy(
    f721.address,
    erc20Address,
    deployer.address, // public mint fee address
    1, // max mint
    1, // max burn
  );
  console.log(`ERC721 Router address: ${r721.address}`);

  console.log(`721 Contracts deployed successfully.`);

  const MADMarketplace1155 = await ethers.getContractFactory(
    "MADMarketplace1155",
  );
  const m1155 = await MADMarketplace1155.deploy(
    deployer.address, // recipient addr
    erc20Address, // ERC20 payment token addr
    uniswapRouterAddress, // uniswapRouterAddress
  );

  console.log(
    `ERC1155 Marketplace address: ${m1155.address}`,
  );

  const MADFactory1155 = await ethers.getContractFactory(
    "MADFactory1155",
    {
      libraries: {
        ERC1155BasicDeployer: bd1155.address,
        SplitterDeployer: sd.address,
      },
    },
  );
  const f1155 = await MADFactory1155.deploy(
    m1155.address, // marketplace addr
    ethers.constants.AddressZero, // router addr
    deployer.address, // lazy signer addr
    erc20Address, // ERC20 payment token addr
  );
  console.log(`ERC1155 Factory address: ${f1155.address}`);

  const MADRouter1155 = await ethers.getContractFactory(
    "MADRouter1155",
  );
  const r1155 = await MADRouter1155.deploy(
    f1155.address,
    erc20Address,
    deployer.address, // public mint fee address
    1, // max mint
    1, // max burn
  );
  console.log(`ERC1155 Router address: ${r1155.address}`);

  console.log(`1155 Contracts deployed successfully.`);

  // Verify in Deployment script that the addresses are reverting and throwing and error
  // if they are not matching.
  await m721.connect(deployer).setFactory(f721.address);
  await f721.connect(deployer).setRouter(r721.address);

  await m1155.connect(deployer).setFactory(f1155.address);
  await f1155.connect(deployer).setRouter(r1155.address);
};

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.log(error);
    process.exit(1);
  });
