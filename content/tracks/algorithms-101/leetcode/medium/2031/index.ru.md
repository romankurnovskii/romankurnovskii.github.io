---
title: 2031. Count Subarrays With More Ones Than Zeros
seoTitle: LeetCode 2031. Count Subarrays With More Ones Than Zeros | Python solution and explanation
description: 2031. Count Subarrays With More Ones Than Zeros
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2031
---

[LeetCode problem 2031](https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/)

```python
from sortedcontainers import SortedList


class Solution:
    def subarraysWithMoreZerosThanOnes(self, nums: List[int]) -> int:
        sl = SortedList([0])
        mod = 10**9 + 7
        res = s = 0
        for x in nums:
            s += x or -1
            res += sl.bisect_left(s)
            res %= mod
            sl.add(s)
        return res

```
