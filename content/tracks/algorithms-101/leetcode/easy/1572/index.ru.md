---
title: 1572. Matrix Diagonal Sum
seoTitle: LeetCode 1572. Matrix Diagonal Sum | Python solution and explanation
description: 1572. Matrix Diagonal Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1572
---

[LeetCode problem 1572](https://leetcode.com/problems/matrix-diagonal-sum/)

```python
class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        res = 0
        n = len(mat)
        for i, row in enumerate(mat):
            j = n - i - 1
            res += row[i] + (0 if j == i else row[j])
        return res

```
