---
title: 1694. Reformat Phone Number
seoTitle: LeetCode 1694. Reformat Phone Number | Python solution and explanation
description: 1694. Reformat Phone Number
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1694
---

[LeetCode problem 1694](https://leetcode.com/problems/reformat-phone-number/)

```python
class Solution:
    def reformatNumber(self, number: str) -> str:
        number = number.replace("-", "").replace(" ", "")
        n = len(number)
        res = [number[i * 3 : i * 3 + 3] for i in range(n // 3)]
        if n % 3 == 1:
            res[-1] = res[-1][:2]
            res.append(number[-2:])
        elif n % 3 == 2:
            res.append(number[-2:])
        return "-".join(res)

```
