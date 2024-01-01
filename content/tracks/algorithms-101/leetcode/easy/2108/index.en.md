---
title: 2108. Find First Palindromic String in the Array
seoTitle: LeetCode 2108. Find First Palindromic String in the Array | Python solution and explanation
description: 2108. Find First Palindromic String in the Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2108
---

[LeetCode problem 2108](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/)

```python
class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        return next((w for w in words if w == w[::-1]), "")

```
