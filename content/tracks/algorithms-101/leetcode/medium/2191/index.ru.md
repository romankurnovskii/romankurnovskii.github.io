---
title: 2191. Sort the Jumbled Numbers
seoTitle: LeetCode 2191. Sort the Jumbled Numbers | Python solution and explanation
description: 2191. Sort the Jumbled Numbers
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2191
---

[LeetCode problem 2191](https://leetcode.com/problems/sort-the-jumbled-numbers/)

```python
class Solution:
    def sortJumbled(self, mapping: List[int], nums: List[int]) -> List[int]:
        arr = []
        for i, x in enumerate(nums):
            y = mapping[0] if x == 0 else 0
            k = 1
            while x:
                x, v = divmod(x, 10)
                y = mapping[v] * k + y
                k *= 10
            arr.append((y, i))
        arr.sort()
        return [nums[i] for _, i in arr]

```
