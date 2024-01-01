---
title: Select Data
seoTitle: LeetCode Select Data | Python solution and explanation
description: Select Data
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2880
---

[LeetCode problem 2880](https://leetcode.com/problems/select-data/)

```python
import pandas as pd


def selectData(students: pd.DataFrame) -> pd.DataFrame:
    return students[students['student_id'] == 101][['name', 'age']]

```
