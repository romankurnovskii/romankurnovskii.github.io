---
title: 2319. Check if Matrix Is X-Matrix
seoTitle: LeetCode 2319. Check if Matrix Is X-Matrix | Python solution and explanation
description: 2319. Check if Matrix Is X-Matrix
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2319
---

[LeetCode problem 2319](https://leetcode.com/problems/check-if-matrix-is-x-matrix/)

```python
class Solution:
    def checkXMatrix(self, grid: List[List[int]]) -> bool:
        for i, row in enumerate(grid):
            for j, v in enumerate(row):
                if i == j or i + j == len(grid) - 1:
                    if v == 0:
                        return False
                elif v:
                    return False
        return True

```
