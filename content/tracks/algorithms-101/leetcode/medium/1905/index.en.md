---
title: 1905. Count Sub Islands
seoTitle: LeetCode 1905. Count Sub Islands | Python solution and explanation
description: 1905. Count Sub Islands
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1905
---

[LeetCode problem 1905](https://leetcode.com/problems/count-sub-islands/)

```python
class Solution:
    def countSubIslands(self, grid1: List[List[int]], grid2: List[List[int]]) -> int:
        def bfs(i: int, j: int) -> int:
            ok = grid1[i][j]
            q = deque([(i, j)])
            grid2[i][j] = 0
            while q:
                i, j = q.popleft()
                for a, b in pairwise(dirs):
                    x, y = i + a, j + b
                    if 0 <= x < m and 0 <= y < n and grid2[x][y]:
                        q.append((x, y))
                        ok = ok & grid1[x][y]
                        grid2[x][y] = 0
            return ok

        m, n = len(grid1), len(grid1[0])
        dirs = (-1, 0, 1, 0, -1)
        return sum(bfs(i, j) for i in range(m) for j in range(n) if grid2[i][j])

```
