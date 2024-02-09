---
title: 2335. Minimum Amount of Time to Fill Cups
seoTitle: LeetCode 2335. Minimum Amount of Time to Fill Cups | Python solution and explanation
description: 2335. Minimum Amount of Time to Fill Cups
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2335
---

[LeetCode problem 2335](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/)

```python
class Solution:
    def fillCups(self, amount: List[int]) -> int:
        amount.sort()
        if amount[0] + amount[1] <= amount[2]:
            return amount[2]
        return (sum(amount) + 1) // 2

```