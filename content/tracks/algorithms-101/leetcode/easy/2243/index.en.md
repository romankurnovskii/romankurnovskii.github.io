---
title: 2243. Calculate Digit Sum of a String
seoTitle: LeetCode 2243. Calculate Digit Sum of a String | Python solution and explanation
description: 2243. Calculate Digit Sum of a String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2243
---

[LeetCode problem 2243](https://leetcode.com/problems/calculate-digit-sum-of-a-string/)

```python
class Solution:
    def digitSum(self, s: str, k: int) -> str:
        if len(s) <= k:
            return s
        t = []
        while s:
            t.append(str(sum(int(v) for v in s[:k])))
            s = s[k:]
        return self.digitSum(''.join(t), k)

```
