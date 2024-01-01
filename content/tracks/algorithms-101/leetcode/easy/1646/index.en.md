---
title: 1646. Get Maximum in Generated Array
seoTitle: LeetCode 1646. Get Maximum in Generated Array | Python solution and explanation
description: 1646. Get Maximum in Generated Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1646
---

[LeetCode problem 1646](https://leetcode.com/problems/get-maximum-in-generated-array/)

```python
class Solution:
    def getMaximumGenerated(self, n: int) -> int:
        if n < 2:
            return n
        nums = [0] * (n + 1)
        nums[1] = 1
        for i in range(2, n + 1):
            nums[i] = nums[i >> 1] if i % 2 == 0 else nums[i >> 1] + nums[(i >> 1) + 1]
        return max(nums)

```
