# My Stupid Token v2

Deploy your own ERC-20.

## Prerequisite

Make sure you have these installed:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html)
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Install

```shell
git clone https://github.com/julienbrg/my-super-token-v2.git
cd my-super-token-v2
npm i
```

## Test

```shell
npx hardhat test
```

## Deploy

Copy the [`.env.example`](https://github.com/ATO-nft/ato/blob/main/.env.example) file and rename it `.env`. In this `.env` file, you want to:

- Add one of your wallets' private key ([MetaMask](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key) private key export). It's recommended to create a fresh address, then go grab a handful of Goerli ETH using [this faucet](https://goerlifaucet.com/).
- Add your own [POKT Network](https://www.pokt.network/) Goerli endpoint.

```shell
npx hardhat --network goerli deploy
```

## Etherscan verification

```shell
npx hardhat --network goerli etherscan-verify --api-key <YOUR_ETHERSCAN_API_KEY>
```

## Example

[https://goerli.etherscan.io/address/0xa99ddb5f7b9b8ebf48cb31c213eeffdd1e9ed5f6#code](https://goerli.etherscan.io/address/0xa99ddb5f7b9b8ebf48cb31c213eeffdd1e9ed5f6#code)

## Support

You can contact us via [Element](https://matrix.to/#/@julienbrg:matrix.org) (preferred), [Twitter](https://twitter.com/julienbrg), [Discord](https://discord.gg/xw9dCeQ94Y), [LinkedIn](https://www.linkedin.com/in/julienberanger/) or [email](mailto:julien@strat.cc).

## Credits

This repo is using [hardhat-deploy](https://github.com/wighawag/hardhat-deploy) developed by [@wighawag](https://github.com/wighawag).
