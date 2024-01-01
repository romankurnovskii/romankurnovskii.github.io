---
title: 1814. Count Nice Pairs in an Array
seoTitle: LeetCode 1814. Count Nice Pairs in an Array | Python solution and explanation
description: 1814. Count Nice Pairs in an Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1814
---

[LeetCode problem 1814](https://leetcode.com/problems/count-nice-pairs-in-an-array/)

```python
class Solution:
    def countNicePairs(self, nums: List[int]) -> int:
        def rev(x):
            y = 0
            while x:
                y = y * 10 + x % 10
                x //= 10
            return y

        res = 0
        mod = 10**9 + 7
        cnt = Counter()
        for x in nums:
            y = x - rev(x)
            res += cnt[y]
            cnt[y] += 1
        return res % mod

```
