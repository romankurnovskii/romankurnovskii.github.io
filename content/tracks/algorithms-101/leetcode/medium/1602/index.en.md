---
title: 1602. Find Nearest Right Node in Binary Tree
seoTitle: LeetCode 1602. Find Nearest Right Node in Binary Tree | Python solution and explanation
description: 1602. Find Nearest Right Node in Binary Tree
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1602
---

[LeetCode problem 1602](https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findNearestRightNode(self, root: TreeNode, u: TreeNode) -> Optional[TreeNode]:
        def dfs(root, i):
            nonlocal d, res
            if root is None or res:
                return
            if d == i:
                res = root
                return
            if root == u:
                d = i
                return
            dfs(root.left, i + 1)
            dfs(root.right, i + 1)

        d = 0
        res = None
        dfs(root, 1)
        return res

```
