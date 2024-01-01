---
title: 2206. Divide Array Into Equal Pairs
seoTitle: LeetCode 2206. Divide Array Into Equal Pairs | Python solution and explanation
description: 2206. Divide Array Into Equal Pairs
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2206
---

[LeetCode problem 2206](https://leetcode.com/problems/divide-array-into-equal-pairs/)

```python
class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        cnt = Counter(nums)
        return all(v % 2 == 0 for v in cnt.values())

```
