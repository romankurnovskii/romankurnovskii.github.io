---
title: 2177. Find Three Consecutive Integers That Sum to a Given Number
seoTitle: LeetCode 2177. Find Three Consecutive Integers That Sum to a Given Number | Python solution and explanation
description: 2177. Find Three Consecutive Integers That Sum to a Given Number
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2177
---

[LeetCode problem 2177](https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/)

```python
class Solution:
    def sumOfThree(self, num: int) -> List[int]:
        x, mod = divmod(num, 3)
        return [] if mod else [x - 1, x, x + 1]

```
