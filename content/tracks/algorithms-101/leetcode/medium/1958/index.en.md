---
title: 1958. Check if Move is Legal
seoTitle: LeetCode 1958. Check if Move is Legal | Python solution and explanation
description: 1958. Check if Move is Legal
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1958
---

[LeetCode problem 1958](https://leetcode.com/problems/check-if-move-is-legal/)

```python
class Solution:
    def checkMove(
        self, board: List[List[str]], rMove: int, cMove: int, color: str
    ) -> bool:
        dirs = [(1, 0), (0, 1), (-1, 0), (0, -1), (1, 1), (1, -1), (-1, 1), (-1, -1)]
        n = 8
        for a, b in dirs:
            i, j = rMove, cMove
            t = 0
            while 0 <= i + a < n and 0 <= j + b < n:
                t += 1
                i, j = i + a, j + b
                if board[i][j] in ['.', color]:
                    break
            if board[i][j] == color and t > 1:
                return True
        return False

```
