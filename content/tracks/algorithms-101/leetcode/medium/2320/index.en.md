---
title: 2320. Count Number of Ways to Place Houses
seoTitle: LeetCode 2320. Count Number of Ways to Place Houses | Python solution and explanation
description: 2320. Count Number of Ways to Place Houses
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2320
---

[LeetCode problem 2320](https://leetcode.com/problems/count-number-of-ways-to-place-houses/)

```python
class Solution:
    def countHousePlacements(self, n: int) -> int:
        mod = 10**9 + 7
        f = [1] * n
        g = [1] * n
        for i in range(1, n):
            f[i] = g[i - 1]
            g[i] = (f[i - 1] + g[i - 1]) % mod
        v = f[-1] + g[-1]
        return v * v % mod

```
