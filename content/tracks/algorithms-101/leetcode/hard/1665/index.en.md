---
title: 1665. Minimum Initial Energy to Finish Tasks
seoTitle: LeetCode 1665. Minimum Initial Energy to Finish Tasks | Python solution and explanation
description: 1665. Minimum Initial Energy to Finish Tasks
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1665
---

[LeetCode problem 1665](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/)

```python
class Solution:
    def minimumEffort(self, tasks: List[List[int]]) -> int:
        res = cur = 0
        for a, m in sorted(tasks, key=lambda x: x[0] - x[1]):
            if cur < m:
                res += m - cur
                cur = m
            cur -= a
        return res

```
