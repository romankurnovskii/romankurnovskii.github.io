---
title: 1552. Magnetic Force Between Two Balls
seoTitle: LeetCode 1552. Magnetic Force Between Two Balls | Python solution and explanation
description: 1552. Magnetic Force Between Two Balls
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1552
---

[LeetCode problem 1552](https://leetcode.com/problems/magnetic-force-between-two-balls/)

```python
class Solution:
    def maxDistance(self, position: List[int], m: int) -> int:
        def check(f):
            prev = position[0]
            cnt = 1
            for curr in position[1:]:
                if curr - prev >= f:
                    prev = curr
                    cnt += 1
            return cnt >= m

        position.sort()
        left, right = 1, position[-1]
        while left < right:
            mid = (left + right + 1) >> 1

            if check(mid):
                left = mid
            else:
                right = mid - 1
        return left

```
