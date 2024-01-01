---
title: 1868. Product of Two Run-Length Encoded Arrays
seoTitle: LeetCode 1868. Product of Two Run-Length Encoded Arrays | Python solution and explanation
description: 1868. Product of Two Run-Length Encoded Arrays
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1868
---

[LeetCode problem 1868](https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/)

```python
class Solution:
    def findRLEArray(
        self, encoded1: List[List[int]], encoded2: List[List[int]]
    ) -> List[List[int]]:
        res = []
        j = 0
        for vi, fi in encoded1:
            while fi:
                f = min(fi, encoded2[j][1])
                v = vi * encoded2[j][0]
                if res and res[-1][0] == v:
                    res[-1][1] += f
                else:
                    res.append([v, f])
                fi -= f
                encoded2[j][1] -= f
                if encoded2[j][1] == 0:
                    j += 1
        return res

```
