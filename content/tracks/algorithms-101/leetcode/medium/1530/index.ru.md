---
title: 1530. Number of Good Leaf Nodes Pairs
seoTitle: LeetCode 1530. Number of Good Leaf Nodes Pairs | Python solution and explanation
description: 1530. Number of Good Leaf Nodes Pairs
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1530
---

[LeetCode problem 1530](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countPairs(self, root: TreeNode, distance: int) -> int:
        def dfs(root, cnt, i):
            if root is None or i >= distance:
                return
            if root.left is None and root.right is None:
                cnt[i] += 1
                return
            dfs(root.left, cnt, i + 1)
            dfs(root.right, cnt, i + 1)

        if root is None:
            return 0
        res = self.countPairs(root.left, distance) + self.countPairs(
            root.right, distance
        )
        cnt1 = Counter()
        cnt2 = Counter()
        dfs(root.left, cnt1, 1)
        dfs(root.right, cnt2, 1)

        for k1, v1 in cnt1.items():
            for k2, v2 in cnt2.items():
                if k1 + k2 <= distance:
                    res += v1 * v2
        return res

```
