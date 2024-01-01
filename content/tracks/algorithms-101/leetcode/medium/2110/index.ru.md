---
title: 2110. Number of Smooth Descent Periods of a Stock
seoTitle: LeetCode 2110. Number of Smooth Descent Periods of a Stock | Python solution and explanation
description: 2110. Number of Smooth Descent Periods of a Stock
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2110
---

[LeetCode problem 2110](https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/)

```python
class Solution:
    def getDescentPeriods(self, prices: List[int]) -> int:
        res = 0
        i, n = 0, len(prices)
        while i < n:
            j = i + 1
            while j < n and prices[j - 1] - prices[j] == 1:
                j += 1
            cnt = j - i
            res += (1 + cnt) * cnt // 2
            i = j
        return res

```
