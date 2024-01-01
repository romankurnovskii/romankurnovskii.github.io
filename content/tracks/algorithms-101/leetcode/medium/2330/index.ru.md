---
title: 2330. Valid Palindrome IV
seoTitle: LeetCode 2330. Valid Palindrome IV | Python solution and explanation
description: 2330. Valid Palindrome IV
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2330
---

[LeetCode problem 2330](https://leetcode.com/problems/valid-palindrome-iv/)

```python
class Solution:
    def makePalindrome(self, s: str) -> bool:
        i, j = 0, len(s) - 1
        cnt = 0
        while i < j:
            cnt += s[i] != s[j]
            i, j = i + 1, j - 1
        return cnt <= 2

```
