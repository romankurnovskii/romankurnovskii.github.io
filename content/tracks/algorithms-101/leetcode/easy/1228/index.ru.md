---
title: 1228. Missing Number In Arithmetic Progression
seoTitle: LeetCode 1228. Missing Number In Arithmetic Progression | Python solution and explanation
description: 1228. Missing Number In Arithmetic Progression
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1228
---

[LeetCode problem 1228](https://leetcode.com/problems/missing-number-in-arithmetic-progression/)

```python
class Solution:
    def missingNumber(self, arr: List[int]) -> int:
        n = len(arr)
        d = (arr[-1] - arr[0]) // n
        for i in range(1, n):
            if arr[i] != arr[i - 1] + d:
                return arr[i - 1] + d
        return arr[0]

```
