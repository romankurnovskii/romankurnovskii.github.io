---
title: 1482. Minimum Number of Days to Make m Bouquets
seoTitle: LeetCode 1482. Minimum Number of Days to Make m Bouquets | Python solution and explanation
description: 1482. Minimum Number of Days to Make m Bouquets
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1482
---

[LeetCode problem 1482](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/)

```python
class Solution:
    def minDays(self, bloomDay: List[int], m: int, k: int) -> int:
        if m * k > len(bloomDay):
            return -1

        def check(day: int) -> bool:
            cnt = cur = 0
            for bd in bloomDay:
                cur = cur + 1 if bd <= day else 0
                if cur == k:
                    cnt += 1
                    cur = 0
            return cnt >= m

        left, right = min(bloomDay), max(bloomDay)
        while left < right:
            mid = (left + right) >> 1
            if check(mid):
                right = mid
            else:
                left = mid + 1
        return left

```
