---
title: 2376. Count Special Integers
seoTitle: LeetCode 2376. Count Special Integers | Python solution and explanation
description: 2376. Count Special Integers
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2376
---

[LeetCode problem 2376](https://leetcode.com/problems/count-special-integers/)

```python
class Solution:
    def countSpecialNumbers(self, n: int) -> int:
        return self.f(n)

    def f(self, n):
        @cache
        def dfs(pos, mask, lead, limit):
            if pos <= 0:
                return lead ^ 1
            up = a[pos] if limit else 9
            res = 0
            for i in range(up + 1):
                if (mask >> i) & 1:
                    continue
                if i == 0 and lead:
                    res += dfs(pos - 1, mask, lead, limit and i == up)
                else:
                    res += dfs(pos - 1, mask | 1 << i, False, limit and i == up)
            return res

        a = [0] * 11
        l = 0
        while n:
            l += 1
            a[l] = n % 10
            n //= 10
        return dfs(l, 0, True, True)

```
