---
title: 1944. Number of Visible People in a Queue
seoTitle: LeetCode 1944. Number of Visible People in a Queue | Python solution and explanation
description: 1944. Number of Visible People in a Queue
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1944
---

[LeetCode problem 1944](https://leetcode.com/problems/number-of-visible-people-in-a-queue/)

```python
class Solution:
    def canSeePersonsCount(self, heights: List[int]) -> List[int]:
        n = len(heights)
        res = [0] * n
        stk = []
        for i in range(n - 1, -1, -1):
            while stk and stk[-1] < heights[i]:
                res[i] += 1
                stk.pop()
            if stk:
                res[i] += 1
            stk.append(heights[i])
        return res

```
