---
title: 1748. Sum of Unique Elements
seoTitle: LeetCode 1748. Sum of Unique Elements | Python solution and explanation
description: 1748. Sum of Unique Elements
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1748
---

[LeetCode problem 1748](https://leetcode.com/problems/sum-of-unique-elements/)

```python
class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        cnt = Counter(nums)
        return sum(x for x, v in cnt.items() if v == 1)

```
