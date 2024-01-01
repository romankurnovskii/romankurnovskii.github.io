---
title: 1757. Recyclable and Low Fat Products
seoTitle: LeetCode 1757. Recyclable and Low Fat Products | Python solution and explanation
description: 1757. Recyclable and Low Fat Products
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1757
---

[LeetCode problem 1757](https://leetcode.com/problems/recyclable-and-low-fat-products/)

```python
import pandas as pd


def find_products(products: pd.DataFrame) -> pd.DataFrame:
    rs = products[(products["low_fats"] == "Y") & (products["recyclable"] == "Y")]
    rs = rs[["product_id"]]
    return rs

```
