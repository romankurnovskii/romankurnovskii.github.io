---
title: 2091. Removing Minimum and Maximum From Array
seoTitle: LeetCode 2091. Removing Minimum and Maximum From Array | Python solution and explanation
description: 2091. Removing Minimum and Maximum From Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2091
---

[LeetCode problem 2091](https://leetcode.com/problems/removing-minimum-and-maximum-from-array/)

```python
class Solution:
    def minimumDeletions(self, nums: List[int]) -> int:
        mi = mx = 0
        for i, num in enumerate(nums):
            if num < nums[mi]:
                mi = i
            if num > nums[mx]:
                mx = i
        if mi > mx:
            mi, mx = mx, mi
        return min(mx + 1, len(nums) - mi, mi + 1 + len(nums) - mx)

```
