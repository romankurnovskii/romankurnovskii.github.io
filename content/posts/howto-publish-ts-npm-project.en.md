---
title: How to publish typescript package to npm registry
seoTitle: How to publish typescript package to npm registry
description: How to publish typescript package to npm registry
toc: false
tags: [javascript]
series: []
categories: [Programming]
date: 2023-03-07
lastMod: 2023-05-15
featuredImage: https://picsum.photos/700/237?grayscale
authors: []
---


1. Open template: <https://github.com/romankurnovskii/npm-typescript-package-template>
2. Click `Use this template`
3. Create repo from this template.
4. git clone new repo
5. update code `src/index.ts`, `src/bin.ts`

How to check if `bin` script works from terminal:

```sh
npm link && npm link mypackage
mypackage
```

**Publish:**

```sh
npm run prepublishOnly
npm publish
```
