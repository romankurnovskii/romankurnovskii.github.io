---
title: 1983. Widest Pair of Indices With Equal Range Sum
seoTitle: LeetCode 1983. Widest Pair of Indices With Equal Range Sum | Python solution and explanation
description: 1983. Widest Pair of Indices With Equal Range Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1983
---

[LeetCode problem 1983](https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/)

```python
class Solution:
    def widestPairOfIndices(self, nums1: List[int], nums2: List[int]) -> int:
        d = {0: -1}
        res = s = 0
        for i, (a, b) in enumerate(zip(nums1, nums2)):
            s += a - b
            if s in d:
                res = max(res, i - d[s])
            else:
                d[s] = i
        return res

```
