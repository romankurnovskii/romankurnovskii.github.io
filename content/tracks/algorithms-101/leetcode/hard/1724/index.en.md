---
title: 1724. Checking Existence of Edge Length Limited Paths II
seoTitle: LeetCode 1724. Checking Existence of Edge Length Limited Paths II | Python solution and explanation
description: 1724. Checking Existence of Edge Length Limited Paths II
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1724
---

[LeetCode problem 1724](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths-ii/)

```python
class PersistentUnionFind:
    def __init__(self, n):
        self.rank = [0] * n
        self.p = list(range(n))
        self.version = [inf] * n

    def find(self, x, t=inf):
        if self.p[x] == x or self.version[x] >= t:
            return x
        return self.find(self.p[x], t)

    def union(self, a, b, t):
        pa, pb = self.find(a), self.find(b)
        if pa == pb:
            return False
        if self.rank[pa] > self.rank[pb]:
            self.version[pb] = t
            self.p[pb] = pa
        else:
            self.version[pa] = t
            self.p[pa] = pb
            if self.rank[pa] == self.rank[pb]:
                self.rank[pb] += 1
        return True


class DistanceLimitedPathsExist:
    def __init__(self, n: int, edgeList: List[List[int]]):
        self.puf = PersistentUnionFind(n)
        edgeList.sort(key=lambda x: x[2])
        for u, v, dis in edgeList:
            self.puf.union(u, v, dis)

    def query(self, p: int, q: int, limit: int) -> bool:
        return self.puf.find(p, limit) == self.puf.find(q, limit)

```
