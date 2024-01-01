---
title: 1422. Maximum Score After Splitting a String
seoTitle: LeetCode 1422. Maximum Score After Splitting a String | Python solution and explanation
description: 1422. Maximum Score After Splitting a String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1422
---

[LeetCode problem 1422](https://leetcode.com/problems/maximum-score-after-splitting-a-string/)

```python
class Solution:
    def maxScore(self, s: str) -> int:
        res = t = (s[0] == '0') + s[1:].count('1')
        for i in range(1, len(s) - 1):
            t += 1 if s[i] == '0' else -1
            res = max(res, t)
        return res

```
