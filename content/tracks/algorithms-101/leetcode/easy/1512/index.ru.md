---
title: 1512. Number of Good Pairs
seoTitle: LeetCode 1512. Number of Good Pairs | Python solution and explanation
description: 1512. Number of Good Pairs
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1512
---

[LeetCode problem 1512](https://leetcode.com/problems/number-of-good-pairs/)

```python
class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        cnt = Counter(nums)
        return sum(v * (v - 1) for v in cnt.values()) >> 1

```
