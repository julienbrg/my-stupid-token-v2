import { HardhatUserConfig } from "hardhat/config";
import * as dotenv from "dotenv";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.8",
  namedAccounts: {
    deployer: 0
  },
  networks: {
    goerli: {
      url: process.env.GOERLI_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    }
  }, 
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
  
export default config;  