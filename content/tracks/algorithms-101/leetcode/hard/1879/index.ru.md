---
title: 1879. Minimum XOR Sum of Two Arrays
seoTitle: LeetCode 1879. Minimum XOR Sum of Two Arrays | Python solution and explanation
description: 1879. Minimum XOR Sum of Two Arrays
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1879
---

[LeetCode problem 1879](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/)

```python
class Solution:
    def minimumXORSum(self, nums1: List[int], nums2: List[int]) -> int:
        n = len(nums2)
        f = [inf] * (1 << n)
        f[0] = 0
        for i in range(1, 1 << n):
            k = i.bit_count() - 1
            for j in range(n):
                if i >> j & 1:
                    f[i] = min(f[i], f[i ^ (1 << j)] + (nums1[k] ^ nums2[j]))
        return f[-1]

```
