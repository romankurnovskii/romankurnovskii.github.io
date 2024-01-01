---
title: 2194. Cells in a Range on an Excel Sheet
seoTitle: LeetCode 2194. Cells in a Range on an Excel Sheet | Python solution and explanation
description: 2194. Cells in a Range on an Excel Sheet
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2194
---

[LeetCode problem 2194](https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/)

```python
class Solution:
    def cellsInRange(self, s: str) -> List[str]:
        return [
            chr(i) + str(j)
            for i in range(ord(s[0]), ord(s[-2]) + 1)
            for j in range(int(s[1]), int(s[-1]) + 1)
        ]

```
