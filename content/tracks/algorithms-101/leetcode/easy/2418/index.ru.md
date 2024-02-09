---
title: 2418. Sort the People
seoTitle: LeetCode 2418. Sort the People | Python solution and explanation
description: 2418. Sort the People
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2418
---

[LeetCode problem 2418](https://leetcode.com/problems/sort-the-people/)

```python
class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        return [name for _, name in sorted(zip(heights, names), reverse=True)]

```