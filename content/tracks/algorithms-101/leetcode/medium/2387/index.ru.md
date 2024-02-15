---
title: 2387. Median of a Row Wise Sorted Matrix
seoTitle: LeetCode 2387. Median of a Row Wise Sorted Matrix | Python solution and explanation
description: 2387. Median of a Row Wise Sorted Matrix
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2387
---

[LeetCode problem 2387](https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/)

```python
class Solution:
    def matrixMedian(self, grid: List[List[int]]) -> int:
        def count(x):
            return sum(bisect_right(row, x) for row in grid)

        m, n = len(grid), len(grid[0])
        target = (m * n + 1) >> 1
        return bisect_left(range(10**6 + 1), target, key=count)

```
