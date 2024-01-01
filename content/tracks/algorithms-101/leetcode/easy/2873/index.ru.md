---
title: Maximum Value of an Ordered Triplet I
seoTitle: LeetCode Maximum Value of an Ordered Triplet I | Python solution and explanation
description: Maximum Value of an Ordered Triplet I
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2873
---

[LeetCode problem 2873](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/)

```python
class Solution:
    def maximumTripletValue(self, nums: List[int]) -> int:
        res = mx = mx_diff = 0
        for num in nums:
            res = max(res, mx_diff * num)
            mx = max(mx, num)
            mx_diff = max(mx_diff, mx - num)
        return res

```
