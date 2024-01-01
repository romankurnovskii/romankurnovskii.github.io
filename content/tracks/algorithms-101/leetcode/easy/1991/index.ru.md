---
title: 1991. Find the Middle Index in Array
seoTitle: LeetCode 1991. Find the Middle Index in Array | Python solution and explanation
description: 1991. Find the Middle Index in Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1991
---

[LeetCode problem 1991](https://leetcode.com/problems/find-the-middle-index-in-array/)

```python
class Solution:
    def findMiddleIndex(self, nums: List[int]) -> int:
        left, right = 0, sum(nums)
        for i, x in enumerate(nums):
            right -= x
            if left == right:
                return i
            left += x
        return -1

```
