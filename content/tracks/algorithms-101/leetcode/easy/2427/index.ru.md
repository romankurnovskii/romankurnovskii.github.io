---
title: 2427. Number of Common Factors
seoTitle: LeetCode 2427. Number of Common Factors | Python solution and explanation
description: 2427. Number of Common Factors
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2427
---

[LeetCode problem 2427](https://leetcode.com/problems/number-of-common-factors/)

```python
class Solution:
    def commonFactors(self, a: int, b: int) -> int:
        g = gcd(a, b)
        res, x = 0, 1
        while x * x <= g:
            if g % x == 0:
                res += 1
                res += x * x < g
            x += 1
        return res

```
