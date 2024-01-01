---
title: 1295. Find Numbers with Even Number of Digits
seoTitle: LeetCode 1295. Find Numbers with Even Number of Digits | Python solution and explanation
description: 1295. Find Numbers with Even Number of Digits
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1295
---

[LeetCode problem 1295](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)

```python
class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        return sum(len(str(v)) % 2 == 0 for v in nums)

```
