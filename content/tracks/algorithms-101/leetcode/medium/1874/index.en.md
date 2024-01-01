---
title: 1874. Minimize Product Sum of Two Arrays
seoTitle: LeetCode 1874. Minimize Product Sum of Two Arrays | Python solution and explanation
description: 1874. Minimize Product Sum of Two Arrays
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1874
---

[LeetCode problem 1874](https://leetcode.com/problems/minimize-product-sum-of-two-arrays/)

```python
class Solution:
    def minProductSum(self, nums1: List[int], nums2: List[int]) -> int:
        nums1.sort()
        nums2.sort()
        n, res = len(nums1), 0
        for i in range(n):
            res += nums1[i] * nums2[n - i - 1]
        return res

```
