---
title: 1550. Three Consecutive Odds
seoTitle: LeetCode 1550. Three Consecutive Odds | Python solution and explanation
description: 1550. Three Consecutive Odds
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1550
---

[LeetCode problem 1550](https://leetcode.com/problems/three-consecutive-odds/)

```python
class Solution:
    def threeConsecutiveOdds(self, arr: List[int]) -> bool:
        for i in range(len(arr) - 2):
            if arr[i] % 2 + arr[i + 1] % 2 + arr[i + 2] % 2 == 3:
                return True
        return False

```
