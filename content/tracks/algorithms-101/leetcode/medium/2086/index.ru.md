---
title: 2086. Minimum Number of Food Buckets to Feed the Hamsters
seoTitle: LeetCode 2086. Minimum Number of Food Buckets to Feed the Hamsters | Python solution and explanation
description: 2086. Minimum Number of Food Buckets to Feed the Hamsters
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2086
---

[LeetCode problem 2086](https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/)

```python
class Solution:
    def minimumBuckets(self, street: str) -> int:
        res = 0
        i, n = 0, len(street)
        while i < n:
            if street[i] == 'H':
                if i + 1 < n and street[i + 1] == '.':
                    i += 2
                    res += 1
                elif i and street[i - 1] == '.':
                    res += 1
                else:
                    return -1
            i += 1
        return res

```
