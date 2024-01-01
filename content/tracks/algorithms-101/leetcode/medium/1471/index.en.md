---
title: 1471. The k Strongest Values in an Array
seoTitle: LeetCode 1471. The k Strongest Values in an Array | Python solution and explanation
description: 1471. The k Strongest Values in an Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1471
---

[LeetCode problem 1471](https://leetcode.com/problems/the-k-strongest-values-in-an-array/)

```python
class Solution:
    def getStrongest(self, arr: List[int], k: int) -> List[int]:
        arr.sort()
        m = arr[(len(arr) - 1) >> 1]
        arr.sort(key=lambda x: (-abs(x - m), -x))
        return arr[:k]

```
