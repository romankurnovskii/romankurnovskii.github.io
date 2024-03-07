---
title: 2855. Minimum Right Shifts to Sort the Array
seoTitle: LeetCode 2855. Minimum Right Shifts to Sort the Array | Python solution and explanation
description: Minimum Right Shifts to Sort the Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2855
---

[LeetCode problem 2855](https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/)

```python
class Solution:
    def minimumRightShifts(self, nums: List[int]) -> int:
        n = len(nums)
        i = 1
        while i < n and nums[i - 1] < nums[i]:
            i += 1
        k = i + 1
        while k < n and nums[k - 1] < nums[k] < nums[0]:
            k += 1
        return -1 if k < n else n - i
```
