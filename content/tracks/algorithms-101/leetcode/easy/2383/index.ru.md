---
title: 2383. Minimum Hours of Training to Win a Competition
seoTitle: LeetCode 2383. Minimum Hours of Training to Win a Competition | Python solution and explanation
description: 2383. Minimum Hours of Training to Win a Competition
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2383
---

[LeetCode problem 2383](https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/)

```python
class Solution:
    def minNumberOfHours(
        self,
        initialEnergy: int,
        initialExperience: int,
        energy: List[int],
        experience: List[int],
    ) -> int:
        res = max(0, sum(energy) - initialEnergy + 1)
        for x in experience:
            if initialExperience <= x:
                res += x - initialExperience + 1
                initialExperience = x + 1
            initialExperience += x
        return res

```