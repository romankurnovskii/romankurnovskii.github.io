---
title: 2057. Smallest Index With Equal Value
seoTitle: LeetCode 2057. Smallest Index With Equal Value | Python solution and explanation
description: 2057. Smallest Index With Equal Value
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2057
---

[LeetCode problem 2057](https://leetcode.com/problems/smallest-index-with-equal-value/)

```python
class Solution:
    def smallestEqual(self, nums: List[int]) -> int:
        for i, v in enumerate(nums):
            if i % 10 == v:
                return i
        return -1

```
