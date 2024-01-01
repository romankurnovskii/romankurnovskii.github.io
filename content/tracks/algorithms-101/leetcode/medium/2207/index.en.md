---
title: 2207. Maximize Number of Subsequences in a String
seoTitle: LeetCode 2207. Maximize Number of Subsequences in a String | Python solution and explanation
description: 2207. Maximize Number of Subsequences in a String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2207
---

[LeetCode problem 2207](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/)

```python
class Solution:
    def maximumSubsequenceCount(self, text: str, pattern: str) -> int:
        res = 0
        cnt = Counter()
        for c in text:
            if c == pattern[1]:
                res += cnt[pattern[0]]
            cnt[c] += 1
        res += max(cnt[pattern[0]], cnt[pattern[1]])
        return res

```
