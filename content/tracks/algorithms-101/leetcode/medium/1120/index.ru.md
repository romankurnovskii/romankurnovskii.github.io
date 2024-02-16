---
title: 1120. Maximum Average Subtree
seoTitle: LeetCode 1120. Maximum Average Subtree | Python solution and explanation
description: 1120. Maximum Average Subtree
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1120
---

[LeetCode problem 1120](https://leetcode.com/problems/maximum-average-subtree/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maximumAverageSubtree(self, root: Optional[TreeNode]) -> float:
        def dfs(root):
            if root is None:
                return 0, 0
            ls, ln = dfs(root.left)
            rs, rn = dfs(root.right)
            s = root.val + ls + rs
            n = 1 + ln + rn
            nonlocal res
            res = max(res, s / n)
            return s, n

        res = 0
        dfs(root)
        return res

```
