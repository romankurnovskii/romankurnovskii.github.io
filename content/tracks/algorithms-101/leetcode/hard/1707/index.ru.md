---
title: 1707. Maximum XOR With an Element From Array
seoTitle: LeetCode 1707. Maximum XOR With an Element From Array | Python solution and explanation
description: 1707. Maximum XOR With an Element From Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1707
---

[LeetCode problem 1707](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/)

```python
class Trie:
    __slots__ = ["children"]

    def __init__(self):
        self.children = [None] * 2

    def insert(self, x: int):
        node = self
        for i in range(30, -1, -1):
            v = x >> i & 1
            if node.children[v] is None:
                node.children[v] = Trie()
            node = node.children[v]

    def search(self, x: int) -> int:
        node = self
        res = 0
        for i in range(30, -1, -1):
            v = x >> i & 1
            if node.children[v ^ 1]:
                res |= 1 << i
                node = node.children[v ^ 1]
            elif node.children[v]:
                node = node.children[v]
            else:
                return -1
        return res


class Solution:
    def maximizeXor(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        trie = Trie()
        nums.sort()
        j, n = 0, len(queries)
        res = [-1] * n
        for i, (x, m) in sorted(zip(range(n), queries), key=lambda x: x[1][1]):
            while j < len(nums) and nums[j] <= m:
                trie.insert(nums[j])
                j += 1
            res[i] = trie.search(x)
        return res

```
