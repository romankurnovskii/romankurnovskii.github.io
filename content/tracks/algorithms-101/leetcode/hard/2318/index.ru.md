---
title: 2318. Number of Distinct Roll Sequences
seoTitle: LeetCode 2318. Number of Distinct Roll Sequences | Python solution and explanation
description: 2318. Number of Distinct Roll Sequences
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2318
---

[LeetCode problem 2318](https://leetcode.com/problems/number-of-distinct-roll-sequences/)

```python
class Solution:
    def distinctSequences(self, n: int) -> int:
        if n == 1:
            return 6
        mod = 10**9 + 7
        dp = [[[0] * 6 for _ in range(6)] for _ in range(n + 1)]
        for i in range(6):
            for j in range(6):
                if gcd(i + 1, j + 1) == 1 and i != j:
                    dp[2][i][j] = 1
        for k in range(3, n + 1):
            for i in range(6):
                for j in range(6):
                    if gcd(i + 1, j + 1) == 1 and i != j:
                        for h in range(6):
                            if gcd(h + 1, i + 1) == 1 and h != i and h != j:
                                dp[k][i][j] += dp[k - 1][h][i]
        res = 0
        for i in range(6):
            for j in range(6):
                res += dp[-1][i][j]
        return res % mod

```
