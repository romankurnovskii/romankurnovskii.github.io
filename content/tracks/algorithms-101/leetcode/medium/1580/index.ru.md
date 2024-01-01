---
title: 1580. Put Boxes Into the Warehouse II
seoTitle: LeetCode 1580. Put Boxes Into the Warehouse II | Python solution and explanation
description: 1580. Put Boxes Into the Warehouse II
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1580
---

[LeetCode problem 1580](https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/)

```python
class Solution:
    def maxBoxesInWarehouse(self, boxes: List[int], warehouse: List[int]) -> int:
        n = len(warehouse)
        left = [0] * n
        right = [0] * n
        left[0] = right[-1] = inf
        for i in range(1, n):
            left[i] = min(left[i - 1], warehouse[i - 1])
        for i in range(n - 2, -1, -1):
            right[i] = min(right[i + 1], warehouse[i + 1])
        for i in range(n):
            warehouse[i] = min(warehouse[i], max(left[i], right[i]))
        boxes.sort()
        warehouse.sort()
        res = i = 0
        for x in boxes:
            while i < n and warehouse[i] < x:
                i += 1
            if i == n:
                break
            res, i = res + 1, i + 1
        return res

```
