---
title: 2221. Find Triangular Sum of an Array
seoTitle: LeetCode 2221. Find Triangular Sum of an Array | Python solution and explanation
description: 2221. Find Triangular Sum of an Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2221
---

[LeetCode problem 2221](https://leetcode.com/problems/find-triangular-sum-of-an-array/)

```python
class Solution:
    def triangularSum(self, nums: List[int]) -> int:
        n = len(nums)
        for i in range(n, 0, -1):
            for j in range(i - 1):
                nums[j] = (nums[j] + nums[j + 1]) % 10
        return nums[0]

```
