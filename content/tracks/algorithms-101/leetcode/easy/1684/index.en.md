---
title: 1684. Count the Number of Consistent Strings
seoTitle: LeetCode 1684. Count the Number of Consistent Strings | Python solution and explanation
description: 1684. Count the Number of Consistent Strings
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1684
---

[LeetCode problem 1684](https://leetcode.com/problems/count-the-number-of-consistent-strings/)

```python
class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        def f(w):
            return reduce(or_, (1 << (ord(c) - ord('a')) for c in w))

        mask = f(allowed)
        return sum((mask | f(w)) == mask for w in words)

```
