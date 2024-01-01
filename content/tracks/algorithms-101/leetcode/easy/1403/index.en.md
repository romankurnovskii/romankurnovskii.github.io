---
title: 1403. Minimum Subsequence in Non-Increasing Order
seoTitle: LeetCode 1403. Minimum Subsequence in Non-Increasing Order | Python solution and explanation
description: 1403. Minimum Subsequence in Non-Increasing Order
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1403
---

[LeetCode problem 1403](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/)

```python
class Solution:
    def minSubsequence(self, nums: List[int]) -> List[int]:
        res = []
        s, t = sum(nums), 0
        for x in sorted(nums, reverse=True):
            t += x
            res.append(x)
            if t > s - t:
                break
        return res

```
