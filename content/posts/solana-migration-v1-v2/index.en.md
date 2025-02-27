---
title: Solana SDK migration Guide (v1 → @solana/web3.js 2.x)
seoTitle: Solana SDK migration Guide (v1 → @solana/web3.js 2.x)
description: Solana SDK migration Guide (v1 → @solana/web3.js 2.x)
toc: true
tags: [solana,typescript,javascript]
series: []
categories: [Programming]
date: 2025-01-13
lastMod: 2025-02-24
featuredImage: https://picsum.photos/700/138?grayscale
authors: []
---

The 2.x SDK leverages modern TypeScript features for enhanced type-safety, this means you get:

- More compile-time errors and fewer run time errors
- Improved IDE completions and IntelliSense
- Harder for bugs and mistakes to make it to production

Following incidents will result in type errors:

- Transaction missing a blockhash
- Transaction missing a signature
- Instruction missing an account
- Lookup tables passed in legacy transactions

## Installation

```bash
npm install --save @solana/web3.js@next
# This repository has been archived by the owner on Jan 10, 2025. Could be skipped
npm install --save @solana/spl-token@latest # seems next point to an old version
```

## Types

```ts
Finality -> Commitment
connection: Connection ->   rpc: ReturnType<typeof createSolanaRpc>
                       ->   rpcSubscriptions: ReturnType<typeof rpcSubscriptions>
```

V1

```ts
connection: Connection

export const connection = new Connection(process.env.RPC_URL!, {
  wsEndpoint: process.env.RPC_WSS_URL!,
  commitment: 'confirmed',
});
```

V2

```ts
rpc: ReturnType<typeof createSolanaRpc>

export const rpc = createSolanaRpc(process.env.RPC_URL!);
export const rpcSubscriptions = createSolanaRpcSubscriptions(
  process.env.RPC_WSS_URL!
);
```

V1

```ts
export const owner: Keypair = Keypair.fromSecretKey(
  bs58.decode(process.env.WALLET_PRIVATE_KEY!)
);

owner.publicKey -> owner.address
```

V2

```ts
import bs58 from 'bs58';
import { createKeyPairSignerFromBytes, KeyPairSigner } from '@solana/web3.js';

const owner: KeyPairSigner = await createKeyPairSignerFromBytes(
    bs58.decode(process.env.WALLET_PRIVATE_KEY!)
  );
```

V1

```
await connection.getAccountInfo(owner.publicKey)

await connection.getTokenAccountsByOwner(
    owner.address,
    { programId: TOKEN_PROGRAM_ID }
  );
```

V2

```
await rpc.getAccountInfo(owner.address).send();

await rpc
    .getTokenAccountsByOwner(
      owner.address,
      { programId: address(TOKEN_PROGRAM_ID.toBase58()) },
      { commitment: 'confirmed' }
    )
    .send();
```

## Send transactions

V2

```
// 1 Crete function `sendAndConfirmTransaction`
// 2 Setup lifetime for a transaction (Every transaction needs to specify a valid lifetime for it to be accepted for execution on the * network.)
// 3 Crete transaction

// 1
const sendAndConfirmTransaction = sendAndConfirmTransactionFactory({
    /**
     * The RPC implements a `sendTransaction` method which relays transactions to the network.
     */
    rpc,
    /**
     * RPC subscriptions allow the transaction sender to subscribe to the status of our transaction.
     * The sender will resolve when the transaction is reported to have been confirmed, or will
     * reject in the event of an error, or a timeout if the transaction lifetime is thought to have
     * expired.
     */
    rpcSubscriptions,
});

const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

const transactionMessage = pipe(
    createTransactionMessage({ version: 0 }),
    tx => setTransactionMessageFeePayer(FEE_PAYER_ADDRESS, tx),
    tx => setTransactionMessageLifetimeUsingBlockhash(latestBlockhash, tx),
    tx =>
        appendTransactionMessageInstructions(
            [
                getTransferSolInstruction({
                    amount: lamports(12345678n),
                    destination: DESTINATION_ADDRESS,
                    source: SOURCE_ACCOUNT_SIGNER,
                }),
                getAddMemoInstruction({
                    memo: 'hello from @solana/web3.js',
                }),
            ],
            tx,
        ),
);
```

## Errors

>> SolanaError: JSON-RPC error: The JSON sent is not a valid `Request` object (Encoded binary (base 58) data should be less than 128 bytes, please use Base64 encoding.)

Fix by adding encoding:

```ts
{
    encoding: 'base64',
}
```

```ts
const tokenAccountsResponse = await connection
    .getTokenAccountsByOwner(
      ownerPublicKey,
      {
        programId: address('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'),
      },
      {
        encoding: 'base64',
      }
    )
    .send();

// or

const tokenAccountsResponse = await connection
    .getTokenAccountsByOwner(
      ownerPublicKey,
      {
        programId: address('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'),
      },
      {
        encoding: 'jsonParsed',
      }
    )
    .send();
```
