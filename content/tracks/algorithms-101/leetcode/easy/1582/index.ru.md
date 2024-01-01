---
title: 1582. Special Positions in a Binary Matrix
seoTitle: LeetCode 1582. Special Positions in a Binary Matrix | Python solution and explanation
description: 1582. Special Positions in a Binary Matrix
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1582
---

[LeetCode problem 1582](https://leetcode.com/problems/special-positions-in-a-binary-matrix/)

```python
class Solution:
    def numSpecial(self, mat: List[List[int]]) -> int:
        m, n = len(mat), len(mat[0])
        r = [0] * m
        c = [0] * n
        for i, row in enumerate(mat):
            for j, v in enumerate(row):
                r[i] += v
                c[j] += v
        res = 0
        for i in range(m):
            for j in range(n):
                if mat[i][j] == 1 and r[i] == 1 and c[j] == 1:
                    res += 1
        return res

```
