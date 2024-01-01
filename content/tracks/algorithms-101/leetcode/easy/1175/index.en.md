---
title: 1175. Prime Arrangements
seoTitle: LeetCode 1175. Prime Arrangements | Python solution and explanation
description: 1175. Prime Arrangements
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1175
---

[LeetCode problem 1175](https://leetcode.com/problems/prime-arrangements/)

```python
class Solution:
    def numPrimeArrangements(self, n: int) -> int:
        def count(n):
            cnt = 0
            primes = [True] * (n + 1)
            for i in range(2, n + 1):
                if primes[i]:
                    cnt += 1
                    for j in range(i + i, n + 1, i):
                        primes[j] = False
            return cnt

        cnt = count(n)
        res = factorial(cnt) * factorial(n - cnt)
        return res % (10**9 + 7)

```
