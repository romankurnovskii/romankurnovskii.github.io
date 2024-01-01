---
title: 2357. Make Array Zero by Subtracting Equal Amounts
seoTitle: LeetCode 2357. Make Array Zero by Subtracting Equal Amounts | Python solution and explanation
description: 2357. Make Array Zero by Subtracting Equal Amounts
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2357
---

[LeetCode problem 2357](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/)

```python
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        return len({x for x in nums if x})

```
