---
title: 1818. Minimum Absolute Sum Difference
seoTitle: LeetCode 1818. Minimum Absolute Sum Difference | Python solution and explanation
description: 1818. Minimum Absolute Sum Difference
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1818
---

[LeetCode problem 1818](https://leetcode.com/problems/minimum-absolute-sum-difference/)

```python
class Solution:
    def minAbsoluteSumDiff(self, nums1: List[int], nums2: List[int]) -> int:
        mod = 10**9 + 7
        nums = sorted(nums1)
        s = sum(abs(a - b) for a, b in zip(nums1, nums2)) % mod
        mx = 0
        for a, b in zip(nums1, nums2):
            d1, d2 = abs(a - b), inf
            i = bisect_left(nums, b)
            if i < len(nums):
                d2 = min(d2, abs(nums[i] - b))
            if i:
                d2 = min(d2, abs(nums[i - 1] - b))
            mx = max(mx, d1 - d2)
        return (s - mx + mod) % mod

```
