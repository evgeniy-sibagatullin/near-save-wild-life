## Install CLI Tools

```
yarn global add near-cli
yarn global add assemblyscript
yarn global add asbuild
```

## Create Accounts

### Create a Top-Level Account

See the [NEAR 101 learning module 4.1](https://dacade.org/communities/near/courses/near-101/learning-modules/b52ba9f1-caac-4339-96ed-fad3b1ab6bbd#4-create-accounts)

### Login to the NEAR CLI

```
near login
```

### Create a Sub-account via NEAR CLI

```
near create-account swl-contract.market_vgnsbg.testnet --masterAccount market_vgnsbg.testnet --initialBalance 10
```

## Compile and Deploy

### Compile the Contract

```
yarn asb
```

### Deploy the Contract

```
near deploy --accountId=swl-contract.market_vgnsbg.testnet --wasmFile=build/release/near-save-wild-life.wasm
```

## Contract Calls

### Calling a Change Function

```
near call swl-contract.market_vgnsbg.testnet setAnimal "{\"id\": \"0\", \"animalName\": \"Fox\"}" --accountId=market_vgnsbg.testnet
near call swl-contract.market_vgnsbg.testnet setAnimal "{\"id\": \"1\", \"animalName\": \"Wolf\"}" --accountId=market_vgnsbg.testnet
near call swl-contract.market_vgnsbg.testnet setAnimal "{\"id\": \"2\", \"animalName\": \"Mouse\"}" --accountId=market_vgnsbg.testnet
```

### Calling a View Function

```
near view swl-contract.market_vgnsbg.testnet getAnimal "{\"id\": \"0\"}"
near view swl-contract.market_vgnsbg.testnet getAnimal "{\"id\": \"42\"}"
```

## Contract Redeployment(repeat compile and deploy)

```
yarn asb
near deploy --accountId=swl-contract.market_vgnsbg.testnet --wasmFile=build/release/near-save-wild-life.wasm
```

## Add new animal corresponding to model and view the result

```
near call swl-contract.market_vgnsbg.testnet setAnimal "{\"animal\": {\"id\": \"0\", \"name\": \"Fox\", \"description\": \"Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. They have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail (or brush).\", \"image\": \"https://i.imgur.com/Xb7DbQ6.jpeg\", \"population\": \"9,840-19,200\"}}" --accountId=market_vgnsbg.testnet
near view swl-contract.market_vgnsbg.testnet getAnimal "{\"id\": \"0\"}"
```