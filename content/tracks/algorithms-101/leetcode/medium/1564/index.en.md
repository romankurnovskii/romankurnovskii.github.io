---
title: 1564. Put Boxes Into the Warehouse I
seoTitle: LeetCode 1564. Put Boxes Into the Warehouse I | Python solution and explanation
description: 1564. Put Boxes Into the Warehouse I
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1564
---

[LeetCode problem 1564](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/)

```python
class Solution:
    def maxBoxesInWarehouse(self, boxes: List[int], warehouse: List[int]) -> int:
        n = len(warehouse)
        left = [warehouse[0]] * n
        for i in range(1, n):
            left[i] = min(left[i - 1], warehouse[i])
        boxes.sort()
        i, j = 0, n - 1
        while i < len(boxes):
            while j >= 0 and left[j] < boxes[i]:
                j -= 1
            if j < 0:
                break
            i, j = i + 1, j - 1
        return i

```
