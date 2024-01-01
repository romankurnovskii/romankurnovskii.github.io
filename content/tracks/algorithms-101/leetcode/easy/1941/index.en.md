---
title: 1941. Check if All Characters Have Equal Number of Occurrences
seoTitle: LeetCode 1941. Check if All Characters Have Equal Number of Occurrences | Python solution and explanation
description: 1941. Check if All Characters Have Equal Number of Occurrences
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1941
---

[LeetCode problem 1941](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/)

```python
class Solution:
    def areOccurrencesEqual(self, s: str) -> bool:
        cnt = Counter(s)
        return len(set(cnt.values())) == 1

```
