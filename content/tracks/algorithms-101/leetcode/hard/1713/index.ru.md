---
title: 1713. Minimum Operations to Make a Subsequence
seoTitle: LeetCode 1713. Minimum Operations to Make a Subsequence | Python solution and explanation
description: 1713. Minimum Operations to Make a Subsequence
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1713
---

[LeetCode problem 1713](https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/)

```python
class BinaryIndexedTree:
    def __init__(self, n):
        self.n = n
        self.c = [0] * (n + 1)

    @staticmethod
    def lowbit(x):
        return x & -x

    def update(self, x, val):
        while x <= self.n:
            self.c[x] = max(self.c[x], val)
            x += BinaryIndexedTree.lowbit(x)

    def query(self, x):
        s = 0
        while x:
            s = max(s, self.c[x])
            x -= BinaryIndexedTree.lowbit(x)
        return s


class Solution:
    def minOperations(self, target: List[int], arr: List[int]) -> int:
        d = {v: i for i, v in enumerate(target)}
        nums = [d[v] for v in arr if v in d]
        return len(target) - self.lengthOfLIS(nums)

    def lengthOfLIS(self, nums):
        s = sorted(set(nums))
        m = {v: i for i, v in enumerate(s, 1)}
        tree = BinaryIndexedTree(len(m))
        res = 0
        for v in nums:
            x = m[v]
            t = tree.query(x - 1) + 1
            res = max(res, t)
            tree.update(x, t)
        return res

```
