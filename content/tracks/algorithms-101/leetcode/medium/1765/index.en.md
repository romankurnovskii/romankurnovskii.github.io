---
title: 1765. Map of Highest Peak
seoTitle: LeetCode 1765. Map of Highest Peak | Python solution and explanation
description: 1765. Map of Highest Peak
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1765
---

[LeetCode problem 1765](https://leetcode.com/problems/map-of-highest-peak/)

```python
class Solution:
    def highestPeak(self, isWater: List[List[int]]) -> List[List[int]]:
        m, n = len(isWater), len(isWater[0])
        res = [[-1] * n for _ in range(m)]
        q = deque()
        for i, row in enumerate(isWater):
            for j, v in enumerate(row):
                if v:
                    q.append((i, j))
                    res[i][j] = 0
        while q:
            for _ in range(len(q)):
                i, j = q.popleft()
                for a, b in pairwise((-1, 0, 1, 0, -1)):
                    x, y = i + a, j + b
                    if 0 <= x < m and 0 <= y < n and res[x][y] == -1:
                        res[x][y] = res[i][j] + 1
                        q.append((x, y))
        return res

```
