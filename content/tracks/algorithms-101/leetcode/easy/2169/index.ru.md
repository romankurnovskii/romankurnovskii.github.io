---
title: 2169. Count Operations to Obtain Zero
seoTitle: LeetCode 2169. Count Operations to Obtain Zero | Python solution and explanation
description: 2169. Count Operations to Obtain Zero
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2169
---

[LeetCode problem 2169](https://leetcode.com/problems/count-operations-to-obtain-zero/)

```python
class Solution:
    def countOperations(self, num1: int, num2: int) -> int:
        res = 0
        while num1 and num2:
            if num1 >= num2:
                num1, num2 = num2, num1
            num2 -= num1
            res += 1
        return res

```
