---
title: 2226. Maximum Candies Allocated to K Children
seoTitle: LeetCode 2226. Maximum Candies Allocated to K Children | Python solution and explanation
description: 2226. Maximum Candies Allocated to K Children
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2226
---

[LeetCode problem 2226](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/)

```python
class Solution:
    def maximumCandies(self, candies: List[int], k: int) -> int:
        left, right = 0, max(candies)
        while left < right:
            mid = (left + right + 1) >> 1
            cnt = sum(v // mid for v in candies)
            if cnt >= k:
                left = mid
            else:
                right = mid - 1
        return left

```
