---
title: 2444. Count Subarrays With Fixed Bounds
seoTitle: LeetCode 2444. Count Subarrays With Fixed Bounds | Python solution and explanation
description: 2444. Count Subarrays With Fixed Bounds
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2444
---

[LeetCode problem 2444](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/)

```python
class Solution:
    def countSubarrays(self, nums: List[int], minK: int, maxK: int) -> int:
        j1 = j2 = k = -1
        res = 0
        for i, v in enumerate(nums):
            if v < minK or v > maxK:
                k = i
            if v == minK:
                j1 = i
            if v == maxK:
                j2 = i
            res += max(0, min(j1, j2) - k)
        return res
```
