---
title: 1739. Building Boxes
seoTitle: LeetCode 1739. Building Boxes | Python solution and explanation
description: 1739. Building Boxes
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1739
---

[LeetCode problem 1739](https://leetcode.com/problems/building-boxes/)

```python
class Solution:
    def minimumBoxes(self, n: int) -> int:
        s, k = 0, 1
        while s + k * (k + 1) // 2 <= n:
            s += k * (k + 1) // 2
            k += 1
        k -= 1
        res = k * (k + 1) // 2
        k = 1
        while s < n:
            res += 1
            s += k
            k += 1
        return res

```
