---
title: 2295. Replace Elements in an Array
seoTitle: LeetCode 2295. Replace Elements in an Array | Python solution and explanation
description: 2295. Replace Elements in an Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2295
---

[LeetCode problem 2295](https://leetcode.com/problems/replace-elements-in-an-array/)

```python
class Solution:
    def arrayChange(self, nums: List[int], operations: List[List[int]]) -> List[int]:
        d = {v: i for i, v in enumerate(nums)}
        for a, b in operations:
            nums[d[a]] = b
            d[b] = d[a]
        return nums

```
