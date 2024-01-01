---
title: 2198. Number of Single Divisor Triplets
seoTitle: LeetCode 2198. Number of Single Divisor Triplets | Python solution and explanation
description: 2198. Number of Single Divisor Triplets
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2198
---

[LeetCode problem 2198](https://leetcode.com/problems/number-of-single-divisor-triplets/)

```python
class Solution:
    def singleDivisorTriplet(self, nums: List[int]) -> int:
        def check(a, b, c):
            s = a + b + c
            return sum(s % x == 0 for x in [a, b, c]) == 1

        counter = Counter(nums)
        res = 0
        for a, cnt1 in counter.items():
            for b, cnt2 in counter.items():
                for c, cnt3 in counter.items():
                    if check(a, b, c):
                        if a == b:
                            res += cnt1 * (cnt1 - 1) * cnt3
                        elif a == c:
                            res += cnt1 * (cnt1 - 1) * cnt2
                        elif b == c:
                            res += cnt1 * cnt2 * (cnt2 - 1)
                        else:
                            res += cnt1 * cnt2 * cnt3
        return res

```
