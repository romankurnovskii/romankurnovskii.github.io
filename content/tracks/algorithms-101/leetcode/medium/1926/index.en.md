---
title: 1926. Nearest Exit from Entrance in Maze
seoTitle: LeetCode 1926. Nearest Exit from Entrance in Maze | Python solution and explanation
description: 1926. Nearest Exit from Entrance in Maze
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1926
---

[LeetCode problem 1926](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/)

```python
class Solution:
    def nearestExit(self, maze: List[List[str]], entrance: List[int]) -> int:
        m, n = len(maze), len(maze[0])
        i, j = entrance
        q = deque([(i, j)])
        maze[i][j] = '+'
        res = 0
        while q:
            res += 1
            for _ in range(len(q)):
                i, j = q.popleft()
                for a, b in [[0, -1], [0, 1], [-1, 0], [1, 0]]:
                    x, y = i + a, j + b
                    if 0 <= x < m and 0 <= y < n and maze[x][y] == '.':
                        if x == 0 or x == m - 1 or y == 0 or y == n - 1:
                            return res
                        q.append((x, y))
                        maze[x][y] = '+'
        return -1

```
