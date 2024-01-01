---
title: 1133. Largest Unique Number
seoTitle: LeetCode 1133. Largest Unique Number | Python solution and explanation
description: 1133. Largest Unique Number
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1133
---

[LeetCode problem 1133](https://leetcode.com/problems/largest-unique-number/)

```python
class Solution:
    def largestUniqueNumber(self, nums: List[int]) -> int:
        cnt = Counter(nums)
        return max((x for x, v in cnt.items() if v == 1), default=-1)

```
