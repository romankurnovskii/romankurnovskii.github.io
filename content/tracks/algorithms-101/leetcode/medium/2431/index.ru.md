---
title: 2431. Maximize Total Tastiness of Purchased Fruits
seoTitle: LeetCode 2431. Maximize Total Tastiness of Purchased Fruits | Python solution and explanation
description: 2431. Maximize Total Tastiness of Purchased Fruits
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2431
---

[LeetCode problem 2431](https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/)

```python
class Solution:
    def maxTastiness(
        self, price: List[int], tastiness: List[int], maxAmount: int, maxCoupons: int
    ) -> int:
        @cache
        def dfs(i, j, k):
            if i == len(price):
                return 0
            res = dfs(i + 1, j, k)
            if j >= price[i]:
                res = max(res, dfs(i + 1, j - price[i], k) + tastiness[i])
            if j >= price[i] // 2 and k:
                res = max(res, dfs(i + 1, j - price[i] // 2, k - 1) + tastiness[i])
            return res

        return dfs(0, maxAmount, maxCoupons)

```
