---
title: 1727. Largest Submatrix With Rearrangements
seoTitle: LeetCode 1727. Largest Submatrix With Rearrangements | Python solution and explanation
description: 1727. Largest Submatrix With Rearrangements
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1727
---

[LeetCode problem 1727](https://leetcode.com/problems/largest-submatrix-with-rearrangements/)

```python
class Solution:
    def largestSubmatrix(self, matrix: List[List[int]]) -> int:
        for i in range(1, len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j]:
                    matrix[i][j] = matrix[i - 1][j] + 1
        res = 0
        for row in matrix:
            row.sort(reverse=True)
            for j, v in enumerate(row, 1):
                res = max(res, j * v)
        return res

```
