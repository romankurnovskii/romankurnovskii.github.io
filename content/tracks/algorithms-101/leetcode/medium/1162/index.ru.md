---
title: 1162. As Far from Land as Possible
seoTitle: LeetCode 1162. As Far from Land as Possible | Python solution and explanation
description: 1162. As Far from Land as Possible
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1162
---

[LeetCode problem 1162](https://leetcode.com/problems/as-far-from-land-as-possible/)

```python
class Solution:
    def maxDistance(self, grid: List[List[int]]) -> int:
        n = len(grid)
        q = deque((i, j) for i in range(n) for j in range(n) if grid[i][j])
        res = -1
        if len(q) in (0, n * n):
            return res
        dirs = (-1, 0, 1, 0, -1)
        while q:
            for _ in range(len(q)):
                i, j = q.popleft()
                for a, b in pairwise(dirs):
                    x, y = i + a, j + b
                    if 0 <= x < n and 0 <= y < n and grid[x][y] == 0:
                        grid[x][y] = 1
                        q.append((x, y))
            res += 1
        return res

```
