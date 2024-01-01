---
title: 2042. Check if Numbers Are Ascending in a Sentence
seoTitle: LeetCode 2042. Check if Numbers Are Ascending in a Sentence | Python solution and explanation
description: 2042. Check if Numbers Are Ascending in a Sentence
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2042
---

[LeetCode problem 2042](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/)

```python
class Solution:
    def areNumbersAscending(self, s: str) -> bool:
        pre = i = 0
        n = len(s)
        while i < n:
            if s[i].isdigit():
                cur = 0
                while i < n and s[i].isdigit():
                    cur = cur * 10 + int(s[i])
                    i += 1
                if pre >= cur:
                    return False
                pre = cur
            else:
                i += 1
        return True

```
