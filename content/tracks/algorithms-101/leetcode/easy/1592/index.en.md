---
title: 1592. Rearrange Spaces Between Words
seoTitle: LeetCode 1592. Rearrange Spaces Between Words | Python solution and explanation
description: 1592. Rearrange Spaces Between Words
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1592
---

[LeetCode problem 1592](https://leetcode.com/problems/rearrange-spaces-between-words/)

```python
class Solution:
    def reorderSpaces(self, text: str) -> str:
        cnt = text.count(' ')
        words = text.split()
        m = len(words) - 1
        if m == 0:
            return words[0] + ' ' * cnt
        return (' ' * (cnt // m)).join(words) + ' ' * (cnt % m)

```
