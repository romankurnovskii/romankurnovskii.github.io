---
title: 2280. Minimum Lines to Represent a Line Chart
seoTitle: LeetCode 2280. Minimum Lines to Represent a Line Chart | Python solution and explanation
description: 2280. Minimum Lines to Represent a Line Chart
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2280
---

[LeetCode problem 2280](https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/)

```python
class Solution:
    def minimumLines(self, stockPrices: List[List[int]]) -> int:
        stockPrices.sort()
        dx, dy = 0, 1
        res = 0
        for (x, y), (x1, y1) in pairwise(stockPrices):
            dx1, dy1 = x1 - x, y1 - y
            if dy * dx1 != dx * dy1:
                res += 1
            dx, dy = dx1, dy1
        return res

```
