---
title: 1200. Minimum Absolute Difference
seoTitle: LeetCode 1200. Minimum Absolute Difference | Python solution and explanation
description: 1200. Minimum Absolute Difference
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1200
---

[LeetCode problem 1200](https://leetcode.com/problems/minimum-absolute-difference/)

```python
class Solution:
    def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:
        arr.sort()
        mi = min(b - a for a, b in pairwise(arr))
        return [[a, b] for a, b in pairwise(arr) if b - a == mi]

```
