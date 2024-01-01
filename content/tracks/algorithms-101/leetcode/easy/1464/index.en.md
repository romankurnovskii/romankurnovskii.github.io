---
title: 1464. Maximum Product of Two Elements in an Array
seoTitle: LeetCode 1464. Maximum Product of Two Elements in an Array | Python solution and explanation
description: 1464. Maximum Product of Two Elements in an Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1464
---

[LeetCode problem 1464](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/)

```python
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        a = b = 0
        for v in nums:
            if v > a:
                a, b = v, a
            elif v > b:
                b = v
        return (a - 1) * (b - 1)

```
