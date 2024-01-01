---
title: 1703. Minimum Adjacent Swaps for K Consecutive Ones
seoTitle: LeetCode 1703. Minimum Adjacent Swaps for K Consecutive Ones | Python solution and explanation
description: 1703. Minimum Adjacent Swaps for K Consecutive Ones
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1703
---

[LeetCode problem 1703](https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/)

```python
class Solution:
    def minMoves(self, nums: List[int], k: int) -> int:
        arr = [i for i, x in enumerate(nums) if x]
        s = list(accumulate(arr, initial=0))
        res = inf
        x = (k + 1) // 2
        y = k - x
        for i in range(x - 1, len(arr) - y):
            j = arr[i]
            ls = s[i + 1] - s[i + 1 - x]
            rs = s[i + 1 + y] - s[i + 1]
            a = (j + j - x + 1) * x // 2 - ls
            b = rs - (j + 1 + j + y) * y // 2
            res = min(res, a + b)
        return res

```
