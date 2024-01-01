---
title: 1981. Minimize the Difference Between Target and Chosen Elements
seoTitle: LeetCode 1981. Minimize the Difference Between Target and Chosen Elements | Python solution and explanation
description: 1981. Minimize the Difference Between Target and Chosen Elements
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1981
---

[LeetCode problem 1981](https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/)

```python
class Solution:
    def minimizeTheDifference(self, mat: List[List[int]], target: int) -> int:
        f = {0}
        for row in mat:
            f = set(a + b for a in f for b in row)
        return min(abs(v - target) for v in f)

```
