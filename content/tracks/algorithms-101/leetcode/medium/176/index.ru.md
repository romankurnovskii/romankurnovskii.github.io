---
title: 176. Second Highest Salary
seoTitle: LeetCode 176. Second Highest Salary | Python solution and explanation
description: 176. Second Highest Salary
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 176
---

[LeetCode problem 176](https://leetcode.com/problems/second-highest-salary/)

1. Drop any duplicate salary values to avoid counting duplicates as separate salary ranks
1. Sort the unique salaries in descending order and get the second highest salary
1. If the second highest salary doesn't exist (e.g., there are fewer than two unique salaries), return `None`
1. Create a DataFrame with the second highest salary

```python
import pandas as pd

def second_highest_salary(employee: pd.DataFrame) -> pd.DataFrame:
    unique_salaries = employee["salary"].drop_duplicates()

    second_highest = (
        unique_salaries.nlargest(2).iloc[-1] if len(unique_salaries) >= 2 else None
    )
    if second_highest is None:
        return pd.DataFrame({"SecondHighestSalary": [None]})

    result_df = pd.DataFrame({"SecondHighestSalary": [second_highest]})

    return result_df
```
