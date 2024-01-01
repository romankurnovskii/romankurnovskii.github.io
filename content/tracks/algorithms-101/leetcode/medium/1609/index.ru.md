---
title: 1609. Even Odd Tree
seoTitle: LeetCode 1609. Even Odd Tree | Python solution and explanation
description: 1609. Even Odd Tree
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1609
---

[LeetCode problem 1609](https://leetcode.com/problems/even-odd-tree/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isEvenOddTree(self, root: Optional[TreeNode]) -> bool:
        d = {}

        def dfs(root, i):
            if root is None:
                return True
            even = i % 2 == 0
            prev = d.get(i, 0 if even else inf)
            if even and (root.val % 2 == 0 or prev >= root.val):
                return False
            if not even and (root.val % 2 == 1 or prev <= root.val):
                return False
            d[i] = root.val
            return dfs(root.left, i + 1) and dfs(root.right, i + 1)

        return dfs(root, 0)
```
