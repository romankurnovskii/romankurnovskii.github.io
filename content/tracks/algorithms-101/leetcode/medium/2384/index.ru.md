---
title: 2384. Largest Palindromic Number
seoTitle: LeetCode 2384. Largest Palindromic Number | Python solution and explanation
description: 2384. Largest Palindromic Number
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2384
---

[LeetCode problem 2384](https://leetcode.com/problems/largest-palindromic-number/)

```python
class Solution:
    def largestPalindromic(self, num: str) -> str:
        cnt = Counter(num)
        res = ''
        for i in range(9, -1, -1):
            v = str(i)
            if cnt[v] % 2:
                res = v
                cnt[v] -= 1
                break
        for i in range(10):
            v = str(i)
            if cnt[v]:
                cnt[v] //= 2
                s = cnt[v] * v
                res = s + res + s
        return res.strip('0') or '0'

```