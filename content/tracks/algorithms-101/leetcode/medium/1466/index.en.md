---
title: 1466. Reorder Routes to Make All Paths Lead to the City Zero
seoTitle: LeetCode 1466. Reorder Routes to Make All Paths Lead to the City Zero | Python solution and explanation
description: 1466. Reorder Routes to Make All Paths Lead to the City Zero
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1466
---

[LeetCode problem 1466](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/)

```python
class Solution:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        def dfs(a: int, fa: int) -> int:
            return sum(c + dfs(b, a) for b, c in g[a] if b != fa)

        g = [[] for _ in range(n)]
        for a, b in connections:
            g[a].append((b, 1))
            g[b].append((a, 0))
        return dfs(0, -1)

```
