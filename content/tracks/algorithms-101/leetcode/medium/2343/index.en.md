---
title: 2343. Query Kth Smallest Trimmed Number
seoTitle: LeetCode 2343. Query Kth Smallest Trimmed Number | Python solution and explanation
description: 2343. Query Kth Smallest Trimmed Number
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2343
---

[LeetCode problem 2343](https://leetcode.com/problems/query-kth-smallest-trimmed-number/)

```python
class Solution:
    def smallestTrimmedNumbers(
        self, nums: List[str], queries: List[List[int]]
    ) -> List[int]:
        res = []
        for k, trim in queries:
            t = sorted((v[-trim:], i) for i, v in enumerate(nums))
            res.append(t[k - 1][1])
        return res

```
