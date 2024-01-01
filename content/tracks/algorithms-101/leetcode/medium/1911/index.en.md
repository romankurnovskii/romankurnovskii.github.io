---
title: 1911. Maximum Alternating Subsequence Sum
seoTitle: LeetCode 1911. Maximum Alternating Subsequence Sum | Python solution and explanation
description: 1911. Maximum Alternating Subsequence Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1911
---

[LeetCode problem 1911](https://leetcode.com/problems/maximum-alternating-subsequence-sum/)

```python
class Solution:
    def maxAlternatingSum(self, nums: List[int]) -> int:
        f = g = 0
        for x in nums:
            f, g = max(g - x, f), max(f + x, g)
        return max(f, g)

```
