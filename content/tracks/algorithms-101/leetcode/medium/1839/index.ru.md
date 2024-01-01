---
title: 1839. Longest Substring Of All Vowels in Order
seoTitle: LeetCode 1839. Longest Substring Of All Vowels in Order | Python solution and explanation
description: 1839. Longest Substring Of All Vowels in Order
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1839
---

[LeetCode problem 1839](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/)

```python
class Solution:
    def longestBeautifulSubstring(self, word: str) -> int:
        arr = []
        n = len(word)
        i = 0
        while i < n:
            j = i
            while j < n and word[j] == word[i]:
                j += 1
            arr.append((word[i], j - i))
            i = j
        res = 0
        for i in range(len(arr) - 4):
            a, b, c, d, e = arr[i : i + 5]
            if a[0] + b[0] + c[0] + d[0] + e[0] == "aeiou":
                res = max(res, a[1] + b[1] + c[1] + d[1] + e[1])
        return res

```
