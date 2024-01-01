---
title: 1820. Maximum Number of Accepted Invitations
seoTitle: LeetCode 1820. Maximum Number of Accepted Invitations | Python solution and explanation
description: 1820. Maximum Number of Accepted Invitations
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1820
---

[LeetCode problem 1820](https://leetcode.com/problems/maximum-number-of-accepted-invitations/)

```python
class Solution:
    def maximumInvitations(self, grid: List[List[int]]) -> int:
        def find(i):
            for j, v in enumerate(grid[i]):
                if v and j not in vis:
                    vis.add(j)
                    if match[j] == -1 or find(match[j]):
                        match[j] = i
                        return True
            return False

        m, n = len(grid), len(grid[0])
        match = [-1] * n
        res = 0
        for i in range(m):
            vis = set()
            res += find(i)
        return res

```
