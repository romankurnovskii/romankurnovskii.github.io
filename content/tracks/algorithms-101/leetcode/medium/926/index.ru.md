---
title: 926. Flip String to Monotone Increasing
seoTitle: LeetCode Flip String to Monotone Increasing | Python solution and explanation
description: Flip String to Monotone Increasing
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 926
---

[LeetCode problem 926](https://leetcode.com/problems/flip-string-to-monotone-increasing/)

```python
class Solution:
    def minFlipsMonoIncr(self, s: str) -> int:
        n = len(s)
        presum = [0] * (n + 1)
        for i, c in enumerate(s):
            presum[i + 1] = presum[i] + int(c)
        res = presum[-1]
        for i in range(n):
            res = min(res, presum[i] + n - i - (presum[-1] - presum[i]))
        return res

```
