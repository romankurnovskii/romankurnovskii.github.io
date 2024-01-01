---
title: 1780. Check if Number is a Sum of Powers of Three
seoTitle: LeetCode 1780. Check if Number is a Sum of Powers of Three | Python solution and explanation
description: 1780. Check if Number is a Sum of Powers of Three
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1780
---

[LeetCode problem 1780](https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/)

```python
class Solution:
    def checkPowersOfThree(self, n: int) -> bool:
        while n:
            if n % 3 > 1:
                return False
            n //= 3
        return True

```
