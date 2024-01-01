---
title: 1650. Lowest Common Ancestor of a Binary Tree III
seoTitle: LeetCode 1650. Lowest Common Ancestor of a Binary Tree III | Python solution and explanation
description: 1650. Lowest Common Ancestor of a Binary Tree III
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1650
---

[LeetCode problem 1650](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/)

```python
"""
# Definition for a Node.
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.parent = None
"""


class Solution:
    def lowestCommonAncestor(self, p: 'Node', q: 'Node') -> 'Node':
        a, b = p, q
        while a != b:
            a = a.parent if a.parent else q
            b = b.parent if b.parent else p
        return a

```
