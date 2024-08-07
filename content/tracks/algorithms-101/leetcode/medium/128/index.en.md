---
title: 128. Longest Consecutive Sequence
seoTitle: 128. Longest Consecutive Sequence | Python solution and explanation
description: 128. Longest Consecutive Sequence
toc: true
authors:
tags: [Array, "Hash Table", "Union Find"]
categories: [Array, "Hash Table", "Union Find"]
series: [Array, "Hash Table", "Union Find"]
date: 2023-04-13
featuredImage:
weight: 128
---

[LeetCode problem](https://leetcode.com/problems/longest-consecutive-sequence/description/)

1. Save all numbers in set to make it possible to get number at `O(1)`.
2. For each element look for the `current+1` element if exists.

```python
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        res = 0
        nset = set(nums)

        for x in nset:
            if x - 1 not in nset: # prevent double calculations
                _max = 1
                cur = x
                while cur + 1 in nset:
                    _max += 1
                    cur += 1
                res = max(_max, res)
        return res
```
