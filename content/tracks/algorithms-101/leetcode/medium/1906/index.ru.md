---
title: 1906. Minimum Absolute Difference Queries
seoTitle: LeetCode 1906. Minimum Absolute Difference Queries | Python solution and explanation
description: 1906. Minimum Absolute Difference Queries
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1906
---

[LeetCode problem 1906](https://leetcode.com/problems/minimum-absolute-difference-queries/)

```python
class Solution:
    def minDifference(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        m, n = len(nums), len(queries)
        pre_sum = [[0] * 101 for _ in range(m + 1)]
        for i in range(1, m + 1):
            for j in range(1, 101):
                t = 1 if nums[i - 1] == j else 0
                pre_sum[i][j] = pre_sum[i - 1][j] + t

        res = []
        for i in range(n):
            left, right = queries[i][0], queries[i][1] + 1
            t = inf
            last = -1
            for j in range(1, 101):
                if pre_sum[right][j] - pre_sum[left][j] > 0:
                    if last != -1:
                        t = min(t, j - last)
                    last = j
            if t == inf:
                t = -1
            res.append(t)
        return res

```
