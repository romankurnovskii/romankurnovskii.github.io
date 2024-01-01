---
title: 1561. Maximum Number of Coins You Can Get
seoTitle: LeetCode 1561. Maximum Number of Coins You Can Get | Python solution and explanation
description: 1561. Maximum Number of Coins You Can Get
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1561
---

[LeetCode problem 1561](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/)

```python
class Solution:
    def maxCoins(self, piles: List[int]) -> int:
        piles.sort()
        return sum(piles[-2 : len(piles) // 3 - 1 : -2])

```
