---
title: 2883. Drop Missing Data
seoTitle: LeetCode 2883. Drop Missing Data | Python solution and explanation
description: Drop Missing Data
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2883
---

[LeetCode problem 2883](https://leetcode.com/problems/drop-missing-data/)

```python
import pandas as pd


def dropMissingData(students: pd.DataFrame) -> pd.DataFrame:
    return students[students['name'].notnull()]

```
