---
title: 1605. Find Valid Matrix Given Row and Column Sums
seoTitle: LeetCode 1605. Find Valid Matrix Given Row and Column Sums | Python solution and explanation
description: 1605. Find Valid Matrix Given Row and Column Sums
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1605
---

[LeetCode problem 1605](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/)

```python
class Solution:
    def restoreMatrix(self, rowSum: List[int], colSum: List[int]) -> List[List[int]]:
        m, n = len(rowSum), len(colSum)
        res = [[0] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                x = min(rowSum[i], colSum[j])
                res[i][j] = x
                rowSum[i] -= x
                colSum[j] -= x
        return res

```
