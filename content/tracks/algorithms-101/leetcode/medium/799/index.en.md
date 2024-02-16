---
title: 799. Champagne Tower
seoTitle: LeetCode 799. Champagne Tower | Python solution and explanation
description: 799. Champagne Tower
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 799
---

[LeetCode problem 799](https://leetcode.com/problems/champagne-tower/)

```python
class Solution:
    def champagneTower(self, poured: int, query_row: int, query_glass: int) -> float:
        f = [poured]
        for i in range(1, query_row + 1):
            g = [0] * (i + 1)
            for j, v in enumerate(f):
                if v > 1:
                    half = (v - 1) / 2
                    g[j] += half
                    g[j + 1] += half
            f = g
        return min(1, f[query_glass])

```
