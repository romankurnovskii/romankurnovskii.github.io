---
title: 2096. Step-By-Step Directions From a Binary Tree Node to Another
seoTitle: LeetCode 2096. Step-By-Step Directions From a Binary Tree Node to Another | Python solution and explanation
description: 2096. Step-By-Step Directions From a Binary Tree Node to Another
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2096
---

[LeetCode problem 2096](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getDirections(
        self, root: Optional[TreeNode], startValue: int, destValue: int
    ) -> str:
        edges = defaultdict(list)
        res = None
        visited = set()

        def traverse(root):
            if not root:
                return
            if root.left:
                edges[root.val].append([root.left.val, 'L'])
                edges[root.left.val].append([root.val, 'U'])
            if root.right:
                edges[root.val].append([root.right.val, 'R'])
                edges[root.right.val].append([root.val, 'U'])
            traverse(root.left)
            traverse(root.right)

        def dfs(start, dest, t):
            nonlocal res
            if start in visited:
                return
            if start == dest:
                if res is None or len(res) > len(t):
                    res = ''.join(t)
                return
            visited.add(start)
            for d, k in edges[start]:
                t.append(k)
                dfs(d, dest, t)
                t.pop()

        traverse(root)
        dfs(startValue, destValue, [])
        return res

```
