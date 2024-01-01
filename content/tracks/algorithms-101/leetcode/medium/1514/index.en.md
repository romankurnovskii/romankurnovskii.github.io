---
title: 1514. Path with Maximum Probability
seoTitle: LeetCode 1514. Path with Maximum Probability | Python solution and explanation
description: 1514. Path with Maximum Probability
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1514
---

[LeetCode problem 1514](https://leetcode.com/problems/path-with-maximum-probability/)

```python
class Solution:
    def maxProbability(
        self,
        n: int,
        edges: List[List[int]],
        succProb: List[float],
        start: int,
        end: int,
    ) -> float:
        g = defaultdict(list)
        for (a, b), s in zip(edges, succProb):
            g[a].append((b, s))
            g[b].append((a, s))
        d = [0] * n
        vis = [False] * n
        d[start] = 1
        q = deque([start])
        vis[start] = True
        while q:
            i = q.popleft()
            vis[i] = False
            for j, s in g[i]:
                if d[j] < d[i] * s:
                    d[j] = d[i] * s
                    if not vis[j]:
                        q.append(j)
                        vis[j] = True
        return d[end]

```
