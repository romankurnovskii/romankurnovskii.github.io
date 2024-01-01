---
title: 100. Same Tree
seoTitle: LeetCode 100. Same Tree | Решение на Python.
description: LeetCode 100. Same Tree
toc: true
tags: [Binary Tree, Easy]
categories: [Algorithms, Easy]
date: 2024-02-26
lastMod: 2024-02-26
featuredImage: https://picsum.photos/700/241?grayscale
weight: 100
---

[LeetCode 100](https://leetcode.com/problems/same-tree)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        
        if not p and not q:
            return True
        if not p or not q:
            return False
        if p.val != q.val:
            return False
        
        left = self.isSameTree(p.left, q.left) 
        right = self.isSameTree(p.right, q.right)

        return left == right == True
```
