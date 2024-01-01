---
title: 2203. Minimum Weighted Subgraph With the Required Paths
seoTitle: LeetCode 2203. Minimum Weighted Subgraph With the Required Paths | Python solution and explanation
description: 2203. Minimum Weighted Subgraph With the Required Paths
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2203
---

[LeetCode problem 2203](https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/)

```python
class Solution:
    def minimumWeight(
        self, n: int, edges: List[List[int]], src1: int, src2: int, dest: int
    ) -> int:
        def dijkstra(g, u):
            dist = [inf] * n
            dist[u] = 0
            q = [(0, u)]
            while q:
                d, u = heappop(q)
                if d > dist[u]:
                    continue
                for v, w in g[u]:
                    if dist[v] > dist[u] + w:
                        dist[v] = dist[u] + w
                        heappush(q, (dist[v], v))
            return dist

        g = defaultdict(list)
        rg = defaultdict(list)
        for f, t, w in edges:
            g[f].append((t, w))
            rg[t].append((f, w))
        d1 = dijkstra(g, src1)
        d2 = dijkstra(g, src2)
        d3 = dijkstra(rg, dest)
        res = min(sum(v) for v in zip(d1, d2, d3))
        return -1 if res >= inf else res

```
