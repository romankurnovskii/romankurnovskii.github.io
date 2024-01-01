---
title: 1716. Calculate Money in Leetcode Bank
seoTitle: LeetCode 1716. Calculate Money in Leetcode Bank | Python solution and explanation
description: 1716. Calculate Money in Leetcode Bank
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1716
---

[LeetCode problem 1716](https://leetcode.com/problems/calculate-money-in-leetcode-bank/)

```python
class Solution:
    def totalMoney(self, n: int) -> int:
        a, b = divmod(n, 7)
        return (28 + 28 + 7 * (a - 1)) * a // 2 + (a * 2 + b + 1) * b // 2

```
