---
title: 177. Nth Highest Salary
seoTitle: LeetCode 177. Nth Highest Salary | Python solution and explanation
description: 177. Nth Highest Salary
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 177
---

[LeetCode problem 177](https://leetcode.com/problems/nth-highest-salary/)

```python
import pandas as pd

def nth_highest_salary(employee: pd.DataFrame, N: int) -> pd.DataFrame:
    unique_salaries = employee.salary.unique()
    if len(unique_salaries) < N:
        return pd.DataFrame([np.NaN], columns=[f"getNthHighestSalary({N})"])

    salary = sorted(unique_salaries, reverse=True)[N - 1]
    return pd.DataFrame([salary], columns=[f"getNthHighestSalary({N})"])
```
