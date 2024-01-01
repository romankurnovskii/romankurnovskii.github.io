---
title: 2368. Reachable Nodes With Restrictions
seoTitle: LeetCode 2368. Reachable Nodes With Restrictions | Python solution and explanation
description: 2368. Reachable Nodes With Restrictions
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2368
---

[LeetCode problem 2368](https://leetcode.com/problems/reachable-nodes-with-restrictions/)

```python
class Solution:
    def reachableNodes(
        self, n: int, edges: List[List[int]], restricted: List[int]
    ) -> int:
        s = set(restricted)
        g = defaultdict(list)
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)
        q = deque([0])
        vis = [False] * n
        for v in restricted:
            vis[v] = True
        res = 0
        while q:
            i = q.popleft()
            res += 1
            vis[i] = True
            for j in g[i]:
                if not vis[j]:
                    q.append(j)
        return res

```
