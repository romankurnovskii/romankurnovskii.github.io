---
title: 1436. Destination City
seoTitle: LeetCode 1436. Destination City | Python solution and explanation
description: 1436. Destination City
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1436
---

[LeetCode problem 1436](https://leetcode.com/problems/destination-city/)

```python
class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        s = {a for a, _ in paths}
        return next(b for _, b in paths if b not in s)

```
