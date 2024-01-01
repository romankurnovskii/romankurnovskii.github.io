---
title: 1103. Distribute Candies to People
seoTitle: LeetCode 1103. Distribute Candies to People | Python solution and explanation
description: 1103. Distribute Candies to People
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1103
---

[LeetCode problem 1103](https://leetcode.com/problems/distribute-candies-to-people/)

```python
class Solution:
    def distributeCandies(self, candies: int, num_people: int) -> List[int]:
        res = [0] * num_people
        i = 0
        while candies:
            res[i % num_people] += min(candies, i + 1)
            candies -= min(candies, i + 1)
            i += 1
        return res

```
