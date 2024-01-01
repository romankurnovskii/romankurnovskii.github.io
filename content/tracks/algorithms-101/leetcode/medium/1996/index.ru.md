---
title: 1996. The Number of Weak Characters in the Game
seoTitle: LeetCode 1996. The Number of Weak Characters in the Game | Python solution and explanation
description: 1996. The Number of Weak Characters in the Game
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1996
---

[LeetCode problem 1996](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/)

```python
class Solution:
    def numberOfWeakCharacters(self, properties: List[List[int]]) -> int:
        properties.sort(key=lambda x: (-x[0], x[1]))
        res = mx = 0
        for _, x in properties:
            res += x < mx
            mx = max(mx, x)
        return res

```
