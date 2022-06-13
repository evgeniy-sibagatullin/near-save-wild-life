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

### Add new animal corresponding to model and view the result

```
near call swl-contract.market_vgnsbg.testnet setAnimal "{\"animal\": {\"id\": \"0\", \"name\": \"Fox\", \"description\": \"Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. They have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail (or brush).\", \"image\": \"https://i.imgur.com/Yw2UhAR.jpg\", \"population\": \"9,840-19,200\"}}" --accountId=market_vgnsbg.testnet
near call swl-contract.market_vgnsbg.testnet setAnimal "{\"animal\": {\"id\": \"1\", \"name\": \"Wolf\", \"description\": \"The wolf (Canis lupus), also known as the gray wolf or grey wolf, is a large canine native to Eurasia and North America. It is distinguished from other Canis species by its less pointed ears and muzzle, as well as a shorter torso and a longer tail.\", \"image\": \"https://i.imgur.com/MFWcU4T.jpg\", \"population\": \"200,000–250,000\"}}" --accountId=market_vgnsbg.testnet
near call swl-contract.market_vgnsbg.testnet setAnimal "{\"animal\": {\"id\": \"2\", \"name\": \"Mouse\", \"description\": \"A mouse (pl: mice) is a small mammal. Characteristically, mice are known to have a pointed snout, small rounded ears, a body-length scaly tail, and a high breeding rate. The best known mouse species is the common house mouse (Mus musculus).\", \"image\": \"https://i.imgur.com/QdiCMxr.jpg\", \"population\": \"17-22 billions\"}}" --accountId=market_vgnsbg.testnet
near view swl-contract.market_vgnsbg.testnet getAnimal "{\"id\": \"0\"}"
```

### Reset animals data if needed

```
near call swl-contract.market_vgnsbg.testnet resetAnimals --accountId=market_vgnsbg.testnet
```

## Contract with Donate Function

### Create a new sub-account that will act as the donor

```
near create-account donor.market_vgnsbg.testnet --masterAccount market_vgnsbg.testnet --initialBalance 7
```

### Perform donation call and view the result

```
near call swl-contract.market_vgnsbg.testnet donateOneNear "{\"id\": \"0\"}" --depositYocto=1000000000000000000000000 --accountId=donor.market_vgnsbg.testnet
near view swl-contract.market_vgnsbg.testnet getAnimal "{\"id\": \"0\"}"
```