---
title: 2316. Count Unreachable Pairs of Nodes in an Undirected Graph
seoTitle: LeetCode 2316. Count Unreachable Pairs of Nodes in an Undirected Graph | Python solution and explanation
description: 2316. Count Unreachable Pairs of Nodes in an Undirected Graph
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2316
---

[LeetCode problem 2316](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/)

```python
class Solution:
    def countPairs(self, n: int, edges: List[List[int]]) -> int:
        def dfs(i: int) -> int:
            if vis[i]:
                return 0
            vis[i] = True
            return 1 + sum(dfs(j) for j in g[i])

        g = [[] for _ in range(n)]
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)
        vis = [False] * n
        res = s = 0
        for i in range(n):
            t = dfs(i)
            res += s * t
            s += t
        return res

```
