---
title: 1914. Cyclically Rotating a Grid
seoTitle: LeetCode 1914. Cyclically Rotating a Grid | Python solution and explanation
description: 1914. Cyclically Rotating a Grid
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1914
---

[LeetCode problem 1914](https://leetcode.com/problems/cyclically-rotating-a-grid/)

```python
class Solution:
    def rotateGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:
        def rotate(p: int, k: int):
            nums = []
            for j in range(p, n - p - 1):
                nums.append(grid[p][j])
            for i in range(p, m - p - 1):
                nums.append(grid[i][n - p - 1])
            for j in range(n - p - 1, p, -1):
                nums.append(grid[m - p - 1][j])
            for i in range(m - p - 1, p, -1):
                nums.append(grid[i][p])
            k %= len(nums)
            if k == 0:
                return
            nums = nums[k:] + nums[:k]
            k = 0
            for j in range(p, n - p - 1):
                grid[p][j] = nums[k]
                k += 1
            for i in range(p, m - p - 1):
                grid[i][n - p - 1] = nums[k]
                k += 1
            for j in range(n - p - 1, p, -1):
                grid[m - p - 1][j] = nums[k]
                k += 1
            for i in range(m - p - 1, p, -1):
                grid[i][p] = nums[k]
                k += 1

        m, n = len(grid), len(grid[0])
        for p in range(min(m, n) >> 1):
            rotate(p, k)
        return grid

```
