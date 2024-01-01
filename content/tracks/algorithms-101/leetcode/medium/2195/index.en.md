---
title: 2195. Append K Integers With Minimal Sum
seoTitle: LeetCode 2195. Append K Integers With Minimal Sum | Python solution and explanation
description: 2195. Append K Integers With Minimal Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2195
---

[LeetCode problem 2195](https://leetcode.com/problems/append-k-integers-with-minimal-sum/)

```python
class Solution:
    def minimalKSum(self, nums: List[int], k: int) -> int:
        nums.append(0)
        nums.append(2 * 10**9)
        nums.sort()
        res = 0
        for a, b in pairwise(nums):
            n = min(k, b - a - 1)
            if n <= 0:
                continue
            k -= n
            res += (a + 1 + a + n) * n // 2
            if k == 0:
                break
        return res

```
