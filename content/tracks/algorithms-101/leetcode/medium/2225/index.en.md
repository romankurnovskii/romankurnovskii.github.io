---
title: 2225. Find Players With Zero or One Losses
seoTitle: LeetCode 2225. Find Players With Zero or One Losses | Python solution and explanation
description: 2225. Find Players With Zero or One Losses
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2225
---

[LeetCode problem 2225](https://leetcode.com/problems/find-players-with-zero-or-one-losses/)

```python
class Solution:
    def findWinners(self, matches: List[List[int]]) -> List[List[int]]:
        cnt = Counter()
        for a, b in matches:
            if a not in cnt:
                cnt[a] = 0
            cnt[b] += 1
        res = [[], []]
        for u, v in cnt.items():
            if v < 2:
                res[v].append(u)
        res[0].sort()
        res[1].sort()
        return res

```
