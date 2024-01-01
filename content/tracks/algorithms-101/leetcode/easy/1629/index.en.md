---
title: 1629. Slowest Key
seoTitle: LeetCode 1629. Slowest Key | Python solution and explanation
description: 1629. Slowest Key
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1629
---

[LeetCode problem 1629](https://leetcode.com/problems/slowest-key/)

```python
class Solution:
    def slowestKey(self, releaseTimes: List[int], keysPressed: str) -> str:
        res = keysPressed[0]
        mx = releaseTimes[0]
        for i in range(1, len(keysPressed)):
            d = releaseTimes[i] - releaseTimes[i - 1]
            if d > mx or (d == mx and ord(keysPressed[i]) > ord(res)):
                mx = d
                res = keysPressed[i]
        return res

```
