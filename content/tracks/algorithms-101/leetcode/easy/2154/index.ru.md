---
title: 2154. Keep Multiplying Found Values by Two
seoTitle: LeetCode 2154. Keep Multiplying Found Values by Two | Python solution and explanation
description: 2154. Keep Multiplying Found Values by Two
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2154
---

[LeetCode problem 2154](https://leetcode.com/problems/keep-multiplying-found-values-by-two/)

```python
class Solution:
    def findFinalValue(self, nums: List[int], original: int) -> int:
        s = set(nums)
        while original in s:
            original <<= 1
        return original

```
