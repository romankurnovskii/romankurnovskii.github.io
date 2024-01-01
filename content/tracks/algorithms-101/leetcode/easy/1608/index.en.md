---
title: 1608. Special Array With X Elements Greater Than or Equal X
seoTitle: LeetCode 1608. Special Array With X Elements Greater Than or Equal X | Python solution and explanation
description: 1608. Special Array With X Elements Greater Than or Equal X
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1608
---

[LeetCode problem 1608](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/)

```python
class Solution:
    def specialArray(self, nums: List[int]) -> int:
        nums.sort()
        n = len(nums)
        for x in range(1, n + 1):
            cnt = n - bisect_left(nums, x)
            if cnt == x:
                return x
        return -1

```
