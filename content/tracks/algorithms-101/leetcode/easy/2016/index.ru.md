---
title: 2016. Maximum Difference Between Increasing Elements
seoTitle: LeetCode 2016. Maximum Difference Between Increasing Elements | Python solution and explanation
description: 2016. Maximum Difference Between Increasing Elements
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2016
---

[LeetCode problem 2016](https://leetcode.com/problems/maximum-difference-between-increasing-elements/)

```python
class Solution:
    def maximumDifference(self, nums: List[int]) -> int:
        mi = inf
        res = -1
        for x in nums:
            if x > mi:
                res = max(res, x - mi)
            else:
                mi = x
        return res

```
