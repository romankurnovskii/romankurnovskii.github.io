---
title: 2204. Distance to a Cycle in Undirected Graph
seoTitle: LeetCode 2204. Distance to a Cycle in Undirected Graph | Python solution and explanation
description: 2204. Distance to a Cycle in Undirected Graph
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2204
---

[LeetCode problem 2204](https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/)

```python
class Solution:
    def distanceToCycle(self, n: int, edges: List[List[int]]) -> List[int]:
        g = defaultdict(set)
        for a, b in edges:
            g[a].add(b)
            g[b].add(a)
        q = deque(i for i in range(n) if len(g[i]) == 1)
        f = [0] * n
        seq = []
        while q:
            i = q.popleft()
            seq.append(i)
            for j in g[i]:
                g[j].remove(i)
                f[i] = j
                if len(g[j]) == 1:
                    q.append(j)
            g[i].clear()
        res = [0] * n
        for i in seq[::-1]:
            res[i] = res[f[i]] + 1
        return res

```
