---
title: 2211. Count Collisions on a Road
seoTitle: LeetCode 2211. Count Collisions on a Road | Python solution and explanation
description: 2211. Count Collisions on a Road
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2211
---

[LeetCode problem 2211](https://leetcode.com/problems/count-collisions-on-a-road/)

```python
class Solution:
    def countCollisions(self, directions: str) -> int:
        d = directions.lstrip('L').rstrip('R')
        return len(d) - d.count('S')

```
