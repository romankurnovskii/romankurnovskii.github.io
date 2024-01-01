---
title: 1885. Count Pairs in Two Arrays
seoTitle: LeetCode 1885. Count Pairs in Two Arrays | Python solution and explanation
description: 1885. Count Pairs in Two Arrays
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1885
---

[LeetCode problem 1885](https://leetcode.com/problems/count-pairs-in-two-arrays/)

```python
class Solution:
    def countPairs(self, nums1: List[int], nums2: List[int]) -> int:
        n = len(nums1)
        d = [nums1[i] - nums2[i] for i in range(n)]
        d.sort()
        return sum(n - bisect_right(d, -v, lo=i + 1) for i, v in enumerate(d))

```
