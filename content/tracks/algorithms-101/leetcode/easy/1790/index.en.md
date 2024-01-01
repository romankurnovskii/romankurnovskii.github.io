---
title: 1790. Check if One String Swap Can Make Strings Equal
seoTitle: LeetCode 1790. Check if One String Swap Can Make Strings Equal | Python solution and explanation
description: 1790. Check if One String Swap Can Make Strings Equal
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1790
---

[LeetCode problem 1790](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/)

```python
class Solution:
    def areAlmostEqual(self, s1: str, s2: str) -> bool:
        cnt = 0
        c1 = c2 = None
        for a, b in zip(s1, s2):
            if a != b:
                cnt += 1
                if cnt > 2 or (cnt == 2 and (a != c2 or b != c1)):
                    return False
                c1, c2 = a, b
        return cnt != 1

```
