---
title: 2025. Maximum Number of Ways to Partition an Array
seoTitle: LeetCode 2025. Maximum Number of Ways to Partition an Array | Python solution and explanation
description: 2025. Maximum Number of Ways to Partition an Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2025
---

[LeetCode problem 2025](https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/)

```python
class Solution:
    def waysToPartition(self, nums: List[int], k: int) -> int:
        n = len(nums)
        s = [nums[0]] * n
        right = defaultdict(int)
        for i in range(1, n):
            s[i] = s[i - 1] + nums[i]
            right[s[i - 1]] += 1

        res = 0
        if s[-1] % 2 == 0:
            res = right[s[-1] // 2]

        left = defaultdict(int)
        for v, x in zip(s, nums):
            d = k - x
            if (s[-1] + d) % 2 == 0:
                t = left[(s[-1] + d) // 2] + right[(s[-1] - d) // 2]
                if res < t:
                    res = t
            left[v] += 1
            right[v] -= 1
        return res

```
