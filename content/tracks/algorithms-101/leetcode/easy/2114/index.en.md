---
title: 2114. Maximum Number of Words Found in Sentences
seoTitle: LeetCode 2114. Maximum Number of Words Found in Sentences | Python solution and explanation
description: 2114. Maximum Number of Words Found in Sentences
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2114
---

[LeetCode problem 2114](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/)

```python
class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        return 1 + max(s.count(' ') for s in sentences)

```
