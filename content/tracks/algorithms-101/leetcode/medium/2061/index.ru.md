---
title: 2061. Number of Spaces Cleaning Robot Cleaned
seoTitle: LeetCode 2061. Number of Spaces Cleaning Robot Cleaned | Python solution and explanation
description: 2061. Number of Spaces Cleaning Robot Cleaned
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2061
---

[LeetCode problem 2061](https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/)

```python
class Solution:
    def numberOfCleanRooms(self, room: List[List[int]]) -> int:
        dirs = (0, 1, 0, -1, 0)
        i = j = k = 0
        res = 0
        vis = set()
        while (i, j, k) not in vis:
            vis.add((i, j, k))
            res += room[i][j] == 0
            room[i][j] = -1
            x, y = i + dirs[k], j + dirs[k + 1]
            if 0 <= x < len(room) and 0 <= y < len(room[0]) and room[x][y] != 1:
                i, j = x, y
            else:
                k = (k + 1) % 4
        return res

```
