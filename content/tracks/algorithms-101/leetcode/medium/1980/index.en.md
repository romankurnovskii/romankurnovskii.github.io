---
title: 1980. Find Unique Binary String
seoTitle: LeetCode 1980. Find Unique Binary String | Python solution and explanation
description: 1980. Find Unique Binary String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1980
---

[LeetCode problem 1980](https://leetcode.com/problems/find-unique-binary-string/)

```python
class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        mask = 0
        for x in nums:
            mask |= 1 << x.count("1")
        n = len(nums)
        for i in range(n + 1):
            if mask >> i & 1 ^ 1:
                return "1" * i + "0" * (n - i)

```
