---
title: 2311. Longest Binary Subsequence Less Than or Equal to K
seoTitle: LeetCode 2311. Longest Binary Subsequence Less Than or Equal to K | Python solution and explanation
description: 2311. Longest Binary Subsequence Less Than or Equal to K
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2311
---

[LeetCode problem 2311](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/)

```python
class Solution:
    def longestSubsequence(self, s: str, k: int) -> int:
        res = v = 0
        for c in s[::-1]:
            if c == "0":
                res += 1
            elif res < 30 and (v | 1 << res) <= k:
                v |= 1 << res
                res += 1
        return res

```
