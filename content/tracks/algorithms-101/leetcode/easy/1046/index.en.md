---
title: 1046. Last Stone Weight
seoTitle: LeetCode 1046. Last Stone Weight | Python solution and explanation
description: 1046. Last Stone Weight
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1046
---

[LeetCode problem 1046](https://leetcode.com/problems/last-stone-weight/)

```python
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        h = [-x for x in stones]
        heapify(h)
        while len(h) > 1:
            y, x = -heappop(h), -heappop(h)
            if x != y:
                heappush(h, x - y)
        return 0 if not h else -h[0]

```
