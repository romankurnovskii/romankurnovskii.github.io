---
title: 1952. Three Divisors
seoTitle: LeetCode 1952. Three Divisors | Python solution and explanation
description: 1952. Three Divisors
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1952
---

[LeetCode problem 1952](https://leetcode.com/problems/three-divisors/)

```python
class Solution:
    def isThree(self, n: int) -> bool:
        cnt = 0
        i = 1
        while i <= n // i:
            if n % i == 0:
                cnt += 1 if i == n // i else 2
            i += 1
        return cnt == 3

```
