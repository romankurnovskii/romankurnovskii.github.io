---
title: 1644. Lowest Common Ancestor of a Binary Tree II
seoTitle: LeetCode 1644. Lowest Common Ancestor of a Binary Tree II | Python solution and explanation
description: 1644. Lowest Common Ancestor of a Binary Tree II
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1644
---

[LeetCode problem 1644](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def lowestCommonAncestor(
        self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode'
    ) -> 'TreeNode':
        def dfs(root, p, q):
            if root is None:
                return False
            l = dfs(root.left, p, q)
            r = dfs(root.right, p, q)
            nonlocal res
            if l and r:
                res = root
            if (l or r) and (root.val == p.val or root.val == q.val):
                res = root
            return l or r or root.val == p.val or root.val == q.val

        res = None
        dfs(root, p, q)
        return res

```
