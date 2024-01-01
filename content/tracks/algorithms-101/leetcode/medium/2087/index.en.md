---
title: 2087. Minimum Cost Homecoming of a Robot in a Grid
seoTitle: LeetCode 2087. Minimum Cost Homecoming of a Robot in a Grid | Python solution and explanation
description: 2087. Minimum Cost Homecoming of a Robot in a Grid
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2087
---

[LeetCode problem 2087](https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/)

```python
class Solution:
    def minCost(
        self,
        startPos: List[int],
        homePos: List[int],
        rowCosts: List[int],
        colCosts: List[int],
    ) -> int:
        i, j = startPos
        x, y = homePos
        res = 0
        if i < x:
            res += sum(rowCosts[i + 1 : x + 1])
        else:
            res += sum(rowCosts[x:i])
        if j < y:
            res += sum(colCosts[j + 1 : y + 1])
        else:
            res += sum(colCosts[y:j])
        return res

```
