---
title: 2278. Percentage of Letter in String
seoTitle: LeetCode 2278. Percentage of Letter in String | Python solution and explanation
description: 2278. Percentage of Letter in String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2278
---

[LeetCode problem 2278](https://leetcode.com/problems/percentage-of-letter-in-string/)

```python
class Solution:
    def percentageLetter(self, s: str, letter: str) -> int:
        return s.count(letter) * 100 // len(s)

```
