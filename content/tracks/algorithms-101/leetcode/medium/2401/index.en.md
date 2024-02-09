---
title: 2401. Longest Nice Subarray
seoTitle: LeetCode 2401. Longest Nice Subarray | Python solution and explanation
description: 2401. Longest Nice Subarray
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2401
---

[LeetCode problem 2401](https://leetcode.com/problems/longest-nice-subarray/)

```python
class Solution:
    def longestNiceSubarray(self, nums: List[int]) -> int:
        res = j = mask = 0
        for i, x in enumerate(nums):
            while mask & x:
                mask ^= nums[j]
                j += 1
            res = max(res, i - j + 1)
            mask |= x
        return res

```