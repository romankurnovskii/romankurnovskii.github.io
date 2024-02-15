---
title: 2406. Divide Intervals Into Minimum Number of Groups
seoTitle: LeetCode 2406. Divide Intervals Into Minimum Number of Groups | Python solution and explanation
description: 2406. Divide Intervals Into Minimum Number of Groups
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2406
---

[LeetCode problem 2406](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/)

```python
class Solution:
    def minGroups(self, intervals: List[List[int]]) -> int:
        h = []
        for a, b in sorted(intervals):
            if h and h[0] < a:
                heappop(h)
            heappush(h, b)
        return len(h)

```
