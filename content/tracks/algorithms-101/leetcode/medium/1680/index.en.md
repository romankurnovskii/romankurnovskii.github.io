---
title: 1680. Concatenation of Consecutive Binary Numbers
seoTitle: LeetCode 1680. Concatenation of Consecutive Binary Numbers | Python solution and explanation
description: 1680. Concatenation of Consecutive Binary Numbers
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1680
---

[LeetCode problem 1680](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/)

```python
class Solution:
    def concatenatedBinary(self, n: int) -> int:
        mod = 10**9 + 7
        res = shift = 0
        for i in range(1, n + 1):
            if (i & (i - 1)) == 0:
                shift += 1
            res = (res << shift | i) % mod
        return res

```
