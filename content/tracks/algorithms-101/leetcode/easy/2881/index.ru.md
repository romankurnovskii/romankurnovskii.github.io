---
title: Create a New Column
seoTitle: LeetCode Create a New Column | Python solution and explanation
description: Create a New Column
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2881
---

[LeetCode problem 2881](https://leetcode.com/problems/create-a-new-column/)

```python
import pandas as pd


def createBonusColumn(employees: pd.DataFrame) -> pd.DataFrame:
    employees['bonus'] = employees['salary'] * 2
    return employees

```
