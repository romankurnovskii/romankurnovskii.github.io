---
title: 1736. Latest Time by Replacing Hidden Digits
seoTitle: LeetCode 1736. Latest Time by Replacing Hidden Digits | Python solution and explanation
description: 1736. Latest Time by Replacing Hidden Digits
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1736
---

[LeetCode problem 1736](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/)

```python
class Solution:
    def maximumTime(self, time: str) -> str:
        t = list(time)
        if t[0] == '?':
            t[0] = '1' if '4' <= t[1] <= '9' else '2'
        if t[1] == '?':
            t[1] = '3' if t[0] == '2' else '9'
        if t[3] == '?':
            t[3] = '5'
        if t[4] == '?':
            t[4] = '9'
        return ''.join(t)

```
