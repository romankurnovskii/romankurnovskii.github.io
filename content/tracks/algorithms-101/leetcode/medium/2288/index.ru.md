---
title: 2288. Apply Discount to Prices
seoTitle: LeetCode 2288. Apply Discount to Prices | Python solution and explanation
description: 2288. Apply Discount to Prices
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2288
---

[LeetCode problem 2288](https://leetcode.com/problems/apply-discount-to-prices/)

```python
class Solution:
    def discountPrices(self, sentence: str, discount: int) -> str:
        res = []
        for w in sentence.split():
            if w[0] == '$' and w[1:].isdigit():
                w = f'${int(w[1:]) * (1 - discount / 100):.2f}'
            res.append(w)
        return ' '.join(res)

```
