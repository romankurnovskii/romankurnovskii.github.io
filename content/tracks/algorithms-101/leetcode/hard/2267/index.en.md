---
title: 2267. Check if There Is a Valid Parentheses String Path
seoTitle: LeetCode 2267. Check if There Is a Valid Parentheses String Path | Python solution and explanation
description: 2267. Check if There Is a Valid Parentheses String Path
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2267
---

[LeetCode problem 2267](https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/)

```python
class Solution:
    def hasValidPath(self, grid: List[List[str]]) -> bool:
        @cache
        def dfs(i, j, t):
            if grid[i][j] == '(':
                t += 1
            else:
                t -= 1
            if t < 0:
                return False
            if i == m - 1 and j == n - 1:
                return t == 0
            for x, y in [(i + 1, j), (i, j + 1)]:
                if x < m and y < n and dfs(x, y, t):
                    return True
            return False

        m, n = len(grid), len(grid[0])
        return dfs(0, 0, 0)

```
