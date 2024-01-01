---
title: 2062. Count Vowel Substrings of a String
seoTitle: LeetCode 2062. Count Vowel Substrings of a String | Python solution and explanation
description: 2062. Count Vowel Substrings of a String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2062
---

[LeetCode problem 2062](https://leetcode.com/problems/count-vowel-substrings-of-a-string/)

```python
class Solution:
    def countVowelSubstrings(self, word: str) -> int:
        s = set('aeiou')
        res, n = 0, len(word)
        for i in range(n):
            t = set()
            for c in word[i:]:
                if c not in s:
                    break
                t.add(c)
                res += len(t) == 5
        return res

```
