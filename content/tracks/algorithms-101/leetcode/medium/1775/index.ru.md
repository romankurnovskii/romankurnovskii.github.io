---
title: 1775. Equal Sum Arrays With Minimum Number of Operations
seoTitle: LeetCode 1775. Equal Sum Arrays With Minimum Number of Operations | Python solution and explanation
description: 1775. Equal Sum Arrays With Minimum Number of Operations
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1775
---

[LeetCode problem 1775](https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/)

```python
class Solution:
    def minOperations(self, nums1: List[int], nums2: List[int]) -> int:
        s1, s2 = sum(nums1), sum(nums2)
        if s1 == s2:
            return 0
        if s1 > s2:
            return self.minOperations(nums2, nums1)
        cnt = Counter([6 - v for v in nums1] + [v - 1 for v in nums2])
        d = s2 - s1
        res = 0
        for i in range(5, 0, -1):
            while cnt[i] and d > 0:
                d -= i
                cnt[i] -= 1
                res += 1
        return res if d <= 0 else -1

```
