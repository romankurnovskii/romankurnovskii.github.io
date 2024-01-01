---
title: 2265. Count Nodes Equal to Average of Subtree
seoTitle: LeetCode 2265. Count Nodes Equal to Average of Subtree | Python solution and explanation
description: 2265. Count Nodes Equal to Average of Subtree
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2265
---

[LeetCode problem 2265](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfSubtree(self, root: Optional[TreeNode]) -> int:
        def dfs(root):
            if root is None:
                return 0, 0
            ls, ln = dfs(root.left)
            rs, rn = dfs(root.right)
            s = ls + rs + root.val
            n = ln + rn + 1
            if s // n == root.val:
                nonlocal res
                res += 1
            return s, n

        res = 0
        dfs(root)
        return res

```
