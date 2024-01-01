---
title: 1490. Clone N-ary Tree
seoTitle: LeetCode 1490. Clone N-ary Tree | Python solution and explanation
description: 1490. Clone N-ary Tree
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1490
---

[LeetCode problem 1490](https://leetcode.com/problems/clone-n-ary-tree/)

```python
"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children if children is not None else []
"""


class Solution:
    def cloneTree(self, root: 'Node') -> 'Node':
        if root is None:
            return None
        children = [self.cloneTree(child) for child in root.children]
        return Node(root.val, children)

```
