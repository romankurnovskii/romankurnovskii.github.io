---
title: 2219. Maximum Sum Score of Array
seoTitle: LeetCode 2219. Maximum Sum Score of Array | Python solution and explanation
description: 2219. Maximum Sum Score of Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2219
---

[LeetCode problem 2219](https://leetcode.com/problems/maximum-sum-score-of-array/)

```python
class Solution:
    def maximumSumScore(self, nums: List[int]) -> int:
        s = [0] + list(accumulate(nums))
        return max(max(s[i + 1], s[-1] - s[i]) for i in range(len(nums)))

```
