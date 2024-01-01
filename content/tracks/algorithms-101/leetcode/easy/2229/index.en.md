---
title: 2229. Check if an Array Is Consecutive
seoTitle: LeetCode 2229. Check if an Array Is Consecutive | Python solution and explanation
description: 2229. Check if an Array Is Consecutive
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2229
---

[LeetCode problem 2229](https://leetcode.com/problems/check-if-an-array-is-consecutive/)

```python
class Solution:
    def isConsecutive(self, nums: List[int]) -> bool:
        mi, mx = min(nums), max(nums)
        n = len(nums)
        return len(set(nums)) == n and mx == mi + n - 1

```
