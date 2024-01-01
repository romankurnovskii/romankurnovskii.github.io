---
title: 1752. Check if Array Is Sorted and Rotated
seoTitle: LeetCode 1752. Check if Array Is Sorted and Rotated | Python solution and explanation
description: 1752. Check if Array Is Sorted and Rotated
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1752
---

[LeetCode problem 1752](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/)

```python
class Solution:
    def check(self, nums: List[int]) -> bool:
        return sum(nums[i - 1] > v for i, v in enumerate(nums)) <= 1

```
