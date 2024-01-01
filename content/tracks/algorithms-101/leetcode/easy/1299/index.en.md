---
title: 1299. Replace Elements with Greatest Element on Right Side
seoTitle: LeetCode 1299. Replace Elements with Greatest Element on Right Side | Python solution and explanation
description: 1299. Replace Elements with Greatest Element on Right Side
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1299
---

[LeetCode problem 1299](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/)

```python
class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        m = -1
        for i in range(len(arr) - 1, -1, -1):
            t = arr[i]
            arr[i] = m
            m = max(m, t)
        return arr

```
