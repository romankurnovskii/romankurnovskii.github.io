---
title: 2341. Maximum Number of Pairs in Array
seoTitle: LeetCode 2341. Maximum Number of Pairs in Array | Python solution and explanation
description: 2341. Maximum Number of Pairs in Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2341
---

[LeetCode problem 2341](https://leetcode.com/problems/maximum-number-of-pairs-in-array/)

```python
class Solution:
    def numberOfPairs(self, nums: List[int]) -> List[int]:
        cnt = Counter(nums)
        s = sum(v // 2 for v in cnt.values())
        return [s, len(nums) - s * 2]

```
