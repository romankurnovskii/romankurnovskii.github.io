---
title: 2393. Count Strictly Increasing Subarrays
seoTitle: LeetCode 2393. Count Strictly Increasing Subarrays | Python solution and explanation
description: 2393. Count Strictly Increasing Subarrays
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2393
---

[LeetCode problem 2393](https://leetcode.com/problems/count-strictly-increasing-subarrays/)

```python
class Solution:
    def countSubarrays(self, nums: List[int]) -> int:
        res = pre = cnt = 0
        for x in nums:
            if pre < x:
                cnt += 1
            else:
                cnt = 1
            pre = x
            res += cnt
        return res

```
