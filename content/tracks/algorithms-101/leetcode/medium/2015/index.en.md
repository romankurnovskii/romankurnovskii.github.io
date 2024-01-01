---
title: 2015. Average Height of Buildings in Each Segment
seoTitle: LeetCode 2015. Average Height of Buildings in Each Segment | Python solution and explanation
description: 2015. Average Height of Buildings in Each Segment
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2015
---

[LeetCode problem 2015](https://leetcode.com/problems/average-height-of-buildings-in-each-segment/)

```python
class Solution:
    def averageHeightOfBuildings(self, buildings: List[List[int]]) -> List[List[int]]:
        height = defaultdict(int)
        cnt = defaultdict(int)
        for s, e, h in buildings:
            cnt[s] += 1
            cnt[e] -= 1
            height[s] += h
            height[e] -= h
        res = []
        i = h = n = 0
        for j in sorted(cnt.keys()):
            if n:
                t = [i, j, h // n]
                if res and res[-1][1] == i and res[-1][2] == t[-1]:
                    res[-1][1] = j
                else:
                    res.append(t)
            i = j
            h += height[j]
            n += cnt[j]
        return res

```
