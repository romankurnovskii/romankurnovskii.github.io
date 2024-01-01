---
title: 2348. Number of Zero-Filled Subarrays
seoTitle: LeetCode 2348. Number of Zero-Filled Subarrays | Python solution and explanation
description: 2348. Number of Zero-Filled Subarrays
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2348
---

[LeetCode problem 2348](https://leetcode.com/problems/number-of-zero-filled-subarrays/)

```python
class Solution:
    def zeroFilledSubarray(self, nums: List[int]) -> int:
        res = cnt = 0
        for v in nums:
            cnt = 0 if v else cnt + 1
            res += cnt
        return res

```
