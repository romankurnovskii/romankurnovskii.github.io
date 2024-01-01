---
title: 2146. K Highest Ranked Items Within a Price Range
seoTitle: LeetCode 2146. K Highest Ranked Items Within a Price Range | Python solution and explanation
description: 2146. K Highest Ranked Items Within a Price Range
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2146
---

[LeetCode problem 2146](https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/)

```python
class Solution:
    def highestRankedKItems(
        self, grid: List[List[int]], pricing: List[int], start: List[int], k: int
    ) -> List[List[int]]:
        m, n = len(grid), len(grid[0])
        row, col, low, high = start + pricing
        items = []
        if low <= grid[row][col] <= high:
            items.append([0, grid[row][col], row, col])
        q = deque([(row, col, 0)])
        grid[row][col] = 0
        while q:
            i, j, d = q.popleft()
            for a, b in [[0, 1], [0, -1], [1, 0], [-1, 0]]:
                x, y = i + a, j + b
                if 0 <= x < m and 0 <= y < n and grid[x][y]:
                    if low <= grid[x][y] <= high:
                        items.append([d + 1, grid[x][y], x, y])
                    q.append((x, y, d + 1))
                    grid[x][y] = 0
        items.sort()
        return [item[2:] for item in items][:k]

```
