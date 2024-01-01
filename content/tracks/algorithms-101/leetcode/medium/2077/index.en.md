---
title: 2077. Paths in Maze That Lead to Same Room
seoTitle: LeetCode 2077. Paths in Maze That Lead to Same Room | Python solution and explanation
description: 2077. Paths in Maze That Lead to Same Room
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2077
---

[LeetCode problem 2077](https://leetcode.com/problems/paths-in-maze-that-lead-to-same-room/)

```python
class Solution:
    def numberOfPaths(self, n: int, corridors: List[List[int]]) -> int:
        g = defaultdict(set)
        for a, b in corridors:
            g[a].add(b)
            g[b].add(a)
        res = 0
        for i in range(1, n + 1):
            for j, k in combinations(g[i], 2):
                if j in g[k]:
                    res += 1
        return res // 3

```
