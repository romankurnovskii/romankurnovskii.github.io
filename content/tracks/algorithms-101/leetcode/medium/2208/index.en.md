---
title: 2208. Minimum Operations to Halve Array Sum
seoTitle: LeetCode 2208. Minimum Operations to Halve Array Sum | Python solution and explanation
description: 2208. Minimum Operations to Halve Array Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2208
---

[LeetCode problem 2208](https://leetcode.com/problems/minimum-operations-to-halve-array-sum/)

```python
class Solution:
    def halveArray(self, nums: List[int]) -> int:
        s = sum(nums) / 2
        h = []
        for v in nums:
            heappush(h, -v)
        res = 0
        while s > 0:
            t = -heappop(h) / 2
            s -= t
            heappush(h, -t)
            res += 1
        return res

```
