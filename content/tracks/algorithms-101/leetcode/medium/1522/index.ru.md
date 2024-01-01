---
title: 1522. Diameter of N-Ary Tree
seoTitle: LeetCode 1522. Diameter of N-Ary Tree | Python solution and explanation
description: 1522. Diameter of N-Ary Tree
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1522
---

[LeetCode problem 1522](https://leetcode.com/problems/diameter-of-n-ary-tree/)

```python
"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children if children is not None else []
"""


class Solution:
    def diameter(self, root: 'Node') -> int:
        """
        :type root: 'Node'
        :rtype: int
        """

        def build(root):
            nonlocal d
            if root is None:
                return
            for child in root.children:
                d[root].add(child)
                d[child].add(root)
                build(child)

        def dfs(u, t):
            nonlocal res, vis, d, next
            if u in vis:
                return
            vis.add(u)
            for v in d[u]:
                dfs(v, t + 1)
            if res < t:
                res = t
                next = u

        d = defaultdict(set)
        vis = set()
        build(root)
        res = 0
        next = None
        dfs(root, 0)
        vis.clear()
        dfs(next, 0)
        return res

```
