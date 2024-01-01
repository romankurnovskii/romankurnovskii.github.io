---
title: 1617. Count Subtrees With Max Distance Between Cities
seoTitle: LeetCode 1617. Count Subtrees With Max Distance Between Cities | Python solution and explanation
description: 1617. Count Subtrees With Max Distance Between Cities
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1617
---

[LeetCode problem 1617](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/)

```python
class Solution:
    def countSubgraphsForEachDiameter(
        self, n: int, edges: List[List[int]]
    ) -> List[int]:
        def bfs(u: int) -> int:
            d = -1
            q = deque([u])
            nonlocal msk, nxt
            msk ^= 1 << u
            while q:
                d += 1
                for _ in range(len(q)):
                    nxt = u = q.popleft()
                    for v in g[u]:
                        if msk >> v & 1:
                            msk ^= 1 << v
                            q.append(v)
            return d

        g = defaultdict(list)
        for u, v in edges:
            u, v = u - 1, v - 1
            g[u].append(v)
            g[v].append(u)
        res = [0] * (n - 1)
        nxt = 0
        for mask in range(1, 1 << n):
            if mask & (mask - 1) == 0:
                continue
            msk = mask
            cur = msk.bit_length() - 1
            bfs(cur)
            if msk == 0:
                msk = mask
                mx = bfs(nxt)
                res[mx - 1] += 1
        return res

```
