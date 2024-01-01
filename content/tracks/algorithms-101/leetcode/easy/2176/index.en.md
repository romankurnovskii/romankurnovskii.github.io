---
title: 2176. Count Equal and Divisible Pairs in an Array
seoTitle: LeetCode 2176. Count Equal and Divisible Pairs in an Array | Python solution and explanation
description: 2176. Count Equal and Divisible Pairs in an Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2176
---

[LeetCode problem 2176](https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/)

```python
class Solution:
    def countPairs(self, nums: List[int], k: int) -> int:
        n = len(nums)
        return sum(
            nums[i] == nums[j] and (i * j) % k == 0
            for i in range(n)
            for j in range(i + 1, n)
        )

```
