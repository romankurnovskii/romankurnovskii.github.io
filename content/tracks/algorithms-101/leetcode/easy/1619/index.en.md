---
title: 1619. Mean of Array After Removing Some Elements
seoTitle: LeetCode 1619. Mean of Array After Removing Some Elements | Python solution and explanation
description: 1619. Mean of Array After Removing Some Elements
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1619
---

[LeetCode problem 1619](https://leetcode.com/problems/mean-of-array-after-removing-some-elements/)

```python
class Solution:
    def trimMean(self, arr: List[int]) -> float:
        n = len(arr)
        start, end = int(n * 0.05), int(n * 0.95)
        arr.sort()
        t = arr[start:end]
        return round(sum(t) / len(t), 5)

```
