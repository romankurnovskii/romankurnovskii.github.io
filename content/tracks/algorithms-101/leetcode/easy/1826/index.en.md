---
title: 1826. Faulty Sensor
seoTitle: LeetCode 1826. Faulty Sensor | Python solution and explanation
description: 1826. Faulty Sensor
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1826
---

[LeetCode problem 1826](https://leetcode.com/problems/faulty-sensor/)

```python
class Solution:
    def badSensor(self, sensor1: List[int], sensor2: List[int]) -> int:
        i, n = 0, len(sensor1)
        while i < n - 1:
            if sensor1[i] != sensor2[i]:
                break
            i += 1
        while i < n - 1:
            if sensor1[i + 1] != sensor2[i]:
                return 1
            if sensor1[i] != sensor2[i + 1]:
                return 2
            i += 1
        return -1

```
