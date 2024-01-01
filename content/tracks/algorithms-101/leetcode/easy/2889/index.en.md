---
title: LeetCode 2889. Reshape Data Pivot
seoTitle: LeetCode 2889. Reshape Data Pivot | Python solution and explanation
description: LeetCode 2889. Reshape Data Pivot
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2889
---

[LeetCode problem 2889](https://leetcode.com/problems/reshape-data-pivot/)

```python
import pandas as pd

def pivotTable(weather: pd.DataFrame) -> pd.DataFrame:
    return weather.pivot(index='month', columns='city', values='temperature')
```
