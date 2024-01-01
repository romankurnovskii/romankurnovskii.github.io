---
title: 1761. Minimum Degree of a Connected Trio in a Graph
seoTitle: LeetCode 1761. Minimum Degree of a Connected Trio in a Graph | Python solution and explanation
description: 1761. Minimum Degree of a Connected Trio in a Graph
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1761
---

[LeetCode problem 1761](https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph/)

```python
class Solution:
    def minTrioDegree(self, n: int, edges: List[List[int]]) -> int:
        g = [[False] * n for _ in range(n)]
        deg = [0] * n
        for u, v in edges:
            u, v = u - 1, v - 1
            g[u][v] = g[v][u] = True
            deg[u] += 1
            deg[v] += 1
        res = inf
        for i in range(n):
            for j in range(i + 1, n):
                if g[i][j]:
                    for k in range(j + 1, n):
                        if g[i][k] and g[j][k]:
                            res = min(res, deg[i] + deg[j] + deg[k] - 6)
        return -1 if res == inf else res

```
