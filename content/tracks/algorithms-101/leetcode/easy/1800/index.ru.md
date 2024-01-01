---
title: 1800. Maximum Ascending Subarray Sum
seoTitle: LeetCode 1800. Maximum Ascending Subarray Sum | Python solution and explanation
description: 1800. Maximum Ascending Subarray Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1800
---

[LeetCode problem 1800](https://leetcode.com/problems/maximum-ascending-subarray-sum/)

```python
class Solution:
    def maxAscendingSum(self, nums: List[int]) -> int:
        res = t = 0
        for i, v in enumerate(nums):
            if i == 0 or v > nums[i - 1]:
                t += v
                res = max(res, t)
            else:
                t = v
        return res

```
