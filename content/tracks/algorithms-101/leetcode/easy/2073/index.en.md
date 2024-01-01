---
title: 2073. Time Needed to Buy Tickets
seoTitle: LeetCode 2073. Time Needed to Buy Tickets | Python solution and explanation
description: 2073. Time Needed to Buy Tickets
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2073
---

[LeetCode problem 2073](https://leetcode.com/problems/time-needed-to-buy-tickets/)

```python
class Solution:
    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
        res = 0
        for i, t in enumerate(tickets):
            if i <= k:
                res += min(tickets[k], t)
            else:
                res += min(tickets[k] - 1, t)
        return res

```
