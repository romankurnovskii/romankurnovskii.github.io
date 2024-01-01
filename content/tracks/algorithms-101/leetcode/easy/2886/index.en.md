---
title: Change Data Type
seoTitle: LeetCode Change Data Type | Python solution and explanation
description: Change Data Type
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2886
---

[LeetCode problem 2886](https://leetcode.com/problems/change-data-type/)

```python
import pandas as pd


def changeDatatype(students: pd.DataFrame) -> pd.DataFrame:
    students['grade'] = students['grade'].astype(int)
    return students

```
