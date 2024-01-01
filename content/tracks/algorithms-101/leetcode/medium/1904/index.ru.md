---
title: 1904. The Number of Full Rounds You Have Played
seoTitle: LeetCode 1904. The Number of Full Rounds You Have Played | Python solution and explanation
description: 1904. The Number of Full Rounds You Have Played
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1904
---

[LeetCode problem 1904](https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/)

```python
class Solution:
    def numberOfRounds(self, loginTime: str, logoutTime: str) -> int:
        def f(s: str) -> int:
            return int(s[:2]) * 60 + int(s[3:])

        a, b = f(loginTime), f(logoutTime)
        if a > b:
            b += 1440
        a, b = (a + 14) // 15, b // 15
        return max(0, b - a)

```
