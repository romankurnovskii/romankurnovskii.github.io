---
title: 623. Add One Row to Tree
seoTitle: LeetCode 623. Add One Row to Tree | Python solution and explanation
description: 623. Add One Row to Tree
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 623
---

[LeetCode problem 623](https://leetcode.com/problems/add-one-row-to-tree/)

Use a breadth-first traversal to reach the specific depth, then insert the new nodes. Consider special handling for adding a new root.

To insert a new row, traverse the tree to the specified depth, then adjust the parent-child relationships to include the new nodes. If inserting at depth 1, modify the root directly. Otherwise, modify the children of the nodes at depth `d-1`.

## Approach

1. If depth is 1, create a new root and assign the original root as its left child.
1. Use a breadth-first search (BFS) to reach level depth-1:
   - Use a queue to hold nodes and their current depth.
   - For each node at depth d-1, insert new nodes as its left and right children.
3. Adjust pointers to connect the new nodes with the subtree of their new children.

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def addOneRow(root, val, depth):
    if depth == 1:
        newNode = TreeNode(val)
        newNode.left = root
        return newNode

    queue = [(root, 1)]
    while queue:
        current, current_depth = queue.pop(0)
        if current_depth == depth - 1:
            left_child = TreeNode(val, left=current.left, right=None)
            right_child = TreeNode(val, left=None, right=current.right)
            current.left = left_child
            current.right = right_child
        else:
            if current.left:
                queue.append((current.left, current_depth + 1))
            if current.right:
                queue.append((current.right, current_depth + 1))

    return root
```

```python
class Solution:
    def addOneRow(self, root: Optional[TreeNode], val: int, depth: int) -> Optional[TreeNode]:
        if depth == 1:
            return TreeNode(val, root)
        q = deque([root])
        i = 0
        while q:
            i += 1
            for _ in range(len(q)):
                node = q.popleft()
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
                if i == depth - 1:
                    node.left = TreeNode(val, node.left, None)
                    node.right = TreeNode(val, None, node.right)
        return root
```
