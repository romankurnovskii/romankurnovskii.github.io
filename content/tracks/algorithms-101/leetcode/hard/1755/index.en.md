---
title: 1755. Closest Subsequence Sum
seoTitle: LeetCode 1755. Closest Subsequence Sum | Python solution and explanation
description: 1755. Closest Subsequence Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1755
---

[LeetCode problem 1755](https://leetcode.com/problems/closest-subsequence-sum/)

```python
class Solution:
    def minAbsDifference(self, nums: List[int], goal: int) -> int:
        def dfs(arr, res, i, s):
            if i == len(arr):
                res.add(s)
                return
            dfs(arr, res, i + 1, s)
            dfs(arr, res, i + 1, s + arr[i])

        n = len(nums)
        left, right = set(), set()
        dfs(nums[: n >> 1], left, 0, 0)
        dfs(nums[n >> 1 :], right, 0, 0)
        right = sorted(right)
        res = inf
        for l in left:
            x = goal - l
            i = bisect_left(right, x)
            if i < len(right):
                res = min(res, abs(x - right[i]))
            if i:
                res = min(res, abs(x - right[i - 1]))
        return res

```
