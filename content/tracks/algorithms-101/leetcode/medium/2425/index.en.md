---
title: 2425. Bitwise XOR of All Pairings
seoTitle: LeetCode 2425. Bitwise XOR of All Pairings | Python solution and explanation
description: 2425. Bitwise XOR of All Pairings
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2425
---

[LeetCode problem 2425](https://leetcode.com/problems/bitwise-xor-of-all-pairings/)

```python
class Solution:
    def xorAllNums(self, nums1: List[int], nums2: List[int]) -> int:
        res = 0
        if len(nums2) & 1:
            for v in nums1:
                res ^= v
        if len(nums1) & 1:
            for v in nums2:
                res ^= v
        return res

```
