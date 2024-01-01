---
title: 1331. Rank Transform of an Array
seoTitle: LeetCode 1331. Rank Transform of an Array | Python solution and explanation
description: 1331. Rank Transform of an Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1331
---

[LeetCode problem 1331](https://leetcode.com/problems/rank-transform-of-an-array/)

```python
class Solution:
    def arrayRankTransform(self, arr: List[int]) -> List[int]:
        t = sorted(set(arr))
        return [bisect_right(t, x) for x in arr]

```
