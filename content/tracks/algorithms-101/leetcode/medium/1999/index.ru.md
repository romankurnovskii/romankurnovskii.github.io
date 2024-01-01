---
title: 1999. Smallest Greater Multiple Made of Two Digits
seoTitle: LeetCode 1999. Smallest Greater Multiple Made of Two Digits | Python solution and explanation
description: 1999. Smallest Greater Multiple Made of Two Digits
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1999
---

[LeetCode problem 1999](https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/)

```python
class Solution:
    def findInteger(self, k: int, digit1: int, digit2: int) -> int:
        if digit1 == 0 and digit2 == 0:
            return -1
        if digit1 > digit2:
            return self.findInteger(k, digit2, digit1)
        q = deque([0])
        while 1:
            x = q.popleft()
            if x > 2**31 - 1:
                return -1
            if x > k and x % k == 0:
                return x
            q.append(x * 10 + digit1)
            if digit1 != digit2:
                q.append(x * 10 + digit2)

```
