---
title: 1769. Minimum Number of Operations to Move All Balls to Each Box
seoTitle: LeetCode 1769. Minimum Number of Operations to Move All Balls to Each Box | Python solution and explanation
description: 1769. Minimum Number of Operations to Move All Balls to Each Box
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1769
---

[LeetCode problem 1769](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/)

```python
class Solution:
    def minOperations(self, boxes: str) -> List[int]:
        n = len(boxes)
        res = [0] * n
        cnt = 0
        for i in range(1, n):
            if boxes[i - 1] == '1':
                cnt += 1
            res[i] = res[i - 1] + cnt
        cnt = s = 0
        for i in range(n - 2, -1, -1):
            if boxes[i + 1] == '1':
                cnt += 1
            s += cnt
            res[i] += s
        return res

```
