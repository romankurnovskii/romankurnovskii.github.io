---
title: Solana SDK migration Guide (v1 → @solana/web3.js 2.x)
seoTitle: Solana SDK migration Guide (v1 → @solana/web3.js 2.x)
description: Solana SDK migration Guide (v1 → @solana/web3.js 2.x)
toc: false
tags: [solana,typescrypt,javascript]
series: []
categories: [Programming]
date: 2025-01-13
lastMod: 2025-01-13
featuredImage: https://picsum.photos/700/238?grayscale
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

# Installation

```bash
npm install --save @solana/web3.js@next
npm install --save @solana/spl-token@next
```

V1

```ts
export const connection = new Connection(process.env.RPC_URL!, {
  wsEndpoint: process.env.RPC_WSS_URL!,
  commitment: 'confirmed',
});
```

V2

```ts
export const connection = createSolanaRpc(process.env.RPC_URL!);
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
const solAccountResp = await connection.getAccountInfo(owner.publicKey)
```

V2

```
const solAccountResp = await connection.getAccountInfo(owner.address).send();
```
