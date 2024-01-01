---
title: 1509. Minimum Difference Between Largest and Smallest Value in Three Moves
seoTitle: LeetCode 1509. Minimum Difference Between Largest and Smallest Value in Three Moves | Python solution and explanation
description: 1509. Minimum Difference Between Largest and Smallest Value in Three Moves
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1509
---

[LeetCode problem 1509](https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/)

```python
class Solution:
    def minDifference(self, nums: List[int]) -> int:
        n = len(nums)
        if n < 5:
            return 0
        nums.sort()
        res = inf
        for l in range(4):
            r = 3 - l
            res = min(res, nums[n - 1 - r] - nums[l])
        return res

```
