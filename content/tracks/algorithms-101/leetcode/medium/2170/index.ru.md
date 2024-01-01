---
title: 2170. Minimum Operations to Make the Array Alternating
seoTitle: LeetCode 2170. Minimum Operations to Make the Array Alternating | Python solution and explanation
description: 2170. Minimum Operations to Make the Array Alternating
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2170
---

[LeetCode problem 2170](https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/)

```python
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        def get(i):
            c = Counter(nums[i::2]).most_common(2)
            if not c:
                return [(0, 0), (0, 0)]
            if len(c) == 1:
                return [c[0], (0, 0)]
            return c

        n = len(nums)
        return min(n - (n1 + n2) for a, n1 in get(0) for b, n2 in get(1) if a != b)

```
