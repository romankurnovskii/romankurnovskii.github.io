---
title: 2192. All Ancestors of a Node in a Directed Acyclic Graph
seoTitle: LeetCode 2192. All Ancestors of a Node in a Directed Acyclic Graph | Python solution and explanation
description: 2192. All Ancestors of a Node in a Directed Acyclic Graph
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2192
---

[LeetCode problem 2192](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/)

```python
class Solution:
    def getAncestors(self, n: int, edges: List[List[int]]) -> List[List[int]]:
        def bfs(s: int):
            q = deque([s])
            vis = {s}
            while q:
                i = q.popleft()
                for j in g[i]:
                    if j not in vis:
                        vis.add(j)
                        q.append(j)
                        res[j].append(s)

        g = defaultdict(list)
        for u, v in edges:
            g[u].append(v)
        res = [[] for _ in range(n)]
        for i in range(n):
            bfs(i)
        return res

```
