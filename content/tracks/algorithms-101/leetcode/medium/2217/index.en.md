---
title: 2217. Find Palindrome With Fixed Length
seoTitle: LeetCode 2217. Find Palindrome With Fixed Length | Python solution and explanation
description: 2217. Find Palindrome With Fixed Length
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2217
---

[LeetCode problem 2217](https://leetcode.com/problems/find-palindrome-with-fixed-length/)

```python
class Solution:
    def kthPalindrome(self, queries: List[int], intLength: int) -> List[int]:
        l = (intLength + 1) >> 1
        start, end = 10 ** (l - 1), 10**l - 1
        res = []
        for q in queries:
            v = start + q - 1
            if v > end:
                res.append(-1)
                continue
            s = str(v)
            s += s[::-1][intLength % 2 :]
            res.append(int(s))
        return res

```
