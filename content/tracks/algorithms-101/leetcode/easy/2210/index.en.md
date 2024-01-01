---
title: 2210. Count Hills and Valleys in an Array
seoTitle: LeetCode 2210. Count Hills and Valleys in an Array | Python solution and explanation
description: 2210. Count Hills and Valleys in an Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2210
---

[LeetCode problem 2210](https://leetcode.com/problems/count-hills-and-valleys-in-an-array/)

```python
class Solution:
    def countHillValley(self, nums: List[int]) -> int:
        res = j = 0
        for i in range(1, len(nums) - 1):
            if nums[i] == nums[i + 1]:
                continue
            if nums[i] > nums[j] and nums[i] > nums[i + 1]:
                res += 1
            if nums[i] < nums[j] and nums[i] < nums[i + 1]:
                res += 1
            j = i
        return res

```
