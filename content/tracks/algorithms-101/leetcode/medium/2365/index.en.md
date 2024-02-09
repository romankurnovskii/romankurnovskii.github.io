---
title: 2365. Task Scheduler II
seoTitle: LeetCode 2365. Task Scheduler II | Python solution and explanation
description: 2365. Task Scheduler II
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2365
---

[LeetCode problem 2365](https://leetcode.com/problems/task-scheduler-ii/)

```python
class Solution:
    def taskSchedulerII(self, tasks: List[int], space: int) -> int:
        day = defaultdict(int)
        res = 0
        for task in tasks:
            res += 1
            res = max(res, day[task])
            day[task] = res + space + 1
        return res

```