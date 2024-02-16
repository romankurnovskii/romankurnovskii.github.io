---
title: 1123. Lowest Common Ancestor of Deepest Leaves
seoTitle: LeetCode 1123. Lowest Common Ancestor of Deepest Leaves | Python solution and explanation
description: 1123. Lowest Common Ancestor of Deepest Leaves
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1123
---

[LeetCode problem 1123](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def lcaDeepestLeaves(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        def dfs(root):
            if root is None:
                return None, 0
            l, d1 = dfs(root.left)
            r, d2 = dfs(root.right)
            if d1 > d2:
                return l, d1 + 1
            if d1 < d2:
                return r, d2 + 1
            return root, d1 + 1

        return dfs(root)[0]

```
