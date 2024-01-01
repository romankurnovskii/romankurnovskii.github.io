---
title: 1446. Consecutive Characters
seoTitle: LeetCode 1446. Consecutive Characters | Python solution and explanation
description: 1446. Consecutive Characters
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1446
---

[LeetCode problem 1446](https://leetcode.com/problems/consecutive-characters/)

```python
class Solution:
    def maxPower(self, s: str) -> int:
        res = t = 1
        for a, b in pairwise(s):
            if a == b:
                t += 1
                res = max(res, t)
            else:
                t = 1
        return res

```
