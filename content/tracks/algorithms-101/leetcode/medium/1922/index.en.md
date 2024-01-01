---
title: 1922. Count Good Numbers
seoTitle: LeetCode 1922. Count Good Numbers | Python solution and explanation
description: 1922. Count Good Numbers
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1922
---

[LeetCode problem 1922](https://leetcode.com/problems/count-good-numbers/)

```python
class Solution:
    def countGoodNumbers(self, n: int) -> int:
        mod = 10**9 + 7

        def myPow(x, n):
            res = 1
            while n:
                if (n & 1) == 1:
                    res = res * x % mod
                x = x * x % mod
                n >>= 1
            return res

        return myPow(5, (n + 1) >> 1) * myPow(4, n >> 1) % mod

```
