---
title: 1506. Find Root of N-Ary Tree
seoTitle: LeetCode 1506. Find Root of N-Ary Tree | Python solution and explanation
description: 1506. Find Root of N-Ary Tree
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1506
---

[LeetCode problem 1506](https://leetcode.com/problems/find-root-of-n-ary-tree/)

```python
"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children if children is not None else []
"""


class Solution:
    def findRoot(self, tree: List['Node']) -> 'Node':
        x = 0
        for node in tree:
            x ^= node.val
            for child in node.children:
                x ^= child.val
        return next(node for node in tree if node.val == x)

```
