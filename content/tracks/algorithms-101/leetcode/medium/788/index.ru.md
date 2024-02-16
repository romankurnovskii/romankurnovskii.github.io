---
title: 788. Rotated Digits
seoTitle: LeetCode 788. Rotated Digits | Python solution and explanation
description: 788. Rotated Digits
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 788
---

[LeetCode problem 788](https://leetcode.com/problems/rotated-digits/)

```python
class Solution:
    def rotatedDigits(self, n: int) -> int:
        @cache
        def dfs(pos, ok, limit):
            if pos <= 0:
                return ok
            up = a[pos] if limit else 9
            res = 0
            for i in range(up + 1):
                if i in (0, 1, 8):
                    res += dfs(pos - 1, ok, limit and i == up)
                if i in (2, 5, 6, 9):
                    res += dfs(pos - 1, 1, limit and i == up)
            return res

        a = [0] * 6
        l = 1
        while n:
            a[l] = n % 10
            n //= 10
            l += 1
        return dfs(l, 0, True)

```
