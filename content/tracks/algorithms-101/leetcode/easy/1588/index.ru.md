---
title: 1588. Sum of All Odd Length Subarrays
seoTitle: LeetCode 1588. Sum of All Odd Length Subarrays | Python solution and explanation
description: 1588. Sum of All Odd Length Subarrays
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1588
---

[LeetCode problem 1588](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/)

```python
class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        res, n = 0, len(arr)
        for i in range(n):
            s = 0
            for j in range(i, n):
                s += arr[j]
                if (j - i + 1) & 1:
                    res += s
        return res

```
