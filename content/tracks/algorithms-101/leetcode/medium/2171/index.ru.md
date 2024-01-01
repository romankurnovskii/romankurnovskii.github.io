---
title: 2171. Removing Minimum Number of Magic Beans
seoTitle: LeetCode 2171. Removing Minimum Number of Magic Beans | Python solution and explanation
description: 2171. Removing Minimum Number of Magic Beans
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2171
---

[LeetCode problem 2171](https://leetcode.com/problems/removing-minimum-number-of-magic-beans/)

```python
class Solution:
    def minimumRemoval(self, beans: List[int]) -> int:
        beans.sort()
        s, n = sum(beans), len(beans)
        return min(s - x * (n - i) for i, x in enumerate(beans))

```
