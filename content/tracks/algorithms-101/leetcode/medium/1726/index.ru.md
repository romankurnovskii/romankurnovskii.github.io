---
title: 1726. Tuple with Same Product
seoTitle: LeetCode 1726. Tuple with Same Product | Python solution and explanation
description: 1726. Tuple with Same Product
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1726
---

[LeetCode problem 1726](https://leetcode.com/problems/tuple-with-same-product/)

```python
class Solution:
    def tupleSameProduct(self, nums: List[int]) -> int:
        cnt = defaultdict(int)
        for i in range(1, len(nums)):
            for j in range(i):
                x = nums[i] * nums[j]
                cnt[x] += 1
        return sum(v * (v - 1) // 2 for v in cnt.values()) << 3

```
