---
title: 2404. Most Frequent Even Element
seoTitle: LeetCode 2404. Most Frequent Even Element | Python solution and explanation
description: 2404. Most Frequent Even Element
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2404
---

[LeetCode problem 2404](https://leetcode.com/problems/most-frequent-even-element/)

```python
class Solution:
    def mostFrequentEven(self, nums: List[int]) -> int:
        cnt = Counter(x for x in nums if x % 2 == 0)
        res, mx = -1, 0
        for x, v in cnt.items():
            if v > mx or (v == mx and res > x):
                res, mx = x, v
        return res

```