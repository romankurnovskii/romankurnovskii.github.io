---
title: 1778. Shortest Path in a Hidden Grid
seoTitle: LeetCode 1778. Shortest Path in a Hidden Grid | Python solution and explanation
description: 1778. Shortest Path in a Hidden Grid
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1778
---

[LeetCode problem 1778](https://leetcode.com/problems/shortest-path-in-a-hidden-grid/)

```python
# """
# This is GridMaster's API interface.
# You should not implement it, or speculate about its implementation
# """
# class GridMaster(object):
#    def canMove(self, direction: str) -> bool:
#
#
#    def move(self, direction: str) -> bool:
#
#
#    def isTarget(self) -> None:
#
#


class Solution(object):
    def findShortestPath(self, master: "GridMaster") -> int:
        def dfs(i: int, j: int):
            if master.isTarget():
                nonlocal target
                target = (i, j)
                return
            for k, c in enumerate(s):
                x, y = i + dirs[k], j + dirs[k + 1]
                if master.canMove(c) and (x, y) not in vis:
                    vis.add((x, y))
                    master.move(c)
                    dfs(x, y)
                    master.move(s[(k + 2) % 4])

        s = "URDL"
        dirs = (-1, 0, 1, 0, -1)
        target = None
        vis = set()
        dfs(0, 0)
        if target is None:
            return -1
        vis.discard((0, 0))
        q = deque([(0, 0)])
        res = -1
        while q:
            res += 1
            for _ in range(len(q)):
                i, j = q.popleft()
                if (i, j) == target:
                    return res
                for a, b in pairwise(dirs):
                    x, y = i + a, j + b
                    if (x, y) in vis:
                        vis.remove((x, y))
                        q.append((x, y))
        return -1

```
