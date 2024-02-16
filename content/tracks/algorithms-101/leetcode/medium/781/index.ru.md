---
title: 781. Rabbits in Forest
seoTitle: LeetCode 781. Rabbits in Forest | Python solution and explanation
description: 781. Rabbits in Forest
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 781
---

[LeetCode problem 781](https://leetcode.com/problems/rabbits-in-forest/)

```python
class Solution:
    def numRabbits(self, answers: List[int]) -> int:
        counter = Counter(answers)
        return sum([math.ceil(v / (k + 1)) * (k + 1) for k, v in counter.items()])

```
