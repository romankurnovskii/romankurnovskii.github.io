---
title: 2426. Number of Pairs Satisfying Inequality
seoTitle: LeetCode 2426. Number of Pairs Satisfying Inequality | Python solution and explanation
description: 2426. Number of Pairs Satisfying Inequality
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2426
---

[LeetCode problem 2426](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/)

```python
class BinaryIndexedTree:
    def __init__(self, n):
        self.n = n
        self.c = [0] * (n + 1)

    @staticmethod
    def lowbit(x):
        return x & -x

    def update(self, x, delta):
        while x <= self.n:
            self.c[x] += delta
            x += BinaryIndexedTree.lowbit(x)

    def query(self, x):
        s = 0
        while x:
            s += self.c[x]
            x -= BinaryIndexedTree.lowbit(x)
        return s


class Solution:
    def numberOfPairs(self, nums1: List[int], nums2: List[int], diff: int) -> int:
        tree = BinaryIndexedTree(10**5)
        res = 0
        for a, b in zip(nums1, nums2):
            v = a - b
            res += tree.query(v + diff + 40000)
            tree.update(v + 40000, 1)
        return res

```
