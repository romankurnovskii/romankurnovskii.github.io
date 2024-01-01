---
title: 2380. Time Needed to Rearrange a Binary String
seoTitle: LeetCode 2380. Time Needed to Rearrange a Binary String | Python solution and explanation
description: 2380. Time Needed to Rearrange a Binary String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2380
---

[LeetCode problem 2380](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/)

```python
class Solution:
    def secondsToRemoveOccurrences(self, s: str) -> int:
        res = cnt = 0
        for c in s:
            if c == '0':
                cnt += 1
            elif cnt:
                res = max(res + 1, cnt)
        return res

```
