---
title: 2136. Earliest Possible Day of Full Bloom
seoTitle: LeetCode 2136. Earliest Possible Day of Full Bloom | Python solution and explanation
description: 2136. Earliest Possible Day of Full Bloom
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2136
---

[LeetCode problem 2136](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/)

```python
class Solution:
    def earliestFullBloom(self, plantTime: List[int], growTime: List[int]) -> int:
        res = t = 0
        for pt, gt in sorted(zip(plantTime, growTime), key=lambda x: -x[1]):
            t += pt
            res = max(res, t + gt)
        return res

```
