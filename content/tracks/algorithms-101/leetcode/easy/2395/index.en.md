---
title: 2395. Find Subarrays With Equal Sum
seoTitle: LeetCode 2395. Find Subarrays With Equal Sum | Python solution and explanation
description: 2395. Find Subarrays With Equal Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2395
---

[LeetCode problem 2395](https://leetcode.com/problems/find-subarrays-with-equal-sum/)

```python
class Solution:
    def findSubarrays(self, nums: List[int]) -> bool:
        vis = set()
        for a, b in pairwise(nums):
            if (x := a + b) in vis:
                return True
            vis.add(x)
        return False

```
