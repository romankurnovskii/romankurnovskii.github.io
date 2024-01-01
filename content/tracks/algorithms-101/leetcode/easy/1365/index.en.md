---
title: 1365. How Many Numbers Are Smaller Than the Current Number
seoTitle: LeetCode 1365. How Many Numbers Are Smaller Than the Current Number | Python solution and explanation
description: 1365. How Many Numbers Are Smaller Than the Current Number
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1365
---

[LeetCode problem 1365](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/)

```python
class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        cnt = [0] * 102
        for x in nums:
            cnt[x + 1] += 1
        s = list(accumulate(cnt))
        return [s[x] for x in nums]

```
