---
title: 790. Domino and Tromino Tiling
seoTitle: LeetCode 790. Domino and Tromino Tiling | Python solution and explanation
description: 790. Domino and Tromino Tiling
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 790
---

[LeetCode problem 790](https://leetcode.com/problems/domino-and-tromino-tiling/)

```python
class Solution:
    def numTilings(self, n: int) -> int:
        f = [1, 0, 0, 0]
        mod = 10**9 + 7
        for i in range(1, n + 1):
            g = [0] * 4
            g[0] = (f[0] + f[1] + f[2] + f[3]) % mod
            g[1] = (f[2] + f[3]) % mod
            g[2] = (f[1] + f[3]) % mod
            g[3] = f[0]
            f = g
        return f[0]

```
