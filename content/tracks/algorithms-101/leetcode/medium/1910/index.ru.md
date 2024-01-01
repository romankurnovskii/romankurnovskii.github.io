---
title: 1910. Remove All Occurrences of a Substring
seoTitle: LeetCode 1910. Remove All Occurrences of a Substring | Python solution and explanation
description: 1910. Remove All Occurrences of a Substring
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1910
---

[LeetCode problem 1910](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/)

```python
class Solution:
    def removeOccurrences(self, s: str, part: str) -> str:
        while part in s:
            s = s.replace(part, '', 1)
        return s

```
