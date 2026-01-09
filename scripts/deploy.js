const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying with account:", deployer.address);

  const ExceptionExample = await ethers.getContractFactory("ExceptionExample", deployer);

  const exceptionExample = await ExceptionExample.deploy();

  await exceptionExample.waitForDeployment();

  const contractAddress = await exceptionExample.getAddress();

  console.log("ExceptionExample deployed to:", contractAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

