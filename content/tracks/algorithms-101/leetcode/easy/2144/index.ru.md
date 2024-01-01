---
title: 2144. Minimum Cost of Buying Candies With Discount
seoTitle: LeetCode 2144. Minimum Cost of Buying Candies With Discount | Python solution and explanation
description: 2144. Minimum Cost of Buying Candies With Discount
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2144
---

[LeetCode problem 2144](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/)

```python
class Solution:
    def minimumCost(self, cost: List[int]) -> int:
        cost.sort(reverse=True)
        return sum(cost) - sum(cost[2::3])

```
