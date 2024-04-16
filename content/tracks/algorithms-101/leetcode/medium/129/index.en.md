---
title: 129. Sum Root to Leaf Numbers
seoTitle: LeetCode 129. Sum Root to Leaf Numbers | Python solution and explanation
description: 129. Sum Root to Leaf Numbers
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-04-15
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 129
---

[LeetCode problem 129](https://leetcode.com/problems/sum-root-to-leaf-numbers/)

Traverse the tree and check for leaf nodes specifically that are left children. Consider using a depth-first search (DFS) approach.

The strategy is to recursively traverse the tree, and at each node, check if it has a left child that is a leaf. If it is, we add its value to the sum. We continue traversing until all nodes are visited.

## Approach

1. Define a helper function `dfs(node)` that will traverse the tree:
   - Check if the current node is None; if yes, return 0.
   - Check if the left child of the node is a leaf (i.e., has no left or right child). If it is, add its value to the sum.
   - Recursively call the helper for the left and right children of the current node.
   - Return the sum of values from the left and right child calls plus the leaf node value if applicable.
1. Call this `dfs` function starting from the root of the tree.

```python
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        def dfs(node):
            if not node:
                return 0
            res = 0
            if node.left and not node.left.left and not node.left.right:
                res += node.left.val
            res += dfs(node.left)
            res += dfs(node.right)
            return res
        
        return dfs(root)
```

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        def dfs(root, sum_so_far):
            if root is None:
                return 0

            res = 0
            sum_so_far = sum_so_far * 10 + root.val
            if root.left is None and root.right is None:
                return sum_so_far
            res += dfs(root.left, sum_so_far)
            res += dfs(root.right, sum_so_far)
            return res
        
        res = dfs(root, 0)
        return res
```
