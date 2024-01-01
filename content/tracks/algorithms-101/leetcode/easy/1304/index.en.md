---
title: 1304. Find N Unique Integers Sum up to Zero
seoTitle: LeetCode 1304. Find N Unique Integers Sum up to Zero | Python solution and explanation
description: 1304. Find N Unique Integers Sum up to Zero
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1304
---

[LeetCode problem 1304](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/)

```python
class Solution:
    def sumZero(self, n: int) -> List[int]:
        res = list(range(1, n))
        res.append(-sum(res))
        return res

```
