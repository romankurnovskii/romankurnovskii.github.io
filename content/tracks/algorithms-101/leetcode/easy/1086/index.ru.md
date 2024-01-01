---
title: 1086. High Five
seoTitle: LeetCode 1086. High Five | Python solution and explanation
description: 1086. High Five
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1086
---

[LeetCode problem 1086](https://leetcode.com/problems/high-five/)

```python
class Solution:
    def highFive(self, items: List[List[int]]) -> List[List[int]]:
        d = defaultdict(list)
        m = 0
        for i, x in items:
            d[i].append(x)
            m = max(m, i)
        res = []
        for i in range(1, m + 1):
            if xs := d[i]:
                avg = sum(nlargest(5, xs)) // 5
                res.append([i, avg])
        return res

```
