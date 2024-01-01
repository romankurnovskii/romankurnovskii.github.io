---
title: 1973. Count Nodes Equal to Sum of Descendants
seoTitle: LeetCode 1973. Count Nodes Equal to Sum of Descendants | Python solution and explanation
description: 1973. Count Nodes Equal to Sum of Descendants
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1973
---

[LeetCode problem 1973](https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def equalToDescendants(self, root: Optional[TreeNode]) -> int:
        def dfs(root):
            if root is None:
                return 0
            l, r = dfs(root.left), dfs(root.right)
            if l + r == root.val:
                nonlocal res
                res += 1
            return root.val + l + r

        res = 0
        dfs(root)
        return res

```
