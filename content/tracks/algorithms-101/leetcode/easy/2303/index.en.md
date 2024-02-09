---
title: 2303. Calculate Amount Paid in Taxes
seoTitle: LeetCode 2303. Calculate Amount Paid in Taxes | Python solution and explanation
description: 2303. Calculate Amount Paid in Taxes
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2303
---

[LeetCode problem 2303](https://leetcode.com/problems/calculate-amount-paid-in-taxes/)

```python
class Solution:
    def calculateTax(self, brackets: List[List[int]], income: int) -> float:
        res = prev = 0
        for upper, percent in brackets:
            res += max(0, min(income, upper) - prev) * percent
            prev = upper
        return res / 100

```