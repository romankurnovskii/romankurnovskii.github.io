---
title: 2068. Check Whether Two Strings are Almost Equivalent
seoTitle: LeetCode 2068. Check Whether Two Strings are Almost Equivalent | Python solution and explanation
description: 2068. Check Whether Two Strings are Almost Equivalent
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2068
---

[LeetCode problem 2068](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/)

```python
class Solution:
    def checkAlmostEquivalent(self, word1: str, word2: str) -> bool:
        cnt = Counter(word1)
        for c in word2:
            cnt[c] -= 1
        return all(abs(x) <= 3 for x in cnt.values())

```
