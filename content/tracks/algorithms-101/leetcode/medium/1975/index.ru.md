---
title: 1975. Maximum Matrix Sum
seoTitle: LeetCode 1975. Maximum Matrix Sum | Python solution and explanation
description: 1975. Maximum Matrix Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1975
---

[LeetCode problem 1975](https://leetcode.com/problems/maximum-matrix-sum/)

```python
class Solution:
    def maxMatrixSum(self, matrix: List[List[int]]) -> int:
        s = cnt = 0
        mi = inf
        for row in matrix:
            for v in row:
                s += abs(v)
                mi = min(mi, abs(v))
                if v < 0:
                    cnt += 1
        if cnt % 2 == 0 or mi == 0:
            return s
        return s - mi * 2

```
