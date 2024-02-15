---
title: 2390. Removing Stars From a String
seoTitle: LeetCode 2390. Removing Stars From a String | Python solution and explanation
description: 2390. Removing Stars From a String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2390
---

[LeetCode problem 2390](https://leetcode.com/problems/removing-stars-from-a-string/)

```python
class Solution:
    def removeStars(self, s: str) -> str:
        res = []
        for c in s:
            if c == '*':
                res.pop()
            else:
                res.append(c)
        return ''.join(res)

```
