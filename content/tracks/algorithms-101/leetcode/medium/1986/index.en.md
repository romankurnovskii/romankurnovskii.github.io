---
title: 1986. Minimum Number of Work Sessions to Finish the Tasks
seoTitle: LeetCode 1986. Minimum Number of Work Sessions to Finish the Tasks | Python solution and explanation
description: 1986. Minimum Number of Work Sessions to Finish the Tasks
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1986
---

[LeetCode problem 1986](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/)

```python
class Solution:
    def minSessions(self, tasks: List[int], sessionTime: int) -> int:
        n = len(tasks)
        ok = [False] * (1 << n)
        for i in range(1, 1 << n):
            t = sum(tasks[j] for j in range(n) if i >> j & 1)
            ok[i] = t <= sessionTime
        f = [inf] * (1 << n)
        f[0] = 0
        for i in range(1, 1 << n):
            j = i
            while j:
                if ok[j]:
                    f[i] = min(f[i], f[i ^ j] + 1)
                j = (j - 1) & i
        return f[-1]

```
