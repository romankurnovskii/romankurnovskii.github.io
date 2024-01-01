---
title: 1539. Kth Missing Positive Number
seoTitle: LeetCode 1539. Kth Missing Positive Number | Python solution and explanation
description: 1539. Kth Missing Positive Number
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1539
---

[LeetCode problem 1539](https://leetcode.com/problems/kth-missing-positive-number/)

```python
class Solution:
    def findKthPositive(self, arr: List[int], k: int) -> int:
        if arr[0] > k:
            return k
        left, right = 0, len(arr)
        while left < right:
            mid = (left + right) >> 1
            if arr[mid] - mid - 1 >= k:
                right = mid
            else:
                left = mid + 1
        return arr[left - 1] + k - (arr[left - 1] - (left - 1) - 1)

```
