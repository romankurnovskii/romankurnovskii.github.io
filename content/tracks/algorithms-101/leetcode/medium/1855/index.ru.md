---
title: 1855. Maximum Distance Between a Pair of Values
seoTitle: LeetCode 1855. Maximum Distance Between a Pair of Values | Python solution and explanation
description: 1855. Maximum Distance Between a Pair of Values
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1855
---

[LeetCode problem 1855](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/)

```python
class Solution:
    def maxDistance(self, nums1: List[int], nums2: List[int]) -> int:
        m, n = len(nums1), len(nums2)
        res = i = j = 0
        while i < m:
            while j < n and nums1[i] <= nums2[j]:
                j += 1
            res = max(res, j - i - 1)
            i += 1
        return res

```
