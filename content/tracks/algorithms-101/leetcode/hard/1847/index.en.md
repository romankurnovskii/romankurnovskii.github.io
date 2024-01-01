---
title: 1847. Closest Room
seoTitle: LeetCode 1847. Closest Room | Python solution and explanation
description: 1847. Closest Room
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1847
---

[LeetCode problem 1847](https://leetcode.com/problems/closest-room/)

```python
from sortedcontainers import SortedList


class Solution:
    def closestRoom(
        self, rooms: List[List[int]], queries: List[List[int]]
    ) -> List[int]:
        rooms.sort(key=lambda x: x[1])
        k = len(queries)
        idx = sorted(range(k), key=lambda i: queries[i][1])
        res = [-1] * k
        i, n = 0, len(rooms)
        sl = SortedList(x[0] for x in rooms)
        for j in idx:
            prefer, minSize = queries[j]
            while i < n and rooms[i][1] < minSize:
                sl.remove(rooms[i][0])
                i += 1
            if i == n:
                break
            p = sl.bisect_left(prefer)
            if p < len(sl):
                res[j] = sl[p]
            if p and (res[j] == -1 or res[j] - prefer >= prefer - sl[p - 1]):
                res[j] = sl[p - 1]
        return res

```
