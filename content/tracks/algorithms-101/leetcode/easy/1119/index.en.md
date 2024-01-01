---
title: 1119. Remove Vowels from a String
seoTitle: LeetCode 1119. Remove Vowels from a String | Python solution and explanation
description: 1119. Remove Vowels from a String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1119
---

[LeetCode problem 1119](https://leetcode.com/problems/remove-vowels-from-a-string/)

```python
class Solution:
    def removeVowels(self, s: str) -> str:
        return "".join(c for c in s if c not in "aeiou")

```
