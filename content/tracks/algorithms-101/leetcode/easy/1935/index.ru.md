---
title: 1935. Maximum Number of Words You Can Type
seoTitle: LeetCode 1935. Maximum Number of Words You Can Type | Python solution and explanation
description: 1935. Maximum Number of Words You Can Type
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1935
---

[LeetCode problem 1935](https://leetcode.com/problems/maximum-number-of-words-you-can-type/)

```python
class Solution:
    def canBeTypedWords(self, text: str, brokenLetters: str) -> int:
        s = set(brokenLetters)
        return sum(all(c not in s for c in w) for w in text.split())

```
