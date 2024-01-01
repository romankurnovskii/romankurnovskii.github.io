---
title: 1427. Perform String Shifts
seoTitle: LeetCode 1427. Perform String Shifts | Python solution and explanation
description: 1427. Perform String Shifts
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1427
---

[LeetCode problem 1427](https://leetcode.com/problems/perform-string-shifts/)

```python
class Solution:
    def stringShift(self, s: str, shift: List[List[int]]) -> str:
        x = sum((b if a else -b) for a, b in shift)
        x %= len(s)
        return s[-x:] + s[:-x]

```
