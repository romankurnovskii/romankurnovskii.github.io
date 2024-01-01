---
title: 1470. Shuffle the Array
seoTitle: LeetCode 1470. Shuffle the Array | Python solution and explanation
description: 1470. Shuffle the Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1470
---

[LeetCode problem 1470](https://leetcode.com/problems/shuffle-the-array/)

```python
class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        nums[::2], nums[1::2] = nums[:n], nums[n:]
        return nums

```
