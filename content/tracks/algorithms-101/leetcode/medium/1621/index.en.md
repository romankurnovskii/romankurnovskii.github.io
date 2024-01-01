---
title: 1621. Number of Sets of K Non-Overlapping Line Segments
seoTitle: LeetCode 1621. Number of Sets of K Non-Overlapping Line Segments | Python solution and explanation
description: 1621. Number of Sets of K Non-Overlapping Line Segments
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1621
---

[LeetCode problem 1621](https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/)

```python
class Solution:
    def numberOfSets(self, n: int, k: int) -> int:
        mod = 10**9 + 7
        f = [[0] * (k + 1) for _ in range(n + 1)]
        g = [[0] * (k + 1) for _ in range(n + 1)]
        f[1][0] = 1
        for i in range(2, n + 1):
            for j in range(k + 1):
                f[i][j] = (f[i - 1][j] + g[i - 1][j]) % mod
                g[i][j] = g[i - 1][j]
                if j:
                    g[i][j] += f[i - 1][j - 1]
                    g[i][j] %= mod
                    g[i][j] += g[i - 1][j - 1]
                    g[i][j] %= mod
        return (f[-1][-1] + g[-1][-1]) % mod

```
