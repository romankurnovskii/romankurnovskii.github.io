---
title: 2274. Maximum Consecutive Floors Without Special Floors
seoTitle: LeetCode 2274. Maximum Consecutive Floors Without Special Floors | Python solution and explanation
description: 2274. Maximum Consecutive Floors Without Special Floors
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2274
---

[LeetCode problem 2274](https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/)

```python
class Solution:
    def maxConsecutive(self, bottom: int, top: int, special: List[int]) -> int:
        special.sort()
        res = max(special[0] - bottom, top - special[-1])
        for i in range(1, len(special)):
            res = max(res, special[i] - special[i - 1] - 1)
        return res

```
