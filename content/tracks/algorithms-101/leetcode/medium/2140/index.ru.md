---
title: 2140. Solving Questions With Brainpower
seoTitle: LeetCode 2140. Solving Questions With Brainpower | Python solution and explanation
description: 2140. Solving Questions With Brainpower
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2140
---

[LeetCode problem 2140](https://leetcode.com/problems/solving-questions-with-brainpower/)

```python
class Solution:
    def mostPoints(self, questions: List[List[int]]) -> int:
        n = len(questions)
        f = [0] * (n + 1)
        for i in range(n - 1, -1, -1):
            p, b = questions[i]
            j = i + b + 1
            f[i] = max(f[i + 1], p + (0 if j > n else f[j]))
        return f[0]

```
