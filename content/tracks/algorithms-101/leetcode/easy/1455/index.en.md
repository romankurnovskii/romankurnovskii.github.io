---
title: 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
seoTitle: LeetCode 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence | Python solution and explanation
description: 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1455
---

[LeetCode problem 1455](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/)

```python
class Solution:
    def isPrefixOfWord(self, sentence: str, searchWord: str) -> int:
        for i, s in enumerate(sentence.split(), 1):
            if s.startswith(searchWord):
                return i
        return -1

```
