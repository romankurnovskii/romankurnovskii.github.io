---
title: 1674. Minimum Moves to Make Array Complementary
seoTitle: LeetCode 1674. Minimum Moves to Make Array Complementary | Python solution and explanation
description: 1674. Minimum Moves to Make Array Complementary
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1674
---

[LeetCode problem 1674](https://leetcode.com/problems/minimum-moves-to-make-array-complementary/)

```python
class Solution:
    def minMoves(self, nums: List[int], limit: int) -> int:
        d = [0] * (limit * 2 + 2)
        n = len(nums)

        for i in range(n >> 1):
            a, b = min(nums[i], nums[n - i - 1]), max(nums[i], nums[n - i - 1])

            d[2] += 2
            d[limit * 2 + 1] -= 2

            d[a + 1] -= 1
            d[b + limit + 1] += 1

            d[a + b] -= 1
            d[a + b + 1] += 1

        res, s = n, 0
        for v in d[2 : limit * 2 + 1]:
            s += v
            if res > s:
                res = s
        return res

```
