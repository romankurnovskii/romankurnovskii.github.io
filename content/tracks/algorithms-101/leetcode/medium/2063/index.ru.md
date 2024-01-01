---
title: 2063. Vowels of All Substrings
seoTitle: LeetCode 2063. Vowels of All Substrings | Python solution and explanation
description: 2063. Vowels of All Substrings
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2063
---

[LeetCode problem 2063](https://leetcode.com/problems/vowels-of-all-substrings/)

```python
class Solution:
    def countVowels(self, word: str) -> int:
        n = len(word)
        return sum((i + 1) * (n - i) for i, c in enumerate(word) if c in 'aeiou')

```
