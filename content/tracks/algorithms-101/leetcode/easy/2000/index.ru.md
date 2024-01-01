---
title: 2000. Reverse Prefix of Word
seoTitle: LeetCode 2000. Reverse Prefix of Word | Python solution and explanation
description: 2000. Reverse Prefix of Word
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2000
---

[LeetCode problem 2000](https://leetcode.com/problems/reverse-prefix-of-word/)

```python
class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        i = word.find(ch)
        return word if i == -1 else word[i::-1] + word[i + 1 :]

```
