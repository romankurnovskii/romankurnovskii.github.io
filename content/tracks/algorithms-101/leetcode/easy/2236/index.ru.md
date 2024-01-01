---
title: 2236. Root Equals Sum of Children
seoTitle: LeetCode 2236. Root Equals Sum of Children | Python solution and explanation
description: 2236. Root Equals Sum of Children
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2236
---

[LeetCode problem 2236](https://leetcode.com/problems/root-equals-sum-of-children/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def checkTree(self, root: Optional[TreeNode]) -> bool:
        return root.val == root.left.val + root.right.val

```
