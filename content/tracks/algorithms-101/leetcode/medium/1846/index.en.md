---
title: 1846. Maximum Element After Decreasing and Rearranging
seoTitle: LeetCode 1846. Maximum Element After Decreasing and Rearranging | Python solution and explanation
description: 1846. Maximum Element After Decreasing and Rearranging
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1846
---

[LeetCode problem 1846](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/)

```python
class Solution:
    def maximumElementAfterDecrementingAndRearranging(self, arr: List[int]) -> int:
        arr.sort()
        arr[0] = 1
        for i in range(1, len(arr)):
            d = max(0, arr[i] - arr[i - 1] - 1)
            arr[i] -= d
        return max(arr)

```
