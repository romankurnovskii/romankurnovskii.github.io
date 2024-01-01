---
title: 1742. Maximum Number of Balls in a Box
seoTitle: LeetCode 1742. Maximum Number of Balls in a Box | Python solution and explanation
description: 1742. Maximum Number of Balls in a Box
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1742
---

[LeetCode problem 1742](https://leetcode.com/problems/maximum-number-of-balls-in-a-box/)

```python
class Solution:
    def countBalls(self, lowLimit: int, highLimit: int) -> int:
        cnt = [0] * 50
        for x in range(lowLimit, highLimit + 1):
            y = 0
            while x:
                y += x % 10
                x //= 10
            cnt[y] += 1
        return max(cnt)

```
