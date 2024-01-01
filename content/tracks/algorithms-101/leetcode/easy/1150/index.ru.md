---
title: 1150. Check If a Number Is Majority Element in a Sorted Array
seoTitle: LeetCode 1150. Check If a Number Is Majority Element in a Sorted Array | Python solution and explanation
description: 1150. Check If a Number Is Majority Element in a Sorted Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1150
---

[LeetCode problem 1150](https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/)

```python
class Solution:
    def isMajorityElement(self, nums: List[int], target: int) -> bool:
        left = bisect_left(nums, target)
        right = left + len(nums) // 2
        return right < len(nums) and nums[right] == target

```
