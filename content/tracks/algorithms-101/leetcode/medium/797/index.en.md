---
title: 797. All Paths From Source to Target
seoTitle: LeetCode 797. All Paths From Source to Target | Python solution and explanation
description: 797. All Paths From Source to Target
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 797
---

[LeetCode problem 797](https://leetcode.com/problems/all-paths-from-source-to-target/)

```python
class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        def dfs(t):
            if t[-1] == len(graph) - 1:
                res.append(t[:])
                return
            for v in graph[t[-1]]:
                t.append(v)
                dfs(t)
                t.pop()

        res = []
        dfs([0])
        return res

```
