---
title: 58. Length of Last Word
seoTitle: LeetCode 58. Length of Last Word | Python solution and explanation
description: 58. Length of Last Word
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 58
---

[LeetCode problem 58](https://leetcode.com/problems/length-of-last-word/)

```python
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        i = len(s) - 1
        while i >= 0 and s[i] == ' ':
            i -= 1
        j = i
        while j >= 0 and s[j] != ' ':
            j -= 1
        return i - j
```

```python
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        ar = s.split()
        return len(ar[-1])
```
