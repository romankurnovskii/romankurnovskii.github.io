---
title: 2011. Final Value of Variable After Performing Operations
seoTitle: LeetCode 2011. Final Value of Variable After Performing Operations | Python solution and explanation
description: 2011. Final Value of Variable After Performing Operations
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2011
---

[LeetCode problem 2011](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/)

```python
class Solution:
    def finalValueAfterOperations(self, operations: List[str]) -> int:
        return sum(1 if s[1] == '+' else -1 for s in operations)

```
