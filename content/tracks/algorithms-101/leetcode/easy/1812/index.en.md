---
title: 1812. Determine Color of a Chessboard Square
seoTitle: LeetCode 1812. Determine Color of a Chessboard Square | Python solution and explanation
description: 1812. Determine Color of a Chessboard Square
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1812
---

[LeetCode problem 1812](https://leetcode.com/problems/determine-color-of-a-chessboard-square/)

```python
class Solution:
    def squareIsWhite(self, coordinates: str) -> bool:
        return (ord(coordinates[0]) + ord(coordinates[1])) % 2 == 1

```
