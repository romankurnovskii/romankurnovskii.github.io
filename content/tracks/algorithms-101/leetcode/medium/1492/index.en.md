---
title: 1492. The kth Factor of n
seoTitle: LeetCode 1492. The kth Factor of n | Python solution and explanation
description: 1492. The kth Factor of n
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1492
---

[LeetCode problem 1492](https://leetcode.com/problems/the-kth-factor-of-n/)

```python
class Solution:
    def kthFactor(self, n: int, k: int) -> int:
        i = 1
        while i * i < n:
            if n % i == 0:
                k -= 1
                if k == 0:
                    return i
            i += 1
        if i * i != n:
            i -= 1
        while i:
            if (n % (n // i)) == 0:
                k -= 1
                if k == 0:
                    return n // i
            i -= 1
        return -1

```
