require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const { vars } = require("hardhat/config")

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "",
      accounts: process.env.ETHERUM_PRIVATE_KEY ? [process.env.ETHERUM_PRIVATE_KEY] : [],
    },
    mainnet: {
      url: process.env.MAINNET_RPC_URL || "",
      accounts: process.env.ETHERUM_PRIVATE_KEY ? [process.env.ETHERUM_PRIVATE_KEY] : [],
    },
  },
  ignition: {
    defaultNetwork: "sepolia",
  },
  etherscan: {
    apiKey: vars.get("ETHERSCAN_API_KEY"),
  },
};
