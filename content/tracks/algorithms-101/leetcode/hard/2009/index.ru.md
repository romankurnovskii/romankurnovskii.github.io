---
title: 2009. Minimum Number of Operations to Make Array Continuous
seoTitle: LeetCode 2009. Minimum Number of Operations to Make Array Continuous | Python solution and explanation
description: 2009. Minimum Number of Operations to Make Array Continuous
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2009
---

[LeetCode problem 2009](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/)

```python
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        n = len(nums)
        nums = sorted(set(nums))
        res, j = n, 0
        for i, v in enumerate(nums):
            while j < len(nums) and nums[j] - v <= n - 1:
                j += 1
            res = min(res, n - (j - i))
        return res

```
