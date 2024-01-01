---
title: 2099. Find Subsequence of Length K With the Largest Sum
seoTitle: LeetCode 2099. Find Subsequence of Length K With the Largest Sum | Python solution and explanation
description: 2099. Find Subsequence of Length K With the Largest Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2099
---

[LeetCode problem 2099](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/)

```python
class Solution:
    def maxSubsequence(self, nums: List[int], k: int) -> List[int]:
        idx = list(range(len(nums)))
        idx.sort(key=lambda i: nums[i])
        return [nums[i] for i in sorted(idx[-k:])]

```
