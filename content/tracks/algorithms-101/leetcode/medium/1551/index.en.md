---
title: 1551. Minimum Operations to Make Array Equal
seoTitle: LeetCode 1551. Minimum Operations to Make Array Equal | Python solution and explanation
description: 1551. Minimum Operations to Make Array Equal
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1551
---

[LeetCode problem 1551](https://leetcode.com/problems/minimum-operations-to-make-array-equal/)

```python
class Solution:
    def minOperations(self, n: int) -> int:
        return sum(n - (i << 1 | 1) for i in range(n >> 1))

```
