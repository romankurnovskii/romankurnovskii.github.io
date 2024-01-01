---
title: 1891. Cutting Ribbons
seoTitle: LeetCode 1891. Cutting Ribbons | Python solution and explanation
description: 1891. Cutting Ribbons
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1891
---

[LeetCode problem 1891](https://leetcode.com/problems/cutting-ribbons/)

```python
class Solution:
    def maxLength(self, ribbons: List[int], k: int) -> int:
        left, right = 0, max(ribbons)
        while left < right:
            mid = (left + right + 1) >> 1
            cnt = sum(x // mid for x in ribbons)
            if cnt >= k:
                left = mid
            else:
                right = mid - 1
        return left

```
