---
title: 1805. Number of Different Integers in a String
seoTitle: LeetCode 1805. Number of Different Integers in a String | Python solution and explanation
description: 1805. Number of Different Integers in a String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1805
---

[LeetCode problem 1805](https://leetcode.com/problems/number-of-different-integers-in-a-string/)

```python
class Solution:
    def numDifferentIntegers(self, word: str) -> int:
        s = set()
        i, n = 0, len(word)
        while i < n:
            if word[i].isdigit():
                while i < n and word[i] == '0':
                    i += 1
                j = i
                while j < n and word[j].isdigit():
                    j += 1
                s.add(word[i:j])
                i = j
            i += 1
        return len(s)

```
