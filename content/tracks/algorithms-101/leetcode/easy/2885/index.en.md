---
title: 2885. Rename Columns
seoTitle: LeetCode 2885. Rename Columns | Python solution and explanation
description: Rename Columns
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2885
---

[LeetCode problem 2885](https://leetcode.com/problems/rename-columns/)

```python
import pandas as pd


def renameColumns(students: pd.DataFrame) -> pd.DataFrame:
    students.rename(
        columns={
            'id': 'student_id',
            'first': 'first_name',
            'last': 'last_name',
            'age': 'age_in_years',
        },
        inplace=True,
    )
    return students

```
