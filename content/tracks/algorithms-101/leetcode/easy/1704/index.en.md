---
title: 1704. Determine if String Halves Are Alike
seoTitle: LeetCode 1704. Determine if String Halves Are Alike | Python solution and explanation
description: 1704. Determine if String Halves Are Alike
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1704
---

[LeetCode problem 1704](https://leetcode.com/problems/determine-if-string-halves-are-alike/)

```python
class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        vowels = set('aeiouAEIOU')
        a, b = s[: len(s) >> 1], s[len(s) >> 1 :]
        return sum(c in vowels for c in a) == sum(c in vowels for c in b)

```
