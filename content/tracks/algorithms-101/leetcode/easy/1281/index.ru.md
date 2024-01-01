---
title: 1281. Subtract the Product and Sum of Digits of an Integer
seoTitle: LeetCode 1281. Subtract the Product and Sum of Digits of an Integer | Python solution and explanation
description: 1281. Subtract the Product and Sum of Digits of an Integer
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1281
---

[LeetCode problem 1281](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/)

```python
class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        nums = list(map(int, str(n)))
        return prod(nums) - sum(nums)

```
