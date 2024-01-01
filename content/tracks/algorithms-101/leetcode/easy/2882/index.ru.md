---
title: 2882. Drop Duplicate Rows
seoTitle: LeetCode 2882. Drop Duplicate Rows | Python solution and explanation
description: Drop Duplicate Rows
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2882
---

[LeetCode problem 2882](https://leetcode.com/problems/drop-duplicate-rows/)

```python
import pandas as pd


def dropDuplicateEmails(customers: pd.DataFrame) -> pd.DataFrame:
    return customers.drop_duplicates(subset=['email'])

```
