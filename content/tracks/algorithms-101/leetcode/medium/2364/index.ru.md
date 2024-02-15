---
title: 2364. Count Number of Bad Pairs
seoTitle: LeetCode 2364. Count Number of Bad Pairs | Python solution and explanation
description: 2364. Count Number of Bad Pairs
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2364
---

[LeetCode problem 2364](https://leetcode.com/problems/count-number-of-bad-pairs/)

```python
class Solution:
    def countBadPairs(self, nums: List[int]) -> int:
        cnt = Counter()
        res = 0
        for i, x in enumerate(nums):
            res += i - cnt[i - x]
            cnt[i - x] += 1
        return res

```
