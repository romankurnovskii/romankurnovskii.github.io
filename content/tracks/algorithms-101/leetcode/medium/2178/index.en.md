---
title: 2178. Maximum Split of Positive Even Integers
seoTitle: LeetCode 2178. Maximum Split of Positive Even Integers | Python solution and explanation
description: 2178. Maximum Split of Positive Even Integers
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2178
---

[LeetCode problem 2178](https://leetcode.com/problems/maximum-split-of-positive-even-integers/)

```python
class Solution:
    def maximumEvenSplit(self, finalSum: int) -> List[int]:
        if finalSum % 2:
            return []
        i = 2
        res = []
        while i <= finalSum:
            res.append(i)
            finalSum -= i
            i += 2
        res[-1] += finalSum
        return res

```
