---
title: 1332. Remove Palindromic Subsequences
seoTitle: LeetCode 1332. Remove Palindromic Subsequences | Python solution and explanation
description: 1332. Remove Palindromic Subsequences
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1332
---

[LeetCode problem 1332](https://leetcode.com/problems/remove-palindromic-subsequences/)

```python
class Solution:
    def removePalindromeSub(self, s: str) -> int:
        return 1 if s[::-1] == s else 2

```
