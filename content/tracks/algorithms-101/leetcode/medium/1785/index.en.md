---
title: 1785. Minimum Elements to Add to Form a Given Sum
seoTitle: LeetCode 1785. Minimum Elements to Add to Form a Given Sum | Python solution and explanation
description: 1785. Minimum Elements to Add to Form a Given Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1785
---

[LeetCode problem 1785](https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/)

```python
class Solution:
    def minElements(self, nums: List[int], limit: int, goal: int) -> int:
        d = abs(sum(nums) - goal)
        return (d + limit - 1) // limit

```
