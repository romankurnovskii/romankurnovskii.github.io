---
title: 1560. Most Visited Sector in  a Circular Track
seoTitle: LeetCode 1560. Most Visited Sector in  a Circular Track | Python solution and explanation
description: 1560. Most Visited Sector in  a Circular Track
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1560
---

[LeetCode problem 1560](https://leetcode.com/problems/most-visited-sector-in-a-circular-track/)

```python
class Solution:
    def mostVisited(self, n: int, rounds: List[int]) -> List[int]:
        if rounds[0] <= rounds[-1]:
            return list(range(rounds[0], rounds[-1] + 1))
        return list(range(1, rounds[-1] + 1)) + list(range(rounds[0], n + 1))

```
