---
title: 1457. Pseudo-Palindromic Paths in a Binary Tree
seoTitle: LeetCode 1457. Pseudo-Palindromic Paths in a Binary Tree | Python solution and explanation
description: 1457. Pseudo-Palindromic Paths in a Binary Tree
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1457
---

[LeetCode problem 1457](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pseudoPalindromicPaths(self, root: Optional[TreeNode]) -> int:
        def dfs(root: Optional[TreeNode], mask: int):
            if root is None:
                return 0
            mask ^= 1 << root.val
            if root.left is None and root.right is None:
                return int((mask & (mask - 1)) == 0)
            return dfs(root.left, mask) + dfs(root.right, mask)

        return dfs(root, 0)

```
