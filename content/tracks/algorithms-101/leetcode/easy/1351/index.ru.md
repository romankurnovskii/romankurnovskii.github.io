---
title: 1351. Count Negative Numbers in a Sorted Matrix
seoTitle: LeetCode 1351. Count Negative Numbers in a Sorted Matrix | Python solution and explanation
description: 1351. Count Negative Numbers in a Sorted Matrix
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1351
---

[LeetCode problem 1351](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/)

```python
class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        return sum(bisect_left(row[::-1], 0) for row in grid)

```
