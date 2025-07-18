const hre = require("hardhat");

async function main() {
  const HyperionDataConsumer = await hre.ethers.getContractFactory("HyperionDataConsumer");
  const hyperionDataConsumer = await HyperionDataConsumer.deploy();

  await hyperionDataConsumer.waitForDeployment();

  console.log(
    `HyperionDataConsumer deployed to ${hyperionDataConsumer.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
