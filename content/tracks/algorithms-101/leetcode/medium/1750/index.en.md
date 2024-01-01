---
title: 1750. Minimum Length of String After Deleting Similar Ends
seoTitle: LeetCode 1750. Minimum Length of String After Deleting Similar Ends | Python solution and explanation
description: 1750. Minimum Length of String After Deleting Similar Ends
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1750
---

[LeetCode problem 1750](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/)

```python
class Solution:
    def minimumLength(self, s: str) -> int:
        i, j = 0, len(s) - 1
        while i < j and s[i] == s[j]:
            while i + 1 < j and s[i] == s[i + 1]:
                i += 1
            while i < j - 1 and s[j - 1] == s[j]:
                j -= 1
            i, j = i + 1, j - 1
        return max(0, j - i + 1)

```
