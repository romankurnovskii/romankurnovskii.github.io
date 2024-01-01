---
title: Check Completeness of a Binary Tree
seoTitle: LeetCode Check Completeness of a Binary Tree | Python solution and explanation
description: Check Completeness of a Binary Tree
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 958
---

[LeetCode problem 958](https://leetcode.com/problems/check-completeness-of-a-binary-tree/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isCompleteTree(self, root: TreeNode) -> bool:
        q = deque([root])
        while q:
            node = q.popleft()
            if node is None:
                break
            q.append(node.left)
            q.append(node.right)
        return all(node is None for node in q)

```
