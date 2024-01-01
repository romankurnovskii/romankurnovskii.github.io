---
title: 1660. Correct a Binary Tree
seoTitle: LeetCode 1660. Correct a Binary Tree | Python solution and explanation
description: 1660. Correct a Binary Tree
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1660
---

[LeetCode problem 1660](https://leetcode.com/problems/correct-a-binary-tree/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def correctBinaryTree(self, root: TreeNode) -> TreeNode:
        def dfs(root):
            if root is None or root.right in vis:
                return None
            vis.add(root)
            root.right = dfs(root.right)
            root.left = dfs(root.left)
            return root

        vis = set()
        return dfs(root)

```
