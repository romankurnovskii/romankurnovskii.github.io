---
title: 1110. Delete Nodes And Return Forest
seoTitle: LeetCode 1110. Delete Nodes And Return Forest | Python solution and explanation
description: 1110. Delete Nodes And Return Forest
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1110
---

[LeetCode problem 1110](https://leetcode.com/problems/delete-nodes-and-return-forest/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def delNodes(
        self, root: Optional[TreeNode], to_delete: List[int]
    ) -> List[TreeNode]:
        def dfs(root: Optional[TreeNode]) -> Optional[TreeNode]:
            if root is None:
                return None
            root.left, root.right = dfs(root.left), dfs(root.right)
            if root.val not in s:
                return root
            if root.left:
                res.append(root.left)
            if root.right:
                res.append(root.right)
            return None

        s = set(to_delete)
        res = []
        if dfs(root):
            res.append(root)
        return res

```
