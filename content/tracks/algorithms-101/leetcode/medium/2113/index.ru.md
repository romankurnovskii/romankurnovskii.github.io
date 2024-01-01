---
title: 2113. Elements in Array After Removing and Replacing Elements
seoTitle: LeetCode 2113. Elements in Array After Removing and Replacing Elements | Python solution and explanation
description: 2113. Elements in Array After Removing and Replacing Elements
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2113
---

[LeetCode problem 2113](https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/)

```python
class Solution:
    def elementInNums(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        n, m = len(nums), len(queries)
        res = [-1] * m
        for j, (t, i) in enumerate(queries):
            t %= 2 * n
            if t < n and i < n - t:
                res[j] = nums[i + t]
            elif t > n and i < t - n:
                res[j] = nums[i]
        return res

```
