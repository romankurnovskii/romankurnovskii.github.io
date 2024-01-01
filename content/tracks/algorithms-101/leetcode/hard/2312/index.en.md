---
title: 2312. Selling Pieces of Wood
seoTitle: LeetCode 2312. Selling Pieces of Wood | Python solution and explanation
description: 2312. Selling Pieces of Wood
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2312
---

[LeetCode problem 2312](https://leetcode.com/problems/selling-pieces-of-wood/)

```python
class Solution:
    def sellingWood(self, m: int, n: int, prices: List[List[int]]) -> int:
        d = defaultdict(dict)
        for h, w, p in prices:
            d[h][w] = p
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                dp[i][j] = d[i].get(j, 0)
                for k in range(1, i):
                    dp[i][j] = max(dp[i][j], dp[k][j] + dp[i - k][j])
                for k in range(1, j):
                    dp[i][j] = max(dp[i][j], dp[i][k] + dp[i][j - k])
        return dp[-1][-1]

```
