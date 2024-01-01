---
title: 2054. Two Best Non-Overlapping Events
seoTitle: LeetCode 2054. Two Best Non-Overlapping Events | Python solution and explanation
description: 2054. Two Best Non-Overlapping Events
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2054
---

[LeetCode problem 2054](https://leetcode.com/problems/two-best-non-overlapping-events/)

```python
class Solution:
    def maxTwoEvents(self, events: List[List[int]]) -> int:
        events.sort()
        n = len(events)
        f = [events[-1][2]] * n
        for i in range(n - 2, -1, -1):
            f[i] = max(f[i + 1], events[i][2])
        res = 0
        for _, e, v in events:
            idx = bisect_right(events, e, key=lambda x: x[0])
            if idx < n:
                v += f[idx]
            res = max(res, v)
        return res

```
