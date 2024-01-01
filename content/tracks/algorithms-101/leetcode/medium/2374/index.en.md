---
title: 2374. Node With Highest Edge Score
seoTitle: LeetCode 2374. Node With Highest Edge Score | Python solution and explanation
description: 2374. Node With Highest Edge Score
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2374
---

[LeetCode problem 2374](https://leetcode.com/problems/node-with-highest-edge-score/)

```python
class Solution:
    def edgeScore(self, edges: List[int]) -> int:
        cnt = Counter()
        for i, v in enumerate(edges):
            cnt[v] += i
        res = 0
        for i in range(len(edges)):
            if cnt[res] < cnt[i]:
                res = i
        return res

```
