---
title: 94. Binary Tree Inorder Traversal
description: LeetCode 94. Binary Tree Inorder Traversal
toc: false
authors: [roman-kurnovskii]
tags: [Stack, Tree, "Depth-First Search", "Binary Tree"]
categories: [Algorithms, Easy]
date: 2022-10-31
lastMod: 2023-06-17
featuredImage: https://picsum.photos/700/241?grayscale
series: [LeetCode Top Interview Questions]
weight: 94
---


[LeetCode problem](https://leetcode.com/problems/binary-tree-inorder-traversal/)

Given the `root` of a binary tree, return the `inorder traversal of its nodes' values`.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg)

    Input: root = [1,null,2,3]
    Output: [1,3,2]

**Example 2:**

    Input: root = []
    Output: []

**Example 3:**

    Input: root = [1]
    Output: [1]

## Thoughts

Don't understand what needed. Why:

- `1-null-2-3` becomes `1-3-2`
- `[1,2,5,7,8,9,10]` becomes `[7,2,8,1,9,5,10]`

In `1-null-2-3` `1` becomes the first because we loop to its left node which is `null`, then come back and first value here is `1`.

## First accepted

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        
        # add all left, then add right
        def get_child(head):
            if head:
                get_child(head.left)
                result.append(head.val)
                get_child(head.right)
                
                
        result = [] 
        get_child(root)
        return result
```

## Better solution

Morris Traversal

## Resources

- [LeetCode explanation](https://leetcode.com/problems/binary-tree-inorder-traversal/solution/)
