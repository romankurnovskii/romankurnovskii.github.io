---
title: 2105. Watering Plants II
seoTitle: LeetCode 2105. Watering Plants II | Python solution and explanation
description: 2105. Watering Plants II
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2105
---

[LeetCode problem 2105](https://leetcode.com/problems/watering-plants-ii/)

```python
class Solution:
    def minimumRefill(self, plants: List[int], capacityA: int, capacityB: int) -> int:
        i, j = 0, len(plants) - 1
        res = 0
        a, b = capacityA, capacityB
        while i <= j:
            if i == j:
                if max(capacityA, capacityB) < plants[i]:
                    res += 1
                break
            if capacityA < plants[i]:
                capacityA = a - plants[i]
                res += 1
            else:
                capacityA -= plants[i]
            if capacityB < plants[j]:
                capacityB = b - plants[j]
                res += 1
            else:
                capacityB -= plants[j]
            i += 1
            j -= 1
        return res

```
