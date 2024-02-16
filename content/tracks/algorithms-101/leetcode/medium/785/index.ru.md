---
title: 785. Is Graph Bipartite
seoTitle: LeetCode 785. Is Graph Bipartite | Python solution and explanation
description: 785. Is Graph Bipartite
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 785
---

[LeetCode problem 785](https://leetcode.com/problems/is-graph-bipartite/)

```python
class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        def find(x):
            if p[x] != x:
                p[x] = find(p[x])
            return p[x]

        p = list(range(len(graph)))
        for u, g in enumerate(graph):
            for v in g:
                if find(u) == find(v):
                    return False
                p[find(v)] = find(g[0])
        return True

```
