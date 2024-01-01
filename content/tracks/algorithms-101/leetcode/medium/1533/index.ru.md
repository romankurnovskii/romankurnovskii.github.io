---
title: 1533. Find the Index of the Large Integer
seoTitle: LeetCode 1533. Find the Index of the Large Integer | Python solution and explanation
description: 1533. Find the Index of the Large Integer
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1533
---

[LeetCode problem 1533](https://leetcode.com/problems/find-the-index-of-the-large-integer/)

```python
# """
# This is ArrayReader's API interface.
# You should not implement it, or speculate about its implementation
# """
# class ArrayReader(object):
#   # Compares the sum of arr[l..r] with the sum of arr[x..y]
#   # return 1 if sum(arr[l..r]) > sum(arr[x..y])
#   # return 0 if sum(arr[l..r]) == sum(arr[x..y])
#   # return -1 if sum(arr[l..r]) < sum(arr[x..y])
#    def compareSub(self, l: int, r: int, x: int, y: int) -> int:
#
#   # Returns the length of the array
#    def length(self) -> int:
#


class Solution:
    def getIndex(self, reader: 'ArrayReader') -> int:
        left, right = 0, reader.length() - 1
        while left < right:
            t1, t2, t3 = (
                left,
                left + (right - left) // 3,
                left + ((right - left) // 3) * 2 + 1,
            )
            cmp = reader.compareSub(t1, t2, t2 + 1, t3)
            if cmp == 0:
                left = t3 + 1
            elif cmp == 1:
                right = t2
            else:
                left, right = t2 + 1, t3
        return left

```
