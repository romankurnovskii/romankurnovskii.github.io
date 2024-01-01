---
title: 1481. Least Number of Unique Integers after K Removals
seoTitle: LeetCode 1481. Least Number of Unique Integers after K Removals | Python solution and explanation
description: 1481. Least Number of Unique Integers after K Removals
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1481
---

[LeetCode problem 1481](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/)

```python
class Solution:
    def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:
        cnt = Counter(arr)
        for i, v in enumerate(sorted(cnt.values())):
            k -= v
            if k < 0:
                return len(cnt) - i
        return 0

```
