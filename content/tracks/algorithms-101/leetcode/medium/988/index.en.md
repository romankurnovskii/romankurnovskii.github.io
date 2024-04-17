---
title: 988. Smallest String Starting From Leaf
seoTitle: LeetCode 988. Smallest String Starting From Leaf | Python solution and explanation
description: 988. Smallest String Starting From Leaf
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-04-17
lastMod: 2024-04-17
featuredImage: https://picsum.photos/700/155?grayscale
weight: 988
---

[LeetCode problem 988](https://leetcode.com/problems/smallest-string-starting-from-leaf/)

Use a depth-first search (DFS) approach to traverse from leaves to the root, collecting characters, and keep track of the smallest string found.

Tackle by recursively exploring each path from the root to the leaves, collecting the string formed by node values in reverse (from leaf to root). At each leaf node, compare the formed string with the current smallest and update if the new one is smaller.

## Approach

1. Create a recursive function `dfs(node, path)` that navigates through the tree:
   - The `path` argument accumulates characters from the current node to the root.
   - At each leaf node (node with no children), update the smallest string.
   - Recursively visit left and right children if they exist.
3. Start the DFS with the root node and an empty path.
4. After traversing the entire tree, the smallest string will be the result.

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def smallestFromLeaf(self, root: Optional[TreeNode]) -> str:
        def dfs(node, path):
            nonlocal smallest
            if node:
                # Prepend current char to the path
                path = chr(node.val + 97) + path
                if not node.left and not node.right:  # Leaf node
                    if not smallest or path < smallest:
                        smallest = path
                dfs(node.left, path)
                dfs(node.right, path)

        smallest = None
        dfs(root, "")
        return smallest
```
