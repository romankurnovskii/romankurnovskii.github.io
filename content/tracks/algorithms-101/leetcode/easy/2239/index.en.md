---
title: 2239. Find Closest Number to Zero
seoTitle: LeetCode 2239. Find Closest Number to Zero | Python solution and explanation
description: 2239. Find Closest Number to Zero
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2239
---

[LeetCode problem 2239](https://leetcode.com/problems/find-closest-number-to-zero/)

```python
class Solution:
    def findClosestNumber(self, nums: List[int]) -> int:
        res, d = 0, inf
        for x in nums:
            if (y := abs(x)) < d or (y == d and x > res):
                res, d = x, y
        return res

```
