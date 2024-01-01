---
title: 1491. Average Salary Excluding the Minimum and Maximum Salary
seoTitle: LeetCode 1491. Average Salary Excluding the Minimum and Maximum Salary | Python solution and explanation
description: 1491. Average Salary Excluding the Minimum and Maximum Salary
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1491
---

[LeetCode problem 1491](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/)

```python
class Solution:
    def average(self, salary: List[int]) -> float:
        s = sum(salary) - min(salary) - max(salary)
        return s / (len(salary) - 2)

```
