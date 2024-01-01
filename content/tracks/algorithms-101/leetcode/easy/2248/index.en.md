---
title: 2248. Intersection of Multiple Arrays
seoTitle: LeetCode 2248. Intersection of Multiple Arrays | Python solution and explanation
description: 2248. Intersection of Multiple Arrays
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2248
---

[LeetCode problem 2248](https://leetcode.com/problems/intersection-of-multiple-arrays/)

```python
class Solution:
    def intersection(self, nums: List[List[int]]) -> List[int]:
        cnt = Counter()
        res = []
        for arr in nums:
            for x in arr:
                cnt[x] += 1
                if cnt[x] == len(nums):
                    res.append(x)
        res.sort()
        return res

```
