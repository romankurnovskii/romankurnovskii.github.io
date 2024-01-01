---
title: 2174. Remove All Ones With Row and Column Flips II
seoTitle: LeetCode 2174. Remove All Ones With Row and Column Flips II | Python solution and explanation
description: 2174. Remove All Ones With Row and Column Flips II
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2174
---

[LeetCode problem 2174](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/)

```python
class Solution:
    def removeOnes(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        state = sum(1 << (i * n + j) for i in range(m) for j in range(n) if grid[i][j])
        q = deque([state])
        vis = {state}
        res = 0
        while q:
            for _ in range(len(q)):
                state = q.popleft()
                if state == 0:
                    return res
                for i in range(m):
                    for j in range(n):
                        if grid[i][j] == 0:
                            continue
                        nxt = state
                        for r in range(m):
                            nxt &= ~(1 << (r * n + j))
                        for c in range(n):
                            nxt &= ~(1 << (i * n + c))
                        if nxt not in vis:
                            vis.add(nxt)
                            q.append(nxt)
            res += 1
        return -1

```
