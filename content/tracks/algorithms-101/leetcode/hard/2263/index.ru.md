---
title: 2263. Make Array Non-decreasing or Non-increasing
seoTitle: LeetCode 2263. Make Array Non-decreasing or Non-increasing | Python solution and explanation
description: 2263. Make Array Non-decreasing or Non-increasing
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2263
---

[LeetCode problem 2263](https://leetcode.com/problems/make-array-non-decreasing-or-non-increasing/)

```python
class Solution:
    def convertArray(self, nums: List[int]) -> int:
        def solve(nums):
            n = len(nums)
            f = [[0] * 1001 for _ in range(n + 1)]
            for i, x in enumerate(nums, 1):
                mi = inf
                for j in range(1001):
                    if mi > f[i - 1][j]:
                        mi = f[i - 1][j]
                    f[i][j] = mi + abs(x - j)
            return min(f[n])

        return min(solve(nums), solve(nums[::-1]))

```
