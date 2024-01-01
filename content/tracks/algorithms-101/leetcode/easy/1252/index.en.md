---
title: 1252. Cells with Odd Values in a Matrix
seoTitle: LeetCode 1252. Cells with Odd Values in a Matrix | Python solution and explanation
description: 1252. Cells with Odd Values in a Matrix
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1252
---

[LeetCode problem 1252](https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/)

```python
class Solution:
    def oddCells(self, m: int, n: int, indices: List[List[int]]) -> int:
        row = [0] * m
        col = [0] * n
        for r, c in indices:
            row[r] += 1
            col[c] += 1
        cnt1 = sum(v % 2 for v in row)
        cnt2 = sum(v % 2 for v in col)
        return cnt1 * (n - cnt2) + cnt2 * (m - cnt1)

```
