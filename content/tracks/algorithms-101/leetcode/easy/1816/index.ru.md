---
title: 1816. Truncate Sentence
seoTitle: LeetCode 1816. Truncate Sentence | Python solution and explanation
description: 1816. Truncate Sentence
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1816
---

[LeetCode problem 1816](https://leetcode.com/problems/truncate-sentence/)

```python
class Solution:
    def truncateSentence(self, s: str, k: int) -> str:
        for i, c in enumerate(s):
            k -= c == ' '
            if k == 0:
                return s[:i]
        return s

```
