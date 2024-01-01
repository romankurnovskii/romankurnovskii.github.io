---
title: 1666. Change the Root of a Binary Tree
seoTitle: LeetCode 1666. Change the Root of a Binary Tree | Python solution and explanation
description: 1666. Change the Root of a Binary Tree
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1666
---

[LeetCode problem 1666](https://leetcode.com/problems/change-the-root-of-a-binary-tree/)

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
    def flipBinaryTree(self, root: "Node", leaf: "Node") -> "Node":
        cur = leaf
        p = cur.parent
        while cur != root:
            gp = p.parent
            if cur.left:
                cur.right = cur.left
            cur.left = p
            p.parent = cur
            if p.left == cur:
                p.left = None
            elif p.right == cur:
                p.right = None
            cur = p
            p = gp
        leaf.parent = None
        return leaf

```
