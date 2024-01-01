---
title: 2128. Remove All Ones With Row and Column Flips
seoTitle: LeetCode 2128. Remove All Ones With Row and Column Flips | Python solution and explanation
description: 2128. Remove All Ones With Row and Column Flips
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2128
---

[LeetCode problem 2128](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/)

```python
class Solution:
    def removeOnes(self, grid: List[List[int]]) -> bool:
        s = set()
        for row in grid:
            t = tuple(row) if row[0] == grid[0][0] else tuple(x ^ 1 for x in row)
            s.add(t)
        return len(s) == 1

```
