---
title: 2879. Display the First Three Rows
seoTitle: LeetCode 2879. Display the First Three Rows | Python solution and explanation
description: Display the First Three Rows
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2879
---

[LeetCode problem 2879](https://leetcode.com/problems/display-the-first-three-rows/)

```python
import pandas as pd


def selectFirstRows(employees: pd.DataFrame) -> pd.DataFrame:
    return employees.head(3)

```
