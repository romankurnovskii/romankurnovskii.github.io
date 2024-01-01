---
title: 1594. Maximum Non Negative Product in a Matrix
seoTitle: LeetCode 1594. Maximum Non Negative Product in a Matrix | Python solution and explanation
description: 1594. Maximum Non Negative Product in a Matrix
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1594
---

[LeetCode problem 1594](https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/)

```python
class Solution:
    def maxProductPath(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        mod = 10**9 + 7
        dp = [[[grid[0][0]] * 2 for _ in range(n)] for _ in range(m)]
        for i in range(1, m):
            dp[i][0] = [dp[i - 1][0][0] * grid[i][0]] * 2
        for j in range(1, n):
            dp[0][j] = [dp[0][j - 1][0] * grid[0][j]] * 2
        for i in range(1, m):
            for j in range(1, n):
                v = grid[i][j]
                if v >= 0:
                    dp[i][j][0] = min(dp[i - 1][j][0], dp[i][j - 1][0]) * v
                    dp[i][j][1] = max(dp[i - 1][j][1], dp[i][j - 1][1]) * v
                else:
                    dp[i][j][0] = max(dp[i - 1][j][1], dp[i][j - 1][1]) * v
                    dp[i][j][1] = min(dp[i - 1][j][0], dp[i][j - 1][0]) * v
        res = dp[-1][-1][1]
        return -1 if res < 0 else res % mod

```
