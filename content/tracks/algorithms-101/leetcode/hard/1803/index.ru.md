---
title: 1803. Count Pairs With XOR in a Range
seoTitle: LeetCode 1803. Count Pairs With XOR in a Range | Python solution and explanation
description: 1803. Count Pairs With XOR in a Range
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1803
---

[LeetCode problem 1803](https://leetcode.com/problems/count-pairs-with-xor-in-a-range/)

```python
class Trie:
    def __init__(self):
        self.children = [None] * 2
        self.cnt = 0

    def insert(self, x):
        node = self
        for i in range(15, -1, -1):
            v = x >> i & 1
            if node.children[v] is None:
                node.children[v] = Trie()
            node = node.children[v]
            node.cnt += 1

    def search(self, x, limit):
        node = self
        res = 0
        for i in range(15, -1, -1):
            if node is None:
                return res
            v = x >> i & 1
            if limit >> i & 1:
                if node.children[v]:
                    res += node.children[v].cnt
                node = node.children[v ^ 1]
            else:
                node = node.children[v]
        return res


class Solution:
    def countPairs(self, nums: List[int], low: int, high: int) -> int:
        res = 0
        tree = Trie()
        for x in nums:
            res += tree.search(x, high + 1) - tree.search(x, low)
            tree.insert(x)
        return res

```
