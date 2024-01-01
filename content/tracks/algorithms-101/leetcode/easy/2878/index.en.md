---
title: Get the Size of a DataFrame
seoTitle: LeetCode Get the Size of a DataFrame | Python solution and explanation
description: Get the Size of a DataFrame
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2878
---

[LeetCode problem 2878](https://leetcode.com/problems/get-the-size-of-a-dataframe/)

```python
import pandas as pd


def getDataframeSize(players: pd.DataFrame) -> List[int]:
    return list(players.shape)

```
