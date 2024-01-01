---
title: 1945. Sum of Digits of String After Convert
seoTitle: LeetCode 1945. Sum of Digits of String After Convert | Python solution and explanation
description: 1945. Sum of Digits of String After Convert
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1945
---

[LeetCode problem 1945](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/)

```python
class Solution:
    def getLucky(self, s: str, k: int) -> int:
        s = ''.join(str(ord(c) - ord('a') + 1) for c in s)
        for _ in range(k):
            t = sum(int(c) for c in s)
            s = str(t)
        return int(s)

```
