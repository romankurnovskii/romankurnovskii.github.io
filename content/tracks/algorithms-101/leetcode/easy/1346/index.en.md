---
title: 1346. Check If N and Its Double Exist
seoTitle: LeetCode 1346. Check If N and Its Double Exist | Python solution and explanation
description: 1346. Check If N and Its Double Exist
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1346
---

[LeetCode problem 1346](https://leetcode.com/problems/check-if-n-and-its-double-exist/)

```python
class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        if arr.count(0) > 1:
            return True
        arr.sort()
        n = len(arr)
        for v in arr:
            idx = bisect_left(arr, v * 2)
            if v != 0 and idx != n and arr[idx] == v * 2:
                return True
        return False

```
