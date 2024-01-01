---
title: 1760. Minimum Limit of Balls in a Bag
seoTitle: LeetCode 1760. Minimum Limit of Balls in a Bag | Python solution and explanation
description: 1760. Minimum Limit of Balls in a Bag
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1760
---

[LeetCode problem 1760](https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/)

```python
class Solution:
    def minimumSize(self, nums: List[int], maxOperations: int) -> int:
        def check(mx: int) -> bool:
            return sum((x - 1) // mx for x in nums) <= maxOperations

        return bisect_left(range(1, max(nums)), True, key=check) + 1

```
