---
title: 1882. Process Tasks Using Servers
seoTitle: LeetCode 1882. Process Tasks Using Servers | Python solution and explanation
description: 1882. Process Tasks Using Servers
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1882
---

[LeetCode problem 1882](https://leetcode.com/problems/process-tasks-using-servers/)

```python
class Solution:
    def assignTasks(self, servers: List[int], tasks: List[int]) -> List[int]:
        idle, busy = [], []
        for i, weight in enumerate(servers):
            heappush(idle, (weight, i))
        res = []
        for start, cost in enumerate(tasks):
            while busy and busy[0][0] <= start:
                _, s, i = heappop(busy)
                heappush(idle, (s, i))
            if idle:
                s, i = heappop(idle)
                heappush(busy, (start + cost, s, i))
            else:
                t, s, i = heappop(busy)
                heappush(busy, (t + cost, s, i))
            res.append(i)
        return res

```
