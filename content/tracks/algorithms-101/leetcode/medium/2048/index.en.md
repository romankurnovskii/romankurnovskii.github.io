---
title: 2048. Next Greater Numerically Balanced Number
seoTitle: LeetCode 2048. Next Greater Numerically Balanced Number | Python solution and explanation
description: 2048. Next Greater Numerically Balanced Number
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2048
---

[LeetCode problem 2048](https://leetcode.com/problems/next-greater-numerically-balanced-number/)

```python
class Solution:
    def nextBeautifulNumber(self, n: int) -> int:
        for x in count(n + 1):
            y = x
            cnt = [0] * 10
            while y:
                y, v = divmod(y, 10)
                cnt[v] += 1
            if all(v == 0 or i == v for i, v in enumerate(cnt)):
                return x

```
