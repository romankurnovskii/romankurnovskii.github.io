---
title: 2141. Maximum Running Time of N Computers
seoTitle: LeetCode 2141. Maximum Running Time of N Computers | Python solution and explanation
description: 2141. Maximum Running Time of N Computers
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2141
---

[LeetCode problem 2141](https://leetcode.com/problems/maximum-running-time-of-n-computers/)

```python
class Solution:
    def maxRunTime(self, n: int, batteries: List[int]) -> int:
        l, r = 0, sum(batteries)
        while l < r:
            mid = (l + r + 1) >> 1
            if sum(min(x, mid) for x in batteries) >= n * mid:
                l = mid
            else:
                r = mid - 1
        return l

```
