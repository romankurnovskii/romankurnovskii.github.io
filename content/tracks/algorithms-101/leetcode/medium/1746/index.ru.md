---
title: 1746. Maximum Subarray Sum After One Operation
seoTitle: LeetCode 1746. Maximum Subarray Sum After One Operation | Python solution and explanation
description: 1746. Maximum Subarray Sum After One Operation
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1746
---

[LeetCode problem 1746](https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/)

```python
class Solution:
    def maxSumAfterOperation(self, nums: List[int]) -> int:
        f = g = 0
        res = -inf
        for x in nums:
            ff = max(f, 0) + x
            gg = max(max(f, 0) + x * x, g + x)
            f, g = ff, gg
            res = max(res, f, g)
        return res

```
