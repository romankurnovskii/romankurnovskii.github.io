---
title: 1642. Furthest Building You Can Reach
seoTitle: LeetCode 1642. Furthest Building You Can Reach | Python solution and explanation
description: 1642. Furthest Building You Can Reach
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1642
---

[LeetCode problem 1642](https://leetcode.com/problems/furthest-building-you-can-reach/)

```python
class Solution:
    def furthestBuilding(self, heights: List[int], bricks: int, ladders: int) -> int:
        h = []
        for i, a in enumerate(heights[:-1]):
            b = heights[i + 1]
            d = b - a
            if d > 0:
                heappush(h, d)
                if len(h) > ladders:
                    bricks -= heappop(h)
                    if bricks < 0:
                        return i
        return len(heights) - 1
```
