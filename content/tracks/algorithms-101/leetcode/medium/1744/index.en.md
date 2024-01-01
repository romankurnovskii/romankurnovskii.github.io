---
title: 1744. Can You Eat Your Favorite Candy on Your Favorite Day
seoTitle: LeetCode 1744. Can You Eat Your Favorite Candy on Your Favorite Day | Python solution and explanation
description: 1744. Can You Eat Your Favorite Candy on Your Favorite Day
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1744
---

[LeetCode problem 1744](https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/)

```python
class Solution:
    def canEat(self, candiesCount: List[int], queries: List[List[int]]) -> List[bool]:
        s = list(accumulate(candiesCount, initial=0))
        res = []
        for t, day, mx in queries:
            least, most = day, (day + 1) * mx
            res.append(least < s[t + 1] and most > s[t])
        return res

```
