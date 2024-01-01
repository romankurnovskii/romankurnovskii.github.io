---
title: 2233. Maximum Product After K Increments
seoTitle: LeetCode 2233. Maximum Product After K Increments | Python solution and explanation
description: 2233. Maximum Product After K Increments
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2233
---

[LeetCode problem 2233](https://leetcode.com/problems/maximum-product-after-k-increments/)

```python
class Solution:
    def maximumProduct(self, nums: List[int], k: int) -> int:
        heapify(nums)
        for _ in range(k):
            heappush(nums, heappop(nums) + 1)
        res = 1
        mod = 10**9 + 7
        for v in nums:
            res = (res * v) % mod
        return res

```
