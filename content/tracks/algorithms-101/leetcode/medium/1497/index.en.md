---
title: 1497. Check If Array Pairs Are Divisible by k
seoTitle: LeetCode 1497. Check If Array Pairs Are Divisible by k | Python solution and explanation
description: 1497. Check If Array Pairs Are Divisible by k
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1497
---

[LeetCode problem 1497](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/)

```python
class Solution:
    def canArrange(self, arr: List[int], k: int) -> bool:
        cnt = Counter(x % k for x in arr)
        return cnt[0] % 2 == 0 and all(cnt[i] == cnt[k - i] for i in range(1, k))

```
