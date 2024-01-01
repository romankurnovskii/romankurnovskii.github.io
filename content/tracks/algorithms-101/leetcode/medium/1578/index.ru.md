---
title: 1578. Minimum Time to Make Rope Colorful
seoTitle: LeetCode 1578. Minimum Time to Make Rope Colorful | Python solution and explanation
description: 1578. Minimum Time to Make Rope Colorful
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1578
---

[LeetCode problem 1578](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/)

```python
class Solution:
    def minCost(self, colors: str, neededTime: List[int]) -> int:
        res = i = 0
        n = len(colors)
        while i < n:
            j = i
            s = mx = 0
            while j < n and colors[j] == colors[i]:
                s += neededTime[j]
                if mx < neededTime[j]:
                    mx = neededTime[j]
                j += 1
            if j - i > 1:
                res += s - mx
            i = j
        return res

```
