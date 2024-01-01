---
title: 2412. Minimum Money Required Before Transactions
seoTitle: LeetCode 2412. Minimum Money Required Before Transactions | Python solution and explanation
description: 2412. Minimum Money Required Before Transactions
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2412
---

[LeetCode problem 2412](https://leetcode.com/problems/minimum-money-required-before-transactions/)

```python
class Solution:
    def minimumMoney(self, transactions: List[List[int]]) -> int:
        s = sum(max(0, a - b) for a, b in transactions)
        res = 0
        for a, b in transactions:
            if a > b:
                res = max(res, s + b)
            else:
                res = max(res, s + a)
        return res

```
