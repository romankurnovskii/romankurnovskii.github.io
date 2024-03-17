---
title: 57. Insert Interval
seoTitle: LeetCode 57. Insert Interval | Python solution and explanation
description: 57. Insert Interval
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 57
---

[LeetCode problem 57](https://leetcode.com/problems/insert-interval/)

```python
class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        res = []
        i = -1
        for i, (x, y) in enumerate(intervals):
            if y < newInterval[0]:
                res.append([x, y])
            elif newInterval[1] < x:
                i -= 1
                break
            else:
                newInterval[0] = min(newInterval[0], x)
                newInterval[1] = max(newInterval[1], y)

        return res + [newInterval] + intervals[i+1:]
```
