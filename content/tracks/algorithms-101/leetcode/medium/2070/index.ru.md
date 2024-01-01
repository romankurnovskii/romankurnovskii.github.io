---
title: 2070. Most Beautiful Item for Each Query
seoTitle: LeetCode 2070. Most Beautiful Item for Each Query | Python solution and explanation
description: 2070. Most Beautiful Item for Each Query
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2070
---

[LeetCode problem 2070](https://leetcode.com/problems/most-beautiful-item-for-each-query/)

```python
class Solution:
    def maximumBeauty(self, items: List[List[int]], queries: List[int]) -> List[int]:
        items.sort()
        prices = [p for p, _ in items]
        mx = [items[0][1]]
        for _, b in items[1:]:
            mx.append(max(mx[-1], b))
        res = [0] * len(queries)
        for i, q in enumerate(queries):
            j = bisect_right(prices, q)
            if j:
                res[i] = mx[j - 1]
        return res

```
