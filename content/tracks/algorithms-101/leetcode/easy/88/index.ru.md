---
title: 88. Merge Sorted Array
description: LeetCode 88. Merge Sorted Array
toc: true
authors: [roman-kurnovskii]
tags: [Array, "Two Pointers", Sorting]
categories: [Algorithms, Easy]
date: 2022-10-30
lastMod: 2023-06-17
featuredImage: https://picsum.photos/700/241?grayscale
series: [LeetCode Top Interview Questions]
weight: 88
---

[LeetCode problem](https://leetcode.com/problems/merge-sorted-array/)

## First accepted

```python
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        i = len(nums1) - n
        for j in nums2:
            nums1[i] = j
            i += 1
        nums1.sort()
```
