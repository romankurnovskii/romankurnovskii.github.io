---
title: 2410. Maximum Matching of Players With Trainers
seoTitle: LeetCode 2410. Maximum Matching of Players With Trainers | Python solution and explanation
description: 2410. Maximum Matching of Players With Trainers
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2410
---

[LeetCode problem 2410](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/)

```python
class Solution:
    def matchPlayersAndTrainers(self, players: List[int], trainers: List[int]) -> int:
        players.sort()
        trainers.sort()
        res = j = 0
        for p in players:
            while j < len(trainers) and trainers[j] < p:
                j += 1
            if j < len(trainers):
                res += 1
                j += 1
        return res

```
