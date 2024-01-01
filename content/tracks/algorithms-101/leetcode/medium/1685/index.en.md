---
title: 1685. Sum of Absolute Differences in a Sorted Array
seoTitle: LeetCode 1685. Sum of Absolute Differences in a Sorted Array | Python solution and explanation
description: 1685. Sum of Absolute Differences in a Sorted Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1685
---

[LeetCode problem 1685](https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/)

```python
class Solution:
    def getSumAbsoluteDifferences(self, nums: List[int]) -> List[int]:
        res = []
        s, t = sum(nums), 0
        for i, x in enumerate(nums):
            v = x * i - t + s - t - x * (len(nums) - i)
            res.append(v)
            t += x
        return res

```
