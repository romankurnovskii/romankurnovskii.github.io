---
title: 1834. Single-Threaded CPU
seoTitle: LeetCode 1834. Single-Threaded CPU | Python solution and explanation
description: 1834. Single-Threaded CPU
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1834
---

[LeetCode problem 1834](https://leetcode.com/problems/single-threaded-cpu/)

```python
class Solution:
    def getOrder(self, tasks: List[List[int]]) -> List[int]:
        for i, task in enumerate(tasks):
            task.append(i)
        tasks.sort()
        res = []
        q = []
        n = len(tasks)
        i = t = 0
        while q or i < n:
            if not q:
                t = max(t, tasks[i][0])
            while i < n and tasks[i][0] <= t:
                heappush(q, (tasks[i][1], tasks[i][2]))
                i += 1
            pt, j = heappop(q)
            res.append(j)
            t += pt
        return res

```
