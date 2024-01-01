---
title: 2361. Minimum Costs Using the Train Line
seoTitle: LeetCode 2361. Minimum Costs Using the Train Line | Python solution and explanation
description: 2361. Minimum Costs Using the Train Line
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2361
---

[LeetCode problem 2361](https://leetcode.com/problems/minimum-costs-using-the-train-line/)

```python
class Solution:
    def minimumCosts(
        self, regular: List[int], express: List[int], expressCost: int
    ) -> List[int]:
        n = len(regular)
        f, g = 0, inf
        cost = [0] * n
        for i, (a, b) in enumerate(zip(regular, express), 1):
            ff = min(f + a, g + a)
            gg = min(f + expressCost + b, g + b)
            f, g = ff, gg
            cost[i - 1] = min(f, g)
        return cost

```
