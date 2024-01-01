---
title: 1640. Check Array Formation Through Concatenation
seoTitle: LeetCode 1640. Check Array Formation Through Concatenation | Python solution and explanation
description: 1640. Check Array Formation Through Concatenation
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1640
---

[LeetCode problem 1640](https://leetcode.com/problems/check-array-formation-through-concatenation/)

```python
class Solution:
    def canFormArray(self, arr: List[int], pieces: List[List[int]]) -> bool:
        d = {p[0]: p for p in pieces}
        i, n = 0, len(arr)
        while i < n:
            if arr[i] not in d:
                return False
            p = d[arr[i]]
            if arr[i : i + len(p)] != p:
                return False
            i += len(p)
        return True

```
