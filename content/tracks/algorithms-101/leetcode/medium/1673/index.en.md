---
title: 1673. Find the Most Competitive Subsequence
seoTitle: LeetCode 1673. Find the Most Competitive Subsequence | Python solution and explanation
description: 1673. Find the Most Competitive Subsequence
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1673
---

[LeetCode problem 1673](https://leetcode.com/problems/find-the-most-competitive-subsequence/)

```python
class Solution:
    def mostCompetitive(self, nums: List[int], k: int) -> List[int]:
        stk = []
        n = len(nums)
        for i, v in enumerate(nums):
            while stk and stk[-1] > v and len(stk) + n - i > k:
                stk.pop()
            if len(stk) < k:
                stk.append(v)
        return stk

```
