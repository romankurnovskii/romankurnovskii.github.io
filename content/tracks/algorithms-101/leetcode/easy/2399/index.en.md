---
title: 2399. Check Distances Between Same Letters
seoTitle: LeetCode 2399. Check Distances Between Same Letters | Python solution and explanation
description: 2399. Check Distances Between Same Letters
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2399
---

[LeetCode problem 2399](https://leetcode.com/problems/check-distances-between-same-letters/)

```python
class Solution:
    def checkDistances(self, s: str, distance: List[int]) -> bool:
        d = defaultdict(int)
        for i, c in enumerate(s, 1):
            if d[c] and i - d[c] - 1 != distance[ord(c) - ord('a')]:
                return False
            d[c] = i
        return True

```
