---
title: 2428. Maximum Sum of an Hourglass
seoTitle: LeetCode 2428. Maximum Sum of an Hourglass | Python solution and explanation
description: 2428. Maximum Sum of an Hourglass
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2428
---

[LeetCode problem 2428](https://leetcode.com/problems/maximum-sum-of-an-hourglass/)

```python
class Solution:
    def maxSum(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        res = 0
        for i in range(1, m - 1):
            for j in range(1, n - 1):
                s = -grid[i][j - 1] - grid[i][j + 1]
                s += sum(
                    grid[x][y] for x in range(i - 1, i + 2) for y in range(j - 1, j + 2)
                )
                res = max(res, s)
        return res

```