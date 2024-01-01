---
title: 1380. Lucky Numbers in a Matrix
seoTitle: LeetCode 1380. Lucky Numbers in a Matrix | Python solution and explanation
description: 1380. Lucky Numbers in a Matrix
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1380
---

[LeetCode problem 1380](https://leetcode.com/problems/lucky-numbers-in-a-matrix/)

```python
class Solution:
    def luckyNumbers(self, matrix: List[List[int]]) -> List[int]:
        rows = {min(row) for row in matrix}
        cols = {max(col) for col in zip(*matrix)}
        return list(rows & cols)

```
