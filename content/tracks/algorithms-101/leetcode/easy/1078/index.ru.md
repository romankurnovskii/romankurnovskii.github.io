---
title: 1078. Occurrences After Bigram
seoTitle: LeetCode 1078. Occurrences After Bigram | Python solution and explanation
description: 1078. Occurrences After Bigram
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1078
---

[LeetCode problem 1078](https://leetcode.com/problems/occurrences-after-bigram/)

```python
class Solution:
    def findOcurrences(self, text: str, first: str, second: str) -> List[str]:
        words = text.split()
        res = []
        for i in range(len(words) - 2):
            a, b, c = words[i : i + 3]
            if a == first and b == second:
                res.append(c)
        return res

```
