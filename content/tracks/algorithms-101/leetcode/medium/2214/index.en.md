---
title: 2214. Minimum Health to Beat Game
seoTitle: LeetCode 2214. Minimum Health to Beat Game | Python solution and explanation
description: 2214. Minimum Health to Beat Game
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2214
---

[LeetCode problem 2214](https://leetcode.com/problems/minimum-health-to-beat-game/)

```python
class Solution:
    def minimumHealth(self, damage: List[int], armor: int) -> int:
        return sum(damage) - min(max(damage), armor) + 1

```
