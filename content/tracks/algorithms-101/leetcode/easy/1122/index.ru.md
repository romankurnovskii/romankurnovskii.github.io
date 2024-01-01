---
title: 1122. Relative Sort Array
seoTitle: LeetCode 1122. Relative Sort Array | Python solution and explanation
description: 1122. Relative Sort Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1122
---

[LeetCode problem 1122](https://leetcode.com/problems/relative-sort-array/)

```python
class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        pos = {x: i for i, x in enumerate(arr2)}
        return sorted(arr1, key=lambda x: pos.get(x, 1000 + x))

```
