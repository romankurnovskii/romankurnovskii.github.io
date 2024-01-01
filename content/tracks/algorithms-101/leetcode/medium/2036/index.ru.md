---
title: 2036. Maximum Alternating Subarray Sum
seoTitle: LeetCode 2036. Maximum Alternating Subarray Sum | Python solution and explanation
description: 2036. Maximum Alternating Subarray Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2036
---

[LeetCode problem 2036](https://leetcode.com/problems/maximum-alternating-subarray-sum/)

```python
class Solution:
    def maximumAlternatingSubarraySum(self, nums: List[int]) -> int:
        res = f = g = -inf
        for x in nums:
            f, g = max(g, 0) + x, f - x
            res = max(res, f, g)
        return res

```
