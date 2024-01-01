---
title: 2403. Minimum Time to Kill All Monsters
seoTitle: LeetCode 2403. Minimum Time to Kill All Monsters | Python solution and explanation
description: 2403. Minimum Time to Kill All Monsters
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2403
---

[LeetCode problem 2403](https://leetcode.com/problems/minimum-time-to-kill-all-monsters/)

```python
class Solution:
    def minimumTime(self, power: List[int]) -> int:
        n = len(power)
        dp = [inf] * (1 << n)
        dp[0] = 0
        for mask in range(1, 1 << n):
            cnt = mask.bit_count()
            for i, v in enumerate(power):
                if (mask >> i) & 1:
                    dp[mask] = min(dp[mask], dp[mask ^ (1 << i)] + (v + cnt - 1) // cnt)
        return dp[-1]

```
