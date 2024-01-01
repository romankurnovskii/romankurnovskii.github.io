---
title: 1637. Widest Vertical Area Between Two Points Containing No Points
seoTitle: LeetCode 1637. Widest Vertical Area Between Two Points Containing No Points | Python solution and explanation
description: 1637. Widest Vertical Area Between Two Points Containing No Points
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1637
---

[LeetCode problem 1637](https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/)

```python
class Solution:
    def maxWidthOfVerticalArea(self, points: List[List[int]]) -> int:
        nums = [x for x, _ in points]
        n = len(nums)
        mi, mx = min(nums), max(nums)
        bucket_size = max(1, (mx - mi) // (n - 1))
        bucket_count = (mx - mi) // bucket_size + 1
        buckets = [[inf, -inf] for _ in range(bucket_count)]
        for x in nums:
            i = (x - mi) // bucket_size
            buckets[i][0] = min(buckets[i][0], x)
            buckets[i][1] = max(buckets[i][1], x)
        res = 0
        prev = inf
        for curmin, curmax in buckets:
            if curmin > curmax:
                continue
            res = max(res, curmin - prev)
            prev = curmax
        return res

```
