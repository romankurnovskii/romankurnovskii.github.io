---
title: 1451. Rearrange Words in a Sentence
seoTitle: LeetCode 1451. Rearrange Words in a Sentence | Python solution and explanation
description: 1451. Rearrange Words in a Sentence
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1451
---

[LeetCode problem 1451](https://leetcode.com/problems/rearrange-words-in-a-sentence/)

```python
class Solution:
    def arrangeWords(self, text: str) -> str:
        words = text.split()
        words[0] = words[0].lower()
        words.sort(key=len)
        words[0] = words[0].title()
        return " ".join(words)

```
