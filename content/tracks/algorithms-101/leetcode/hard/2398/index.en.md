---
title: 2398. Maximum Number of Robots Within Budget
seoTitle: LeetCode 2398. Maximum Number of Robots Within Budget | Python solution and explanation
description: 2398. Maximum Number of Robots Within Budget
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2398
---

[LeetCode problem 2398](https://leetcode.com/problems/maximum-number-of-robots-within-budget/)

```python
class Solution:
    def maximumRobots(
        self, chargeTimes: List[int], runningCosts: List[int], budget: int
    ) -> int:
        q = deque()
        res = j = s = 0
        for i, (a, b) in enumerate(zip(chargeTimes, runningCosts)):
            while q and chargeTimes[q[-1]] <= a:
                q.pop()
            q.append(i)
            s += b
            while q and chargeTimes[q[0]] + (i - j + 1) * s > budget:
                if q[0] == j:
                    q.popleft()
                s -= runningCosts[j]
                j += 1
            res = max(res, i - j + 1)
        return res

```
