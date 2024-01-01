---
title: 1712. Ways to Split Array Into Three Subarrays
seoTitle: LeetCode 1712. Ways to Split Array Into Three Subarrays | Python solution and explanation
description: 1712. Ways to Split Array Into Three Subarrays
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1712
---

[LeetCode problem 1712](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/)

```python
class Solution:
    def waysToSplit(self, nums: List[int]) -> int:
        mod = 10**9 + 7
        s = list(accumulate(nums))
        res, n = 0, len(nums)
        for i in range(n - 2):
            j = bisect_left(s, s[i] << 1, i + 1, n - 1)
            k = bisect_right(s, (s[-1] + s[i]) >> 1, j, n - 1)
            res += k - j
        return res % mod

```
