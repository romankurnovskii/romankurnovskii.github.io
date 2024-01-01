---
title: 1599. Maximum Profit of Operating a Centennial Wheel
seoTitle: LeetCode 1599. Maximum Profit of Operating a Centennial Wheel | Python solution and explanation
description: 1599. Maximum Profit of Operating a Centennial Wheel
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1599
---

[LeetCode problem 1599](https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/)

```python
class Solution:
    def minOperationsMaxProfit(
        self, customers: List[int], boardingCost: int, runningCost: int
    ) -> int:
        res = -1
        mx = t = 0
        wait = 0
        i = 0
        while wait or i < len(customers):
            wait += customers[i] if i < len(customers) else 0
            up = wait if wait < 4 else 4
            wait -= up
            t += up * boardingCost - runningCost
            i += 1
            if t > mx:
                mx = t
                res = i
        return res

```
