---
title: 1764. Form Array by Concatenating Subarrays of Another Array
seoTitle: LeetCode 1764. Form Array by Concatenating Subarrays of Another Array | Python solution and explanation
description: 1764. Form Array by Concatenating Subarrays of Another Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1764
---

[LeetCode problem 1764](https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/)

```python
class Solution:
    def canChoose(self, groups: List[List[int]], nums: List[int]) -> bool:
        n, m = len(groups), len(nums)
        i = j = 0
        while i < n and j < m:
            g = groups[i]
            if g == nums[j : j + len(g)]:
                j += len(g)
                i += 1
            else:
                j += 1
        return i == n

```
