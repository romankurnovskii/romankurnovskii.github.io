---
title: 2240. Number of Ways to Buy Pens and Pencils
seoTitle: LeetCode 2240. Number of Ways to Buy Pens and Pencils | Python solution and explanation
description: 2240. Number of Ways to Buy Pens and Pencils
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2240
---

[LeetCode problem 2240](https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/)

```python
class Solution:
    def waysToBuyPensPencils(self, total: int, cost1: int, cost2: int) -> int:
        res = 0
        for x in range(total // cost1 + 1):
            y = (total - (x * cost1)) // cost2 + 1
            res += y
        return res

```
