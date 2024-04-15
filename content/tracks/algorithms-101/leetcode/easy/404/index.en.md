---
title: 404. Sum of Left Leaves
seoTitle: LeetCode 404. Sum of Left Leaves | Python solution and explanation
description: 404. Sum of Left Leaves
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-04-14
lastMod: 2024-04-14
featuredImage: https://picsum.photos/700/155?grayscale
weight: 404
---

[LeetCode problem 404](https://leetcode.com/problems/sum-of-left-leaves/)

Consider using a depth-first search (DFS) approach

The strategy is to recursively traverse the tree, and at each node, check if it has a left child that is a leaf. If it is, we add its value to the sum. We continue traversing until all nodes are visited.

## Approach
1. Define a helper function `dfs(node)` that will traverse the tree:
   - Check if the current node is None; if yes, return 0.
   - Check if the left child of the node is a leaf (i.e., has no left or right child). If it is, add its value to the sum.
   - Recursively call the helper for the left and right children of the current node.
   - Return the sum of values from the left and right child calls plus the leaf node value if applicable.
2. Call this dfs function starting from the root of the tree.

```
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def sumOfLeftLeaves(root):
    def dfs(node):
        if not node:
            return 0

        sum = 0
        if node.left and not node.left.left and not node.left.right:
            sum += node.left.val

        sum += dfs(node.left)
        sum += dfs(node.right)

        return sum

    return dfs(root)
```

```python
class Solution:
    sum = 0

    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        
        def dfs(root, is_left=False):
            if not root:
                return 0
            
            if is_left:
                if not root.left and not root.right:
                    self.sum += root.val
            
            dfs(root.left, True)
            dfs(root.right)
        
        dfs(root)

        return self.sum
```

```python
class Solution:
    def sumOfLeftLeaves(self, root: TreeNode) -> int:
        if root is None:
            return 0
        res = 0
        if root.left and root.left.left is None and root.left.right is None:
            res += root.left.val
        res += self.sumOfLeftLeaves(root.left)
        res += self.sumOfLeftLeaves(root.right)
        return res
```