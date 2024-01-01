---
title: 2196. Create Binary Tree From Descriptions
seoTitle: LeetCode 2196. Create Binary Tree From Descriptions | Python solution and explanation
description: 2196. Create Binary Tree From Descriptions
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2196
---

[LeetCode problem 2196](https://leetcode.com/problems/create-binary-tree-from-descriptions/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def createBinaryTree(self, descriptions: List[List[int]]) -> Optional[TreeNode]:
        g = defaultdict(TreeNode)
        vis = set()
        for p, c, left in descriptions:
            if p not in g:
                g[p] = TreeNode(p)
            if c not in g:
                g[c] = TreeNode(c)
            if left:
                g[p].left = g[c]
            else:
                g[p].right = g[c]
            vis.add(c)
        for v, node in g.items():
            if v not in vis:
                return node

```
