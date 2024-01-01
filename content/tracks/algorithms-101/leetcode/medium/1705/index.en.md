---
title: 1705. Maximum Number of Eaten Apples
seoTitle: LeetCode 1705. Maximum Number of Eaten Apples | Python solution and explanation
description: 1705. Maximum Number of Eaten Apples
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1705
---

[LeetCode problem 1705](https://leetcode.com/problems/maximum-number-of-eaten-apples/)

```python
class Solution:
    def eatenApples(self, apples: List[int], days: List[int]) -> int:
        n = len(days)
        i = res = 0
        q = []
        while i < n or q:
            if i < n and apples[i]:
                heappush(q, (i + days[i] - 1, apples[i]))
            while q and q[0][0] < i:
                heappop(q)
            if q:
                t, v = heappop(q)
                v -= 1
                res += 1
                if v and t > i:
                    heappush(q, (t, v))
            i += 1
        return res

```
