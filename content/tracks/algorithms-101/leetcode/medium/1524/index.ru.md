---
title: 1524. Number of Sub-arrays With Odd Sum
seoTitle: LeetCode 1524. Number of Sub-arrays With Odd Sum | Python solution and explanation
description: 1524. Number of Sub-arrays With Odd Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1524
---

[LeetCode problem 1524](https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/)

```python
class Solution:
    def numOfSubarrays(self, arr: List[int]) -> int:
        mod = 10**9 + 7
        cnt = [1, 0]
        res = s = 0
        for x in arr:
            s += x
            res = (res + cnt[s & 1 ^ 1]) % mod
            cnt[s & 1] += 1
        return res

```
