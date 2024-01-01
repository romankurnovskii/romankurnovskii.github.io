---
title: 1942. The Number of the Smallest Unoccupied Chair
seoTitle: LeetCode 1942. The Number of the Smallest Unoccupied Chair | Python solution and explanation
description: 1942. The Number of the Smallest Unoccupied Chair
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1942
---

[LeetCode problem 1942](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/)

```python
class Solution:
    def smallestChair(self, times: List[List[int]], targetFriend: int) -> int:
        n = len(times)
        h = list(range(n))
        heapify(h)
        for i in range(n):
            times[i].append(i)
        times.sort()
        busy = []
        for a, b, i in times:
            while busy and busy[0][0] <= a:
                heappush(h, heappop(busy)[1])
            c = heappop(h)
            if i == targetFriend:
                return c
            heappush(busy, (b, c))
        return -1

```
