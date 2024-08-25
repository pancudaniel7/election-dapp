
# Voting DApp

## Description

The Voting DApp is designed to provide a secure and decentralized platform for creating proposals and casting votes. The project is built using Solidity and utilizes Hardhat for smart contract development, testing, and deployment. It also leverages Hardhat Ignition for structured deployment scenarios.

## Prerequisites

Before setting up the project, ensure you have the following:

1. **Infura Node Setup**: Create an Infura project to obtain an RPC URL for connecting to the Ethereum network. Follow the steps in the Infura documentation: [Set up Infura Node](https://infura.io/docs).

2. **Metamask Account**: Create a Metamask account to interact with the Ethereum network. Follow the steps in the Metamask documentation: [Create Metamask Account](https://metamask.io/).

3. **Set ETHEREUM_PRIVATE_KEY**: Once you have set up Metamask, export your account's private key and set it as an environment variable in your system.
    ```bash
    export ETHEREUM_PRIVATE_KEY="your_metamask_private_key"
    ```

## Installation

To install the project dependencies, run the following command:

```bash
npm install
```

This will install all required packages and dependencies as defined in `package.json`.

## Deployment

You can deploy the Election module using Hardhat. The module can be deployed either on a local Ethereum network (such as Hardhat's local node) or on the Sepolia testnet.

### Deploy to Local Network

1. Start a local Ethereum node:

    ```bash
    npx hardhat node
    ```

2. In a new terminal, deploy the Election module:

    ```bash
    npx hardhat ignition deploy --module-path ./ignition/modules/Election.ts --network localhost
    ```

### Deploy to Sepolia Testnet

1. Ensure your `.env` file is configured with the Sepolia RPC URL and your Metamask private key:

    ```dotenv
    SEPOLIA_RPC_URL="https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID"
    ETHEREUM_PRIVATE_KEY="your_metamask_private_key"
    ```

2. Deploy the Election module to Sepolia:

    ```bash
    npx hardhat ignition deploy --module-path ./ignition/modules/Election.ts --network sepolia
    ```

## Interacting with the Smart Contracts

After deployment, you can interact with the deployed contracts using the Hardhat console, which provides a powerful command-line interface for interacting directly with your smart contracts. Additionally, you can develop a frontend that connects to the contracts via Web3.js or Ethers.js.

### Using Hardhat Console

To use the Hardhat console, run the following command:

```bash
npx hardhat console --network sepolia
```

## License

This project is licensed under the MIT License.
