---
title: Method Chaining
seoTitle: LeetCode Method Chaining | Python solution and explanation
description: Method Chaining
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2891
---

[LeetCode problem 2891](https://leetcode.com/problems/method-chaining/)

```python
import pandas as pd


def findHeavyAnimals(animals: pd.DataFrame) -> pd.DataFrame:
    return animals[animals['weight'] > 100].sort_values('weight', ascending=False)[
        ['name']
    ]

```
