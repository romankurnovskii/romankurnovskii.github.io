---
title: 2331. Evaluate Boolean Binary Tree
seoTitle: LeetCode 2331. Evaluate Boolean Binary Tree | Python solution and explanation
description: 2331. Evaluate Boolean Binary Tree
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2331
---

[LeetCode problem 2331](https://leetcode.com/problems/evaluate-boolean-binary-tree/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def evaluateTree(self, root: Optional[TreeNode]) -> bool:
        if root.left is None:
            return bool(root.val)
        l = self.evaluateTree(root.left)
        r = self.evaluateTree(root.right)
        return l or r if root.val == 2 else l and r

```