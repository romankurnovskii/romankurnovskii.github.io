---
title: 1574. Shortest Subarray to be Removed to Make Array Sorted
seoTitle: LeetCode 1574. Shortest Subarray to be Removed to Make Array Sorted | Python solution and explanation
description: 1574. Shortest Subarray to be Removed to Make Array Sorted
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1574
---

[LeetCode problem 1574](https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/)

```python
class Solution:
    def findLengthOfShortestSubarray(self, arr: List[int]) -> int:
        n = len(arr)
        i, j = 0, n - 1
        while i + 1 < n and arr[i] <= arr[i + 1]:
            i += 1
        while j - 1 >= 0 and arr[j - 1] <= arr[j]:
            j -= 1
        if i >= j:
            return 0
        res = min(n - i - 1, j)
        r = j
        for l in range(i + 1):
            while r < n and arr[r] < arr[l]:
                r += 1
            res = min(res, r - l - 1)
        return res

```
