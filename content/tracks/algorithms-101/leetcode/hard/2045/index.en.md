---
title: 2045. Second Minimum Time to Reach Destination
seoTitle: LeetCode 2045. Second Minimum Time to Reach Destination | Python solution and explanation
description: 2045. Second Minimum Time to Reach Destination
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2045
---

[LeetCode problem 2045](https://leetcode.com/problems/second-minimum-time-to-reach-destination/)

```python
class Solution:
    def secondMinimum(
        self, n: int, edges: List[List[int]], time: int, change: int
    ) -> int:
        g = defaultdict(set)
        for u, v in edges:
            g[u].add(v)
            g[v].add(u)
        q = deque([(1, 0)])
        dist = [[inf] * 2 for _ in range(n + 1)]
        dist[1][1] = 0
        while q:
            u, d = q.popleft()
            for v in g[u]:
                if d + 1 < dist[v][0]:
                    dist[v][0] = d + 1
                    q.append((v, d + 1))
                elif dist[v][0] < d + 1 < dist[v][1]:
                    dist[v][1] = d + 1
                    if v == n:
                        break
                    q.append((v, d + 1))
        res = 0
        for i in range(dist[n][1]):
            res += time
            if i < dist[n][1] - 1 and (res // change) % 2 == 1:
                res = (res + change) // change * change
        return res

```
