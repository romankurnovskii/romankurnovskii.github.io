---
title: 2100. Find Good Days to Rob the Bank
seoTitle: LeetCode 2100. Find Good Days to Rob the Bank | Python solution and explanation
description: 2100. Find Good Days to Rob the Bank
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2100
---

[LeetCode problem 2100](https://leetcode.com/problems/find-good-days-to-rob-the-bank/)

```python
class Solution:
    def goodDaysToRobBank(self, security: List[int], time: int) -> List[int]:
        n = len(security)
        if n <= time * 2:
            return []
        left, right = [0] * n, [0] * n
        for i in range(1, n):
            if security[i] <= security[i - 1]:
                left[i] = left[i - 1] + 1
        for i in range(n - 2, -1, -1):
            if security[i] <= security[i + 1]:
                right[i] = right[i + 1] + 1
        return [i for i in range(n) if time <= min(left[i], right[i])]

```
