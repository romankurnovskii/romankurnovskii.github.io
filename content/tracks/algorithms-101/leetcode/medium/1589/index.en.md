---
title: 1589. Maximum Sum Obtained of Any Permutation
seoTitle: LeetCode 1589. Maximum Sum Obtained of Any Permutation | Python solution and explanation
description: 1589. Maximum Sum Obtained of Any Permutation
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1589
---

[LeetCode problem 1589](https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/)

```python
class Solution:
    def maxSumRangeQuery(self, nums: List[int], requests: List[List[int]]) -> int:
        n = len(nums)
        d = [0] * n
        for l, r in requests:
            d[l] += 1
            if r + 1 < n:
                d[r + 1] -= 1
        for i in range(1, n):
            d[i] += d[i - 1]
        nums.sort()
        d.sort()
        mod = 10**9 + 7
        return sum(a * b for a, b in zip(nums, d)) % mod

```
