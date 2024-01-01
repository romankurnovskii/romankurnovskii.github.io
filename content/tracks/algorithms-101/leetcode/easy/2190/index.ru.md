---
title: 2190. Most Frequent Number Following Key In an Array
seoTitle: LeetCode 2190. Most Frequent Number Following Key In an Array | Python solution and explanation
description: 2190. Most Frequent Number Following Key In an Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2190
---

[LeetCode problem 2190](https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/)

```python
class Solution:
    def mostFrequent(self, nums: List[int], key: int) -> int:
        cnt = Counter()
        res = mx = 0
        for a, b in pairwise(nums):
            if a == key:
                cnt[b] += 1
                if mx < cnt[b]:
                    mx = cnt[b]
                    res = b
        return res

```
