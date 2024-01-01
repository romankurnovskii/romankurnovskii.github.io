---
title: 1394. Find Lucky Integer in an Array
seoTitle: LeetCode 1394. Find Lucky Integer in an Array | Python solution and explanation
description: 1394. Find Lucky Integer in an Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1394
---

[LeetCode problem 1394](https://leetcode.com/problems/find-lucky-integer-in-an-array/)

```python
class Solution:
    def findLucky(self, arr: List[int]) -> int:
        cnt = Counter(arr)
        res = -1
        for x, v in cnt.items():
            if x == v and res < x:
                res = x
        return res

```
