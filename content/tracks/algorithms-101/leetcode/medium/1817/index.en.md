---
title: 1817. Finding the Users Active Minutes
seoTitle: LeetCode 1817. Finding the Users Active Minutes | Python solution and explanation
description: 1817. Finding the Users Active Minutes
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1817
---

[LeetCode problem 1817](https://leetcode.com/problems/finding-the-users-active-minutes/)

```python
class Solution:
    def findingUsersActiveMinutes(self, logs: List[List[int]], k: int) -> List[int]:
        d = defaultdict(set)
        for i, t in logs:
            d[i].add(t)
        res = [0] * k
        for ts in d.values():
            res[len(ts) - 1] += 1
        return res

```
