---
title: 1389. Create Target Array in the Given Order
seoTitle: LeetCode 1389. Create Target Array in the Given Order | Python solution and explanation
description: 1389. Create Target Array in the Given Order
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1389
---

[LeetCode problem 1389](https://leetcode.com/problems/create-target-array-in-the-given-order/)

```python
class Solution:
    def createTargetArray(self, nums: List[int], index: List[int]) -> List[int]:
        target = []
        for x, i in zip(nums, index):
            target.insert(i, x)
        return target

```
