---
title: 2908. Minimum Sum of Mountain Triplets I
seoTitle: LeetCode 2908. Minimum Sum of Mountain Triplets I | Python solution and explanation
description: Minimum Sum of Mountain Triplets I
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2908
---

[LeetCode problem 2908](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/)

```python
class Solution:
    def minimumSum(self, nums: List[int]) -> int:
        n = len(nums)
        right = [inf] * (n + 1)
        for i in range(n - 1, -1, -1):
            right[i] = min(right[i + 1], nums[i])
        res = left = inf
        for i, x in enumerate(nums):
            if left < x and right[i + 1] < x:
                res = min(res, left + x + right[i + 1])
            left = min(left, x)
        return -1 if res == inf else res

```
