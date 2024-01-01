---
title: 1866. Number of Ways to Rearrange Sticks With K Sticks Visible
seoTitle: LeetCode 1866. Number of Ways to Rearrange Sticks With K Sticks Visible | Python solution and explanation
description: 1866. Number of Ways to Rearrange Sticks With K Sticks Visible
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1866
---

[LeetCode problem 1866](https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/)

```python
class Solution:
    def rearrangeSticks(self, n: int, k: int) -> int:
        mod = 10**9 + 7
        f = [1] + [0] * k
        for i in range(1, n + 1):
            for j in range(k, 0, -1):
                f[j] = (f[j] * (i - 1) + f[j - 1]) % mod
            f[0] = 0
        return f[k]

```
