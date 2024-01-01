---
title: 1672. Richest Customer Wealth
seoTitle: LeetCode 1672. Richest Customer Wealth | Python solution and explanation
description: 1672. Richest Customer Wealth
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1672
---

[LeetCode problem 1672](https://leetcode.com/problems/richest-customer-wealth/)

```python
class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        return max(sum(v) for v in accounts)

```
