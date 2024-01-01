---
title: 1977. Number of Ways to Separate Numbers
seoTitle: LeetCode 1977. Number of Ways to Separate Numbers | Python solution and explanation
description: 1977. Number of Ways to Separate Numbers
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1977
---

[LeetCode problem 1977](https://leetcode.com/problems/number-of-ways-to-separate-numbers/)

```python
class Solution:
    def numberOfCombinations(self, num: str) -> int:
        def cmp(i, j, k):
            x = lcp[i][j]
            return x >= k or num[i + x] >= num[j + x]

        mod = 10**9 + 7
        n = len(num)
        lcp = [[0] * (n + 1) for _ in range(n + 1)]
        for i in range(n - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                if num[i] == num[j]:
                    lcp[i][j] = 1 + lcp[i + 1][j + 1]

        dp = [[0] * (n + 1) for _ in range(n + 1)]
        dp[0][0] = 1
        for i in range(1, n + 1):
            for j in range(1, i + 1):
                v = 0
                if num[i - j] != '0':
                    if i - j - j >= 0 and cmp(i - j, i - j - j, j):
                        v = dp[i - j][j]
                    else:
                        v = dp[i - j][min(j - 1, i - j)]
                dp[i][j] = (dp[i][j - 1] + v) % mod
        return dp[n][n]

```
