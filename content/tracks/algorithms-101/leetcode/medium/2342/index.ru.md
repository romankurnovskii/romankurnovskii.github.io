---
title: 2342. Max Sum of a Pair With Equal Sum of Digits
seoTitle: LeetCode 2342. Max Sum of a Pair With Equal Sum of Digits | Python solution and explanation
description: 2342. Max Sum of a Pair With Equal Sum of Digits
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2342
---

[LeetCode problem 2342](https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/)

```python
class Solution:
    def maximumSum(self, nums: List[int]) -> int:
        d = defaultdict(int)
        res = -1
        for v in nums:
            x, y = 0, v
            while y:
                x += y % 10
                y //= 10
            if x in d:
                res = max(res, d[x] + v)
            d[x] = max(d[x], v)
        return res

```
