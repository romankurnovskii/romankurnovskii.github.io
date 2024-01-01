---
title: 1342. Number of Steps to Reduce a Number to Zero
seoTitle: LeetCode 1342. Number of Steps to Reduce a Number to Zero | Python solution and explanation
description: 1342. Number of Steps to Reduce a Number to Zero
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1342
---

[LeetCode problem 1342](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/)

```python
class Solution:
    def numberOfSteps(self, num: int) -> int:
        if num == 0:
            return 0
        return 1 + (
            self.numberOfSteps(num // 2)
            if num % 2 == 0
            else self.numberOfSteps(num - 1)
        )

```
