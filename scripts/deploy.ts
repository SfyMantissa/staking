import { ethers } from "hardhat";
import config from '../config';

const main = async () => {
  const Staking = await ethers.getContractFactory("Staking");
  const staking = await Staking.deploy(
    config.LIQUIDITY_TOKEN_ADDRESS,
    config.TOKEN0_ADDRESS,
    20,
    1,
    1
  );
  await staking.deployed();
  console.log("Staking deployed to:", staking.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
