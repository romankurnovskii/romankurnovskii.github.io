---
title: 2155. All Divisions With the Highest Score of a Binary Array
seoTitle: LeetCode 2155. All Divisions With the Highest Score of a Binary Array | Python solution and explanation
description: 2155. All Divisions With the Highest Score of a Binary Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2155
---

[LeetCode problem 2155](https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/)

```python
class Solution:
    def maxScoreIndices(self, nums: List[int]) -> List[int]:
        left, right = 0, sum(nums)
        mx = right
        res = [0]
        for i, num in enumerate(nums):
            if num == 0:
                left += 1
            else:
                right -= 1
            t = left + right
            if mx == t:
                res.append(i + 1)
            elif mx < t:
                mx = t
                res = [i + 1]
        return res

```
