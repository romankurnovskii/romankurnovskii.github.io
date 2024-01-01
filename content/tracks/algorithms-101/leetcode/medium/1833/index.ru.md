---
title: 1833. Maximum Ice Cream Bars
seoTitle: LeetCode 1833. Maximum Ice Cream Bars | Python solution and explanation
description: 1833. Maximum Ice Cream Bars
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1833
---

[LeetCode problem 1833](https://leetcode.com/problems/maximum-ice-cream-bars/)

```python
class Solution:
    def maxIceCream(self, costs: List[int], coins: int) -> int:
        costs.sort()
        for i, c in enumerate(costs):
            if coins < c:
                return i
            coins -= c
        return len(costs)

```
