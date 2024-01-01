---
title: 970. Powerful Integers
seoTitle: LeetCode Powerful Integers | Python solution and explanation
description: Powerful Integers
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 970
---

[LeetCode problem 970](https://leetcode.com/problems/powerful-integers/)

```python
class Solution:
    def powerfulIntegers(self, x: int, y: int, bound: int) -> List[int]:
        res = set()
        a = 1
        while a <= bound:
            b = 1
            while a + b <= bound:
                res.add(a + b)
                b *= y
                if y == 1:
                    break
            if x == 1:
                break
            a *= x
        return list(res)

```
