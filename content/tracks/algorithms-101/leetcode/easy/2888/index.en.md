---
title:  2888. Reshape Data Concatenate
seoTitle: LeetCode 2888. Reshape Data Concatenate | Python solution and explanation
description: LeetCode 2888. Data Concatenate
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2888
---

[LeetCode problem 2888](https://leetcode.com/problems/reshape-data-concatenate/)

```python
import pandas as pd


def concatenateTables(df1: pd.DataFrame, df2: pd.DataFrame) -> pd.DataFrame:
    return pd.concat([df1, df2], ignore_index=True)

```
