---
title: 1989. Maximum Number of People That Can Be Caught in Tag
seoTitle: LeetCode 1989. Maximum Number of People That Can Be Caught in Tag | Python solution and explanation
description: 1989. Maximum Number of People That Can Be Caught in Tag
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1989
---

[LeetCode problem 1989](https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/)

```python
class Solution:
    def catchMaximumAmountofPeople(self, team: List[int], dist: int) -> int:
        res = j = 0
        n = len(team)
        for i, x in enumerate(team):
            if x:
                while j < n and (team[j] or i - j > dist):
                    j += 1
                if j < n and abs(i - j) <= dist:
                    res += 1
                    j += 1
        return res

```
