---
title: 2887. Fill Missing Data
seoTitle: LeetCode 2887. Fill Missing Data | Python solution and explanation
description: Fill Missing Data
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2887
---

[LeetCode problem 2887](https://leetcode.com/problems/fill-missing-data/)

```python
import pandas as pd


def fillMissingValues(products: pd.DataFrame) -> pd.DataFrame:
    products['quantity'] = products['quantity'].fillna(0)
    return products

```
