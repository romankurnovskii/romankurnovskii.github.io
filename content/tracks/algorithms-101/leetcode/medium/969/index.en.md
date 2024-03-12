---
title: 969. Pancake Sorting
seoTitle: LeetCode Pancake Sorting | Python solution and explanation
description: Pancake Sorting
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 969
---

[LeetCode problem 969](https://leetcode.com/problems/pancake-sorting/)

```python
class Solution:
    def pancakeSort(self, arr: List[int]) -> List[int]:
        def reverse(arr, j):
            i = 0
            while i < j:
                arr[i], arr[j] = arr[j], arr[i]
                i, j = i + 1, j - 1

        n = len(arr)
        res = []
        for i in range(n - 1, 0, -1):
            j = i
            while j > 0 and arr[j] != i + 1:
                j -= 1
            if j < i:
                if j > 0:
                    res.append(j + 1)
                    reverse(arr, j)
                res.append(i + 1)
                reverse(arr, i)
        return res

```
