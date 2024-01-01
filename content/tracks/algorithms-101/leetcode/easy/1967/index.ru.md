---
title: 1967. Number of Strings That Appear as Substrings in Word
seoTitle: LeetCode 1967. Number of Strings That Appear as Substrings in Word | Python solution and explanation
description: 1967. Number of Strings That Appear as Substrings in Word
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1967
---

[LeetCode problem 1967](https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/)

```python
class Solution:
    def numOfStrings(self, patterns: List[str], word: str) -> int:
        return sum(p in word for p in patterns)

```
