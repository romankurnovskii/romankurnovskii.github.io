---
title: 1947. Maximum Compatibility Score Sum
seoTitle: LeetCode 1947. Maximum Compatibility Score Sum | Python solution and explanation
description: 1947. Maximum Compatibility Score Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1947
---

[LeetCode problem 1947](https://leetcode.com/problems/maximum-compatibility-score-sum/)

```python
class Solution:
    def maxCompatibilitySum(
        self, students: List[List[int]], mentors: List[List[int]]
    ) -> int:
        def dfs(i, t):
            if i == m:
                nonlocal res
                res = max(res, t)
                return
            for j in range(m):
                if not vis[j]:
                    vis[j] = True
                    dfs(i + 1, t + g[i][j])
                    vis[j] = False

        m = len(students)
        g = [[0] * m for _ in range(m)]
        for i in range(m):
            for j in range(m):
                g[i][j] = sum(a == b for a, b in zip(students[i], mentors[j]))
        vis = [False] * m
        res = 0
        dfs(0, 0)
        return res

```
