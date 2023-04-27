import { TezosToolkit } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';
import dotenv from 'dotenv';


async function main() {
  dotenv.config();
  const Tezos = new TezosToolkit(process.env.RPC_NODE);
  const signer = await InMemorySigner.fromSecretKey(process.env.PRIVATE_KEY);
  Tezos.setProvider({ signer: signer });

  const account = await Tezos.signer.publicKeyHash();
  const contract = await Tezos.contract.at(process.env.CONTRACT_ADDRESS);
  const params = {
    'addresses': [account],
    'counter': 420
  };

  const operation = await contract.methods.default(params).send();
  await operation.confirmation();
}

main();
