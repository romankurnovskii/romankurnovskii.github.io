---
title: 2120. Execution of All Suffix Instructions Staying in a Grid
seoTitle: LeetCode 2120. Execution of All Suffix Instructions Staying in a Grid | Python solution and explanation
description: 2120. Execution of All Suffix Instructions Staying in a Grid
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2120
---

[LeetCode problem 2120](https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/)

```python
class Solution:
    def executeInstructions(self, n: int, startPos: List[int], s: str) -> List[int]:
        res = []
        m = len(s)
        mp = {"L": [0, -1], "R": [0, 1], "U": [-1, 0], "D": [1, 0]}
        for i in range(m):
            x, y = startPos
            t = 0
            for j in range(i, m):
                a, b = mp[s[j]]
                if 0 <= x + a < n and 0 <= y + b < n:
                    x, y, t = x + a, y + b, t + 1
                else:
                    break
            res.append(t)
        return res

```
