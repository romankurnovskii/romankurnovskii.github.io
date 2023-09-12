---
title: 1372. Longest ZigZag Path in a Binary Tree
seoTitle: LeetCode 1372. Longest ZigZag Path in a Binary Tree | Python solution and explanation
description: An in-depth exploration of the Longest ZigZag Path in a Binary Tree problem.
toc: true
tags: [Algorithms, Medium, Trees, LeetCode]
categories: [Algorithms, LeetCode]
date: 2023-09-10
lastmod: 2023-09-10
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1372
todo: get latest solution passed
---

[LeetCode problem 1372](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/)

## Problem Statement

Given the root of a binary tree, the task is to find the longest ZigZag path contained in that tree. A ZigZag path is defined by a sequence starting at any node and switching between left and right directions at each subsequent step.

## Naive Solution

A simplistic approach would be to kick off from every node and emulate the ZigZag movement until it's no longer feasible, all the while updating the longest path encountered. This method can be rather inefficient as it leads to a lot of recalculations.

## Hints & Tips

A Depth First Search (DFS) can be an efficient way to tackle this problem. The current path length and direction can be passed as arguments to the DFS function, negating the need for recalculations.

## Approach

Imagine walking through the tree. Every time you take a step, you must decide whether to go left or right. But, the twist here is that you have to alternate your direction at every step. The challenge? Find the longest path you can take without breaking this rule.

To systematically explore all possible paths, we use Depth First Search (DFS), a tree traversal strategy. Instead of starting from scratch at every node, we remember our previous direction (left or right) and continue in the opposite direction, effectively extending our ZigZag path. If a move in the current direction isn't possible, that path ends there, but the search continues. By doing so, we can explore all potential ZigZag paths efficiently.

## Steps

1. Initialize DFS from the root, considering both left and right as potential starting directions.
2. At each node, based on your previous direction, try extending the ZigZag by moving in the opposite direction, thus increasing the length.
3. If you hit a dead end (no further movement possible in the current direction), check if this path length is your longest so far.
4. Regardless of whether the current path continues, keep exploring the tree in both directions.

## Solution

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def longestZigZag(self, root: TreeNode) -> int:
        self.max_len = 0
        
        def dfs(node, direction, length):
            if not node:
                return
            
            self.max_len = max(self.max_len, length)    # Update the maximum length
            
            if direction == "left":                     # If the last direction was left, we try to move right
                dfs(node.right, "right", length + 1)
                dfs(node.left, "left", 1)
            else:
                dfs(node.left, "left", length + 1)
                dfs(node.right, "right", 1)
        
        dfs(root, "left", 0)
        dfs(root, "right", 0)
        
        return self.max_len
```


