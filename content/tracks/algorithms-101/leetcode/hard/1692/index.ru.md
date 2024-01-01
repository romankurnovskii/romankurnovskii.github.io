---
title: 1692. Count Ways to Distribute Candies
seoTitle: LeetCode 1692. Count Ways to Distribute Candies | Python solution and explanation
description: 1692. Count Ways to Distribute Candies
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1692
---

[LeetCode problem 1692](https://leetcode.com/problems/count-ways-to-distribute-candies/)

```python
class Solution:
    def waysToDistribute(self, n: int, k: int) -> int:
        mod = 10**9 + 7
        f = [[0] * (k + 1) for _ in range(n + 1)]
        f[0][0] = 1
        for i in range(1, n + 1):
            for j in range(1, k + 1):
                f[i][j] = (f[i - 1][j] * j + f[i - 1][j - 1]) % mod
        return f[n][k]

```
