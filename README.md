# Taquito SetValidationError Reproduction

This repository demonstrates the issue with passing a set of addresses as a parameter when calling a smart contract using the Taquito library.

## Problem

The issue occurs when trying to pass a set of addresses to a smart contract. Here is my question on [Stack Overflow](https://tezos.stackexchange.com/questions/6009/how-to-correctly-pass-a-set-as-a-parameter-when-calling-a-contract-using-taquito)

This issue can be reproduced using the provided script that interacts with a simple Tezos smart contract.

## Prerequisites

- Node.js (version 16 is recommended) with npm packet manager
- A Tezos RPC node (e.g., a local node or a public one)
- A funded Tezos account with a known private key

## Installation

1. Clone the repository:
```
git clone https://github.com/ztepler/reproduce-taquito-set.git
cd reproduce-taquito-set
```
2. Install dependencies:
```
make install
```
3. Set enviroment variables:
```
export RPC_NODE=https://ghostnet.tezos.marigold.dev/
export CONTRACT_ADDRESS=KT1UYWUkUvcsYdiRoefuc9CageoqGRVvcXzP
export PRIVATE_KEY=your_secret_key
```

## Usage
1. Run the script:
```
node interact.js
```

