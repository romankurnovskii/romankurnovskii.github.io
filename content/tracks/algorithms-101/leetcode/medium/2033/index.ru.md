---
title: 2033. Minimum Operations to Make a Uni-Value Grid
seoTitle: LeetCode 2033. Minimum Operations to Make a Uni-Value Grid | Python solution and explanation
description: 2033. Minimum Operations to Make a Uni-Value Grid
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2033
---

[LeetCode problem 2033](https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/)

```python
class Solution:
    def minOperations(self, grid: List[List[int]], x: int) -> int:
        nums = []
        mod = grid[0][0] % x
        for row in grid:
            for v in row:
                if v % x != mod:
                    return -1
                nums.append(v)
        nums.sort()
        mid = nums[len(nums) >> 1]
        return sum(abs(v - mid) // x for v in nums)

```
