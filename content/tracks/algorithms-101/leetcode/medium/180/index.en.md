---
title: 180. Consecutive Numbers
seoTitle: LeetCode 180. Consecutive Numbers | Python solution and explanation
description: 180. Consecutive Numbers
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 180
---

[LeetCode problem 180](https://leetcode.com/problems/consecutive-numbers/)

```python
import pandas as pd


def consecutive_numbers(logs: pd.DataFrame) -> pd.DataFrame:
    all_the_same = lambda lst: lst.nunique() == 1
    logs["is_consecutive"] = (
        logs["num"].rolling(window=3, center=True, min_periods=3).apply(all_the_same)
    )
    return (
        logs.query("is_consecutive == 1.0")[["num"]]
        .drop_duplicates()
        .rename(columns={"num": "ConsecutiveNums"})
    )

```
