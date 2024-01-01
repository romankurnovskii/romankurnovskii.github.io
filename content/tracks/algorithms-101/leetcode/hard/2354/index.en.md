---
title: 2354. Number of Excellent Pairs
seoTitle: LeetCode 2354. Number of Excellent Pairs | Python solution and explanation
description: 2354. Number of Excellent Pairs
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2354
---

[LeetCode problem 2354](https://leetcode.com/problems/number-of-excellent-pairs/)

```python
class Solution:
    def countExcellentPairs(self, nums: List[int], k: int) -> int:
        s = set(nums)
        res = 0
        cnt = Counter()
        for v in s:
            cnt[v.bit_count()] += 1
        for v in s:
            t = v.bit_count()
            for i, x in cnt.items():
                if t + i >= k:
                    res += x
        return res

```
