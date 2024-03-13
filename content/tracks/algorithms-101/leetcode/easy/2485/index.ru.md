---
title: 2485. Find the Pivot Integer
seoTitle: LeetCode 2485. Find the Pivot Integer | Python solution and explanation
description: 2485. Find the Pivot Integer
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2485
---

[LeetCode problem 2485](https://leetcode.com/problems/find-the-pivot-integer)

```python
class Solution:
    def pivotInteger(self, n: int) -> int:
        if n <= 1:
            return n

        ar = [1] * n

        for i in range(1, n):
            ar[i] = ar[i - 1] + i + 1

        pivot = 1
        while pivot < n:
            left = ar[pivot]
            right = ar[n - 1] - ar[pivot - 1]
            if left == right:
                return pivot + 1
            pivot += 1

        return -1
```

```python
class Solution:
    def pivotInteger(self, n: int) -> int:
        y = n * (n + 1) // 2
        x = int(sqrt(y))
        return x if x * x == y else -1
```

```python
class Solution:
    def pivotInteger(self, n: int) -> int:
        for x in range(1, n + 1):
            if (1 + x) * x == (x + n) * (n - x + 1):
                return x
        return -1
```
