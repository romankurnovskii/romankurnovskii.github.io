---
title: 1711. Count Good Meals
seoTitle: LeetCode 1711. Count Good Meals | Python solution and explanation
description: 1711. Count Good Meals
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1711
---

[LeetCode problem 1711](https://leetcode.com/problems/count-good-meals/)

```python
class Solution:
    def countPairs(self, deliciousness: List[int]) -> int:
        mod = 10**9 + 7
        cnt = Counter(deliciousness)
        res = 0
        for i in range(22):
            s = 1 << i
            for a, m in cnt.items():
                if (b := s - a) in cnt:
                    res += m * (m - 1) if a == b else m * cnt[b]
        return (res >> 1) % mod

```
