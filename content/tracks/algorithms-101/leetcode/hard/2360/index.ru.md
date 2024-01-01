---
title: 2360. Longest Cycle in a Graph
seoTitle: LeetCode 2360. Longest Cycle in a Graph | Python solution and explanation
description: 2360. Longest Cycle in a Graph
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2360
---

[LeetCode problem 2360](https://leetcode.com/problems/longest-cycle-in-a-graph/)

```python
class Solution:
    def longestCycle(self, edges: List[int]) -> int:
        n = len(edges)
        vis = [False] * n
        res = -1
        for i in range(n):
            if vis[i]:
                continue
            j = i
            cycle = []
            while j != -1 and not vis[j]:
                vis[j] = True
                cycle.append(j)
                j = edges[j]
            if j == -1:
                continue
            m = len(cycle)
            k = next((k for k in range(m) if cycle[k] == j), inf)
            res = max(res, m - k)
        return res

```
