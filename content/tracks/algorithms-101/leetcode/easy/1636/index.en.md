---
title: 1636. Sort Array by Increasing Frequency
seoTitle: LeetCode 1636. Sort Array by Increasing Frequency | Python solution and explanation
description: 1636. Sort Array by Increasing Frequency
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1636
---

[LeetCode problem 1636](https://leetcode.com/problems/sort-array-by-increasing-frequency/)

```python
class Solution:
    def frequencySort(self, nums: List[int]) -> List[int]:
        cnt = Counter(nums)
        return sorted(nums, key=lambda x: (cnt[x], -x))

```
