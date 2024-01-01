---
title: 2323. Find Minimum Time to Finish All Jobs II
seoTitle: LeetCode 2323. Find Minimum Time to Finish All Jobs II | Python solution and explanation
description: 2323. Find Minimum Time to Finish All Jobs II
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2323
---

[LeetCode problem 2323](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/)

```python
class Solution:
    def minimumTime(self, jobs: List[int], workers: List[int]) -> int:
        jobs.sort()
        workers.sort()
        return max((a + b - 1) // b for a, b in zip(jobs, workers))

```
