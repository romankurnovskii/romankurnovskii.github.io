---
title: 2378. Choose Edges to Maximize Score in a Tree
seoTitle: LeetCode 2378. Choose Edges to Maximize Score in a Tree | Python solution and explanation
description: 2378. Choose Edges to Maximize Score in a Tree
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2378
---

[LeetCode problem 2378](https://leetcode.com/problems/choose-edges-to-maximize-score-in-a-tree/)

```python
class Solution:
    def maxScore(self, edges: List[List[int]]) -> int:
        def dfs(i):
            a = b = t = 0
            for j, w in g[i]:
                x, y = dfs(j)
                a += y
                b += y
                t = max(t, x - y + w)
            b += t
            return a, b

        g = defaultdict(list)
        for i, (p, w) in enumerate(edges[1:], 1):
            g[p].append((i, w))
        return dfs(0)[1]

```