---
title: 3079. Find the Sum of Encrypted Integers
seoTitle: 3079. Find the Sum of Encrypted Integers | Python solution and explanation
description: 3079. Find the Sum of Encrypted Integers
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-03-16
lastMod: 2024-03-16
featuredImage: https://picsum.photos/700/155?grayscale
weight: 3079
---

[LeetCode problem 3079](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/description/)

```python
class Solution:
    def sumOfEncryptedInt(self, nums: List[int]) -> int:
        s = 0
        for num in nums:
            str_num = str(num)
            max_digit = max(str_num)
            encrypted_num = int(max_digit * len(str_num))
            s += encrypted_num

        return s
```
