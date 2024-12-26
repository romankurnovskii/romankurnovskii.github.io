---
title: 56. Merge Intervals
description: LeetCode 56. Merge Intervals
seoTitle: LeetCode 56. Merge Intervals | Python solution and explanation
toc: true
authors: []
tags: [Array, Sorting]
categories: [Algorithms, Medium]
series: [Array, Sorting]
date: 2022-12-29
featuredImage:
weight: 56
---


[LeetCode problem](https://leetcode.com/problems/maximum-subarray/)

Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the *non-overlapping intervals that cover all the intervals in the input*.

**Example 1:**

    Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
    Output: [[1,6],[8,10],[15,18]]
    Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

**Example 2:**

    Input: intervals = [[1,4],[4,5]]
    Output: [[1,5]]
    Explanation: Intervals [1,4] and [4,5] are considered overlapping.

**Approach 1:**

```python
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort()
        res = [intervals[0]]
        for ir in range(1, len(intervals)):
            if intervals[ir][0] >= res[-1][0] and intervals[ir][0] <= res[-1][1]: # [1,3],[2,6]
                res[-1][0] = min(intervals[ir][0], res[-1][0])
                res[-1][1] = max(intervals[ir][1], res[-1][1])
            elif res[-1][0] >= intervals[ir][0] and res[-1][0] <= intervals[ir][1]: # [1,3],[0,4]
                res[-1][0] = min(intervals[ir][0], res[-1][0])
                res[-1][1] = max(intervals[ir][1], res[-1][1])
            else:
                res.append(intervals[ir])
        return res
```

**Approach 2:**

```python
class Solution:
  def merge(self, intervals: List[List[int]]) -> List[List[int]]:
    res = []
    for interval in sorted(intervals):
      if not res or res[-1][1] < interval[0]:
        res.append(interval)
      else:
        res[-1][1] = max(res[-1][1], interval[1])
    return res
```
