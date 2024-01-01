---
title: 1894. Find the Student that Will Replace the Chalk
seoTitle: LeetCode 1894. Find the Student that Will Replace the Chalk | Python solution and explanation
description: 1894. Find the Student that Will Replace the Chalk
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1894
---

[LeetCode problem 1894](https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/)

```python
class Solution:
    def chalkReplacer(self, chalk: List[int], k: int) -> int:
        s = sum(chalk)
        k %= s
        for i, x in enumerate(chalk):
            if k < x:
                return i
            k -= x

```
