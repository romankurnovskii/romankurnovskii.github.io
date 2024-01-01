---
title: 1822. Sign of the Product of an Array
seoTitle: LeetCode 1822. Sign of the Product of an Array | Python solution and explanation
description: 1822. Sign of the Product of an Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1822
---

[LeetCode problem 1822](https://leetcode.com/problems/sign-of-the-product-of-an-array/)

```python
class Solution:
    def arraySign(self, nums: List[int]) -> int:
        res = 1
        for v in nums:
            if v == 0:
                return 0
            if v < 0:
                res *= -1
        return res

```
