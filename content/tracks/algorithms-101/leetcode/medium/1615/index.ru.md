---
title: 1615. Maximal Network Rank
seoTitle: LeetCode 1615. Maximal Network Rank | Python solution and explanation
description: 1615. Maximal Network Rank
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1615
---

[LeetCode problem 1615](https://leetcode.com/problems/maximal-network-rank/)

```python
class Solution:
    def maximalNetworkRank(self, n: int, roads: List[List[int]]) -> int:
        g = [[0] * n for _ in range(n)]
        cnt = [0] * n
        for a, b in roads:
            g[a][b] = g[b][a] = 1
            cnt[a] += 1
            cnt[b] += 1
        return max(cnt[a] + cnt[b] - g[a][b] for a in range(n) for b in range(a + 1, n))

```
