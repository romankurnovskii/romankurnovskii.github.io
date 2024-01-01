---
title: 2884. Modify Columns
seoTitle: LeetCode 2884. Modify Columns | Python solution and explanation
description: Modify Columns
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2884
---

[LeetCode problem 2884](https://leetcode.com/problems/modify-columns/)

```python
import pandas as pd


def modifySalaryColumn(employees: pd.DataFrame) -> pd.DataFrame:
    employees['salary'] *= 2
    return employees

```
