---
title: 1536. Minimum Swaps to Arrange a Binary Grid
seoTitle: LeetCode 1536. Minimum Swaps to Arrange a Binary Grid | Python solution and explanation
description: 1536. Minimum Swaps to Arrange a Binary Grid
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1536
---

[LeetCode problem 1536](https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/)

```python
class Solution:
    def minSwaps(self, grid: List[List[int]]) -> int:
        n = len(grid)
        pos = [-1] * n
        for i in range(n):
            for j in range(n - 1, -1, -1):
                if grid[i][j] == 1:
                    pos[i] = j
                    break
        res = 0
        for i in range(n):
            k = -1
            for j in range(i, n):
                if pos[j] <= i:
                    res += j - i
                    k = j
                    break
            if k == -1:
                return -1
            while k > i:
                pos[k], pos[k - 1] = pos[k - 1], pos[k]
                k -= 1
        return res

```
