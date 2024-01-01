---
title: 1668. Maximum Repeating Substring
seoTitle: LeetCode 1668. Maximum Repeating Substring | Python solution and explanation
description: 1668. Maximum Repeating Substring
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1668
---

[LeetCode problem 1668](https://leetcode.com/problems/maximum-repeating-substring/)

```python
class Solution:
    def maxRepeating(self, sequence: str, word: str) -> int:
        for k in range(len(sequence) // len(word), -1, -1):
            if word * k in sequence:
                return k

```
