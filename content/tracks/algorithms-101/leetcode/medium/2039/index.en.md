---
title: 2039. The Time When the Network Becomes Idle
seoTitle: LeetCode 2039. The Time When the Network Becomes Idle | Python solution and explanation
description: 2039. The Time When the Network Becomes Idle
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2039
---

[LeetCode problem 2039](https://leetcode.com/problems/the-time-when-the-network-becomes-idle/)

```python
class Solution:
    def networkBecomesIdle(self, edges: List[List[int]], patience: List[int]) -> int:
        g = defaultdict(list)
        for u, v in edges:
            g[u].append(v)
            g[v].append(u)
        q = deque([0])
        vis = {0}
        res = d = 0
        while q:
            d += 1
            t = d * 2
            for _ in range(len(q)):
                u = q.popleft()
                for v in g[u]:
                    if v not in vis:
                        vis.add(v)
                        q.append(v)
                        res = max(res, (t - 1) // patience[v] * patience[v] + t + 1)
        return res

```
