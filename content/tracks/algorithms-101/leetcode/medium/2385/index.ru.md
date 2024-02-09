---
title: 2385. Amount of Time for Binary Tree to Be Infected
seoTitle: LeetCode 2385. Amount of Time for Binary Tree to Be Infected | Python solution and explanation
description: 2385. Amount of Time for Binary Tree to Be Infected
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2385
---

[LeetCode problem 2385](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def amountOfTime(self, root: Optional[TreeNode], start: int) -> int:
        def dfs(root):
            if root is None:
                return
            if root.left:
                g[root.val].append(root.left.val)
                g[root.left.val].append(root.val)
            if root.right:
                g[root.val].append(root.right.val)
                g[root.right.val].append(root.val)
            dfs(root.left)
            dfs(root.right)

        def dfs2(i, fa):
            res = 0
            for j in g[i]:
                if j != fa:
                    res = max(res, 1 + dfs2(j, i))
            return res

        g = defaultdict(list)
        dfs(root)
        return dfs2(start, -1)

```