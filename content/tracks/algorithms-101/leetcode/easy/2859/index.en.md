---
title: Sum of Values at Indices With K Set Bits
seoTitle: LeetCode Sum of Values at Indices With K Set Bits | Python solution and explanation
description: Sum of Values at Indices With K Set Bits
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2859
---

[LeetCode problem 2859](https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/)

```python
class Solution:
    def sumIndicesWithKSetBits(self, nums: List[int], k: int) -> int:
        return sum(x for i, x in enumerate(nums) if i.bit_count() == k)
```
