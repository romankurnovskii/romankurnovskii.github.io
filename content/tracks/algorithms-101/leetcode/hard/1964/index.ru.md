---
title: 1964. Find the Longest Valid Obstacle Course at Each Position
seoTitle: LeetCode 1964. Find the Longest Valid Obstacle Course at Each Position | Python solution and explanation
description: 1964. Find the Longest Valid Obstacle Course at Each Position
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1964
---

[LeetCode problem 1964](https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/)

```python
class BinaryIndexedTree:
    __slots__ = ["n", "c"]

    def __init__(self, n: int):
        self.n = n
        self.c = [0] * (n + 1)

    def update(self, x: int, v: int):
        while x <= self.n:
            self.c[x] = max(self.c[x], v)
            x += x & -x

    def query(self, x: int) -> int:
        s = 0
        while x:
            s = max(s, self.c[x])
            x -= x & -x
        return s


class Solution:
    def longestObstacleCourseAtEachPosition(self, obstacles: List[int]) -> List[int]:
        nums = sorted(set(obstacles))
        n = len(nums)
        tree = BinaryIndexedTree(n)
        res = []
        for x in obstacles:
            i = bisect_left(nums, x) + 1
            res.append(tree.query(i) + 1)
            tree.update(i, res[-1])
        return res

```
