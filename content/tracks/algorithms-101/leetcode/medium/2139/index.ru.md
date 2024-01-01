---
title: 2139. Minimum Moves to Reach Target Score
seoTitle: LeetCode 2139. Minimum Moves to Reach Target Score | Python solution and explanation
description: 2139. Minimum Moves to Reach Target Score
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2139
---

[LeetCode problem 2139](https://leetcode.com/problems/minimum-moves-to-reach-target-score/)

```python
class Solution:
    def minMoves(self, target: int, maxDoubles: int) -> int:
        res = 0
        while maxDoubles and target > 1:
            res += 1
            if target % 2 == 1:
                target -= 1
            else:
                maxDoubles -= 1
                target >>= 1
        res += target - 1
        return res

```
