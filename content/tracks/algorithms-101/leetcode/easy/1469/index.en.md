---
title: 1469. Find All The Lonely Nodes
seoTitle: LeetCode 1469. Find All The Lonely Nodes | Python solution and explanation
description: 1469. Find All The Lonely Nodes
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1469
---

[LeetCode problem 1469](https://leetcode.com/problems/find-all-the-lonely-nodes/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getLonelyNodes(self, root: Optional[TreeNode]) -> List[int]:
        def dfs(root):
            if root is None or (root.left is None and root.right is None):
                return
            if root.left is None:
                res.append(root.right.val)
            if root.right is None:
                res.append(root.left.val)
            dfs(root.left)
            dfs(root.right)

        res = []
        dfs(root)
        return res

```
