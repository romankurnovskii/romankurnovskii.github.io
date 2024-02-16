---
title: 802. Find Eventual Safe States
seoTitle: LeetCode 802. Find Eventual Safe States | Python solution and explanation
description: 802. Find Eventual Safe States
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 802
---

[LeetCode problem 802](https://leetcode.com/problems/find-eventual-safe-states/)

```python
class Solution:
    def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
        def dfs(i):
            if color[i]:
                return color[i] == 2
            color[i] = 1
            for j in graph[i]:
                if not dfs(j):
                    return False
            color[i] = 2
            return True

        n = len(graph)
        color = [0] * n
        return [i for i in range(n) if dfs(i)]

```
