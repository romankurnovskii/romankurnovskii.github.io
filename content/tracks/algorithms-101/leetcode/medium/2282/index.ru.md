---
title: 2282. Number of People That Can Be Seen in a Grid
seoTitle: LeetCode 2282. Number of People That Can Be Seen in a Grid | Python solution and explanation
description: 2282. Number of People That Can Be Seen in a Grid
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2282
---

[LeetCode problem 2282](https://leetcode.com/problems/number-of-people-that-can-be-seen-in-a-grid/)

```python
class Solution:
    def seePeople(self, heights: List[List[int]]) -> List[List[int]]:
        def f(nums: List[int]) -> List[int]:
            n = len(nums)
            stk = []
            res = [0] * n
            for i in range(n - 1, -1, -1):
                while stk and stk[-1] < nums[i]:
                    res[i] += 1
                    stk.pop()
                if stk:
                    res[i] += 1
                while stk and stk[-1] == nums[i]:
                    stk.pop()
                stk.append(nums[i])
            return res

        res = [f(row) for row in heights]
        m, n = len(heights), len(heights[0])
        for j in range(n):
            add = f([heights[i][j] for i in range(m)])
            for i in range(m):
                res[i][j] += add[i]
        return res

```
