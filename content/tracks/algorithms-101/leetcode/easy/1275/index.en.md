---
title: 1275. Find Winner on a Tic Tac Toe Game
seoTitle: LeetCode 1275. Find Winner on a Tic Tac Toe Game | Python solution and explanation
description: 1275. Find Winner on a Tic Tac Toe Game
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1275
---

[LeetCode problem 1275](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/)

```python
class Solution:
    def tictactoe(self, moves: List[List[int]]) -> str:
        n = len(moves)
        cnt = [0] * 8
        for k in range(n - 1, -1, -2):
            i, j = moves[k]
            cnt[i] += 1
            cnt[j + 3] += 1
            if i == j:
                cnt[6] += 1
            if i + j == 2:
                cnt[7] += 1
            if any(v == 3 for v in cnt):
                return "B" if k & 1 else "A"
        return "Draw" if n == 9 else "Pending"

```
