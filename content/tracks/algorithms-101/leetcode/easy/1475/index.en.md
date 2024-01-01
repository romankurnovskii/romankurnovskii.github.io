---
title: 1475. Final Prices With a Special Discount in a Shop
seoTitle: LeetCode 1475. Final Prices With a Special Discount in a Shop | Python solution and explanation
description: 1475. Final Prices With a Special Discount in a Shop
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1475
---

[LeetCode problem 1475](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/)

```python
class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        stk = []
        res = prices[:]
        for i in range(len(prices) - 1, -1, -1):
            while stk and prices[stk[-1]] > prices[i]:
                stk.pop()
            if stk:
                res[i] -= prices[stk[-1]]
            stk.append(i)
        return res

```
