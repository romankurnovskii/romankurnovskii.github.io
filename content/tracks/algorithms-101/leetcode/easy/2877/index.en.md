---
title: Create a DataFrame from List
seoTitle: LeetCode Create a DataFrame from List | Python solution and explanation
description: Create a DataFrame from List
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2877
---

[LeetCode problem 2877](https://leetcode.com/problems/create-a-dataframe-from-list/)

```python
import pandas as pd


def createDataframe(student_data: List[List[int]]) -> pd.DataFrame:
    return pd.DataFrame(student_data, columns=['student_id', 'age'])

```
