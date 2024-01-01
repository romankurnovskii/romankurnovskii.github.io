---
title: 1590. Make Sum Divisible by P
seoTitle: LeetCode 1590. Make Sum Divisible by P | Python solution and explanation
description: 1590. Make Sum Divisible by P
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1590
---

[LeetCode problem 1590](https://leetcode.com/problems/make-sum-divisible-by-p/)

```python
class Solution:
    def minSubarray(self, nums: List[int], p: int) -> int:
        k = sum(nums) % p
        if k == 0:
            return 0
        last = {0: -1}
        cur = 0
        res = len(nums)
        for i, x in enumerate(nums):
            cur = (cur + x) % p
            target = (cur - k + p) % p
            if target in last:
                res = min(res, i - last[target])
            last[cur] = i
        return -1 if res == len(nums) else res

```
