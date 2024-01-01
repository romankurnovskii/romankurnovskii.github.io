---
title: 2126. Destroying Asteroids
seoTitle: LeetCode 2126. Destroying Asteroids | Python solution and explanation
description: 2126. Destroying Asteroids
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2126
---

[LeetCode problem 2126](https://leetcode.com/problems/destroying-asteroids/)

```python
class Solution:
    def asteroidsDestroyed(self, mass: int, asteroids: List[int]) -> bool:
        asteroids.sort()
        for v in asteroids:
            if mass < v:
                return False
            mass += v
        return True

```
