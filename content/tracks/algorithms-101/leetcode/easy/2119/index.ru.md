---
title: 2119. A Number After a Double Reversal
seoTitle: LeetCode 2119. A Number After a Double Reversal | Python solution and explanation
description: 2119. A Number After a Double Reversal
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2119
---

[LeetCode problem 2119](https://leetcode.com/problems/a-number-after-a-double-reversal/)

```python
class Solution:
    def isSameAfterReversals(self, num: int) -> bool:
        return num == 0 or num % 10 != 0

```
