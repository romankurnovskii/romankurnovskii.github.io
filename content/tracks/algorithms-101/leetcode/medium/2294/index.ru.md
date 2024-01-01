---
title: 2294. Partition Array Such That Maximum Difference Is K
seoTitle: LeetCode 2294. Partition Array Such That Maximum Difference Is K | Python solution and explanation
description: 2294. Partition Array Such That Maximum Difference Is K
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2294
---

[LeetCode problem 2294](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/)

```python
class Solution:
    def partitionArray(self, nums: List[int], k: int) -> int:
        nums.sort()
        res, a = 1, nums[0]
        for b in nums:
            if b - a > k:
                a = b
                res += 1
        return res

```
