---
title: 1862. Sum of Floored Pairs
seoTitle: LeetCode 1862. Sum of Floored Pairs | Python solution and explanation
description: 1862. Sum of Floored Pairs
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1862
---

[LeetCode problem 1862](https://leetcode.com/problems/sum-of-floored-pairs/)

```python
class Solution:
    def sumOfFlooredPairs(self, nums: List[int]) -> int:
        mod = 10**9 + 7
        cnt = Counter(nums)
        mx = max(nums)
        s = [0] * (mx + 1)
        for i in range(1, mx + 1):
            s[i] = s[i - 1] + cnt[i]
        res = 0
        for y in range(1, mx + 1):
            if cnt[y]:
                d = 1
                while d * y <= mx:
                    res += cnt[y] * d * (s[min(mx, d * y + y - 1)] - s[d * y - 1])
                    res %= mod
                    d += 1
        return res

```
