---
title: 2338. Count the Number of Ideal Arrays
seoTitle: LeetCode 2338. Count the Number of Ideal Arrays | Python solution and explanation
description: 2338. Count the Number of Ideal Arrays
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2338
---

[LeetCode problem 2338](https://leetcode.com/problems/count-the-number-of-ideal-arrays/)

```python
class Solution:
    def idealArrays(self, n: int, maxValue: int) -> int:
        c = [[0] * 16 for _ in range(n)]
        mod = 10**9 + 7
        for i in range(n):
            for j in range(min(16, i + 1)):
                c[i][j] = 1 if j == 0 else (c[i - 1][j] + c[i - 1][j - 1]) % mod
        dp = [[0] * 16 for _ in range(maxValue + 1)]
        for i in range(1, maxValue + 1):
            dp[i][1] = 1
        for j in range(1, 15):
            for i in range(1, maxValue + 1):
                k = 2
                while k * i <= maxValue:
                    dp[k * i][j + 1] = (dp[k * i][j + 1] + dp[i][j]) % mod
                    k += 1
        res = 0
        for i in range(1, maxValue + 1):
            for j in range(1, 16):
                res = (res + dp[i][j] * c[-1][j - 1]) % mod
        return res

```
