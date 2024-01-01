---
title: 1089. Duplicate Zeros
seoTitle: LeetCode 1089. Duplicate Zeros | Python solution and explanation
description: 1089. Duplicate Zeros
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1089
---

[LeetCode problem 1089](https://leetcode.com/problems/duplicate-zeros/)

```python
class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        """
        Do not return anything, modify arr in-place instead.
        """
        n = len(arr)
        i, k = -1, 0
        while k < n:
            i += 1
            k += 1 if arr[i] else 2
        j = n - 1
        if k == n + 1:
            arr[j] = 0
            i, j = i - 1, j - 1
        while ~j:
            if arr[i] == 0:
                arr[j] = arr[j - 1] = arr[i]
                j -= 1
            else:
                arr[j] = arr[i]
            i, j = i - 1, j - 1

```
