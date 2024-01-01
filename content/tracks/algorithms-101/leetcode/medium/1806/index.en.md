---
title: 1806. Minimum Number of Operations to Reinitialize a Permutation
seoTitle: LeetCode 1806. Minimum Number of Operations to Reinitialize a Permutation | Python solution and explanation
description: 1806. Minimum Number of Operations to Reinitialize a Permutation
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1806
---

[LeetCode problem 1806](https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/)

```python
class Solution:
    def reinitializePermutation(self, n: int) -> int:
        res, i = 0, 1
        while 1:
            res += 1
            if i < n >> 1:
                i <<= 1
            else:
                i = (i - (n >> 1)) << 1 | 1
            if i == 1:
                return res

```
