---
title: 2160. Minimum Sum of Four Digit Number After Splitting Digits
seoTitle: LeetCode 2160. Minimum Sum of Four Digit Number After Splitting Digits | Python solution and explanation
description: 2160. Minimum Sum of Four Digit Number After Splitting Digits
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2160
---

[LeetCode problem 2160](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/)

```python
class Solution:
    def minimumSum(self, num: int) -> int:
        nums = []
        while num:
            nums.append(num % 10)
            num //= 10
        nums.sort()
        return 10 * (nums[0] + nums[1]) + nums[2] + nums[3]

```
