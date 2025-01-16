import { ethers } from 'hardhat';

async function main() {
  const sft = await ethers.deployContract('SafeToken');

  await sft.waitForDeployment();

  console.log('SFT Contract Deployed at ' + sft.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});