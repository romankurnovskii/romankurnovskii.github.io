---
title: 2291. Maximum Profit From Trading Stocks
seoTitle: LeetCode 2291. Maximum Profit From Trading Stocks | Python solution and explanation
description: 2291. Maximum Profit From Trading Stocks
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2291
---

[LeetCode problem 2291](https://leetcode.com/problems/maximum-profit-from-trading-stocks/)

```python
class Solution:
    def maximumProfit(self, present: List[int], future: List[int], budget: int) -> int:
        f = [0] * (budget + 1)
        for a, b in zip(present, future):
            for j in range(budget, a - 1, -1):
                f[j] = max(f[j], f[j - a] + b - a)
        return f[-1]

```
