---
title: 1638. Count Substrings That Differ by One Character
seoTitle: LeetCode 1638. Count Substrings That Differ by One Character | Python solution and explanation
description: 1638. Count Substrings That Differ by One Character
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1638
---

[LeetCode problem 1638](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/)

```python
class Solution:
    def countSubstrings(self, s: str, t: str) -> int:
        res = 0
        m, n = len(s), len(t)
        f = [[0] * (n + 1) for _ in range(m + 1)]
        g = [[0] * (n + 1) for _ in range(m + 1)]
        for i, a in enumerate(s, 1):
            for j, b in enumerate(t, 1):
                if a == b:
                    f[i][j] = f[i - 1][j - 1] + 1
        for i in range(m - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                if s[i] == t[j]:
                    g[i][j] = g[i + 1][j + 1] + 1
                else:
                    res += (f[i][j] + 1) * (g[i + 1][j + 1] + 1)
        return res

```
