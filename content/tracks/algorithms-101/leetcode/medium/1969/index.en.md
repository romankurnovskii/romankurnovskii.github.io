---
title: 1969. Minimum Non-Zero Product of the Array Elements
seoTitle: LeetCode 1969. Minimum Non-Zero Product of the Array Elements | Python solution and explanation
description: 1969. Minimum Non-Zero Product of the Array Elements
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1969
---

[LeetCode problem 1969](https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/)

```python
class Solution:
    def minNonZeroProduct(self, p: int) -> int:
        mod = 10**9 + 7
        return (2**p - 1) * pow(2**p - 2, 2 ** (p - 1) - 1, mod) % mod

```
