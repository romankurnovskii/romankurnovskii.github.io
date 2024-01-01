---
title: 2162. Minimum Cost to Set Cooking Time
seoTitle: LeetCode 2162. Minimum Cost to Set Cooking Time | Python solution and explanation
description: 2162. Minimum Cost to Set Cooking Time
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2162
---

[LeetCode problem 2162](https://leetcode.com/problems/minimum-cost-to-set-cooking-time/)

```python
class Solution:
    def minCostSetTime(
        self, startAt: int, moveCost: int, pushCost: int, targetSeconds: int
    ) -> int:
        def f(m, s):
            if not 0 <= m < 100 or not 0 <= s < 100:
                return inf
            arr = [m // 10, m % 10, s // 10, s % 10]
            i = 0
            while i < 4 and arr[i] == 0:
                i += 1
            t = 0
            prev = startAt
            for v in arr[i:]:
                if v != prev:
                    t += moveCost
                t += pushCost
                prev = v
            return t

        m, s = divmod(targetSeconds, 60)
        res = min(f(m, s), f(m - 1, s + 60))
        return res

```
