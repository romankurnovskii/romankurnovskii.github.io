---
title: 1971. Find if Path Exists in Graph
seoTitle: LeetCode 1971. Find if Path Exists in Graph | Python solution and explanation
description: 1971. Find if Path Exists in Graph
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1971
---

[LeetCode problem 1971](https://leetcode.com/problems/find-if-path-exists-in-graph/)

```python
class Solution:
    def validPath(
        self, n: int, edges: List[List[int]], source: int, destination: int
    ) -> bool:
        def find(x):
            if p[x] != x:
                p[x] = find(p[x])
            return p[x]

        p = list(range(n))
        for u, v in edges:
            p[find(u)] = find(v)
        return find(source) == find(destination)

```
