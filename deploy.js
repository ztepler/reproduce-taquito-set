import { TezosToolkit } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';
import dotenv from 'dotenv';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const michelsonContract = require('./contract.json');

dotenv.config();
const Tezos = new TezosToolkit(process.env.RPC_NODE);
const signer = await InMemorySigner.fromSecretKey(process.env.PRIVATE_KEY);

async function deployContract() {
  try {
    Tezos.setProvider({ signer: signer });

    const address = await Tezos.signer.publicKeyHash();
    console.log(`Deploying contract with account: ${address}`);

    const originationOp = await Tezos.contract.originate({
      code: michelsonContract,
      storage: {
        'addresses': [address],
        'counter': 420
      },
    });

    console.log('Waiting for confirmation...');
    await originationOp.confirmation();

    console.log(`Contract deployed at: ${originationOp.contractAddress}`);

  } catch (error) {
    console.error('Error:', error);
  }
}

deployContract();
