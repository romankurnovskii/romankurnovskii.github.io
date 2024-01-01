---
title: 2340. Minimum Adjacent Swaps to Make a Valid Array
seoTitle: LeetCode 2340. Minimum Adjacent Swaps to Make a Valid Array | Python solution and explanation
description: 2340. Minimum Adjacent Swaps to Make a Valid Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2340
---

[LeetCode problem 2340](https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/)

```python
class Solution:
    def minimumSwaps(self, nums: List[int]) -> int:
        i = j = 0
        for k, v in enumerate(nums):
            if v < nums[i] or (v == nums[i] and k < i):
                i = k
            if v >= nums[j] or (v == nums[j] and k > j):
                j = k
        return 0 if i == j else i + len(nums) - 1 - j - (i > j)

```
