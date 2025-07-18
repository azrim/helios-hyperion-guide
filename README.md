# Helios-Hyperion-Guide

This repository provides a basic guide to setting up and interacting with a simple Hardhat project.

## Prerequisites

Make sure you have Node.js and npm installed.

## Setup

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd Helios-Hyperion-Guide
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Compiling Contracts

To compile the Solidity contracts, run:

```bash
npx hardhat compile
```

## Deploying Contracts

To deploy the `SimpleStorage` contract to a local Hardhat network, run:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

This will deploy the contract and print its address.

## Interacting with the Contract (Example)

You can interact with your deployed contract using Hardhat Runtime Environment (HRE) in a Hardhat console.

1.  **Start a Hardhat network (if not already running):**

    ```bash
    npx hardhat node
    ```

2.  **Open a new terminal and connect to the Hardhat console:**

    ```bash
    npx hardhat console --network localhost
    ```

3.  **In the Hardhat console, you can interact with your contract. Replace `YOUR_CONTRACT_ADDRESS` with the address obtained during deployment:**

    ```javascript
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.attach("YOUR_CONTRACT_ADDRESS");

    // Set a value
    await simpleStorage.set(100);
    console.log("Value set to 100");

    // Get the value
    const value = await simpleStorage.get();
    console.log("Stored value:", value.toString());
    ```
