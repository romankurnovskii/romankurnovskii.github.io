---
title: 2350. Shortest Impossible Sequence of Rolls
seoTitle: LeetCode 2350. Shortest Impossible Sequence of Rolls | Python solution and explanation
description: 2350. Shortest Impossible Sequence of Rolls
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2350
---

[LeetCode problem 2350](https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/)

```python
class Solution:
    def shortestSequence(self, rolls: List[int], k: int) -> int:
        res = 1
        s = set()
        for v in rolls:
            s.add(v)
            if len(s) == k:
                res += 1
                s.clear()
        return res

```
