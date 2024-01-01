---
title: 1137. N-th Tribonacci Number
seoTitle: LeetCode 1137. N-th Tribonacci Number | Python solution and explanation
description: 1137. N-th Tribonacci Number
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1137
---

[LeetCode problem 1137](https://leetcode.com/problems/n-th-tribonacci-number/)

```python
import numpy as np


class Solution:
    def tribonacci(self, n: int) -> int:
        if n == 0:
            return 0
        if n < 3:
            return 1
        factor = np.mat([(1, 1, 0), (1, 0, 1), (1, 0, 0)], np.dtype("O"))
        res = np.mat([(1, 1, 0)], np.dtype("O"))
        n -= 3
        while n:
            if n & 1:
                res *= factor
            factor *= factor
            n >>= 1
        return res.sum()

```
