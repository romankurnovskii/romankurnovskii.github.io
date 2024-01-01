---
title: 1749. Maximum Absolute Sum of Any Subarray
seoTitle: LeetCode 1749. Maximum Absolute Sum of Any Subarray | Python solution and explanation
description: 1749. Maximum Absolute Sum of Any Subarray
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1749
---

[LeetCode problem 1749](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/)

```python
class Solution:
    def maxAbsoluteSum(self, nums: List[int]) -> int:
        f = g = 0
        res = 0
        for x in nums:
            f = max(f, 0) + x
            g = min(g, 0) + x
            res = max(res, f, abs(g))
        return res

```
