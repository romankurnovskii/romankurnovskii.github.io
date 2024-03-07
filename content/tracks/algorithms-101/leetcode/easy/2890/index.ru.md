---
title: 2890. Reshape Data Melt
seoTitle: LeetCode 2890. Reshape Data Melt | Python solution and explanation
description: LeetCode 2890. Reshape Data Melt
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2890
---

[LeetCode problem 2890](https://leetcode.com/problems/reshape-data-melt/)

```python
import pandas as pd


def meltTable(report: pd.DataFrame) -> pd.DataFrame:
    return pd.melt(report, id_vars=['product'], var_name='quarter', value_name='sales')

```
