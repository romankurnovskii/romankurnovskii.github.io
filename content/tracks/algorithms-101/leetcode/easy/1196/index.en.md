---
title: 1196. How Many Apples Can You Put into the Basket
seoTitle: LeetCode 1196. How Many Apples Can You Put into the Basket | Python solution and explanation
description: 1196. How Many Apples Can You Put into the Basket
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1196
---

[LeetCode problem 1196](https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/)

```python
class Solution:
    def maxNumberOfApples(self, weight: List[int]) -> int:
        weight.sort()
        s = 0
        for i, x in enumerate(weight):
            s += x
            if s > 5000:
                return i
        return len(weight)

```
