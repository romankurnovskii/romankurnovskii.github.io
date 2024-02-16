---
title: 1101. The Earliest Moment When Everyone Become Friends
seoTitle: LeetCode 1101. The Earliest Moment When Everyone Become Friends | Python solution and explanation
description: 1101. The Earliest Moment When Everyone Become Friends
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1101
---

[LeetCode problem 1101](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/)

```python
class UnionFind:
    __slots__ = ('p', 'size')

    def __init__(self, n):
        self.p = list(range(n))
        self.size = [1] * n

    def find(self, x: int) -> int:
        if self.p[x] != x:
            self.p[x] = self.find(self.p[x])
        return self.p[x]

    def union(self, a: int, b: int) -> bool:
        pa, pb = self.find(a), self.find(b)
        if pa == pb:
            return False
        if self.size[pa] > self.size[pb]:
            self.p[pb] = pa
            self.size[pa] += self.size[pb]
        else:
            self.p[pa] = pb
            self.size[pb] += self.size[pa]
        return True


class Solution:
    def earliestAcq(self, logs: List[List[int]], n: int) -> int:
        uf = UnionFind(n)
        for t, x, y in sorted(logs):
            if uf.union(x, y):
                n -= 1
                if n == 1:
                    return t
        return -1

```
