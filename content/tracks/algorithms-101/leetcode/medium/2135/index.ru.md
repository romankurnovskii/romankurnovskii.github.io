---
title: 2135. Count Words Obtained After Adding a Letter
seoTitle: LeetCode 2135. Count Words Obtained After Adding a Letter | Python solution and explanation
description: 2135. Count Words Obtained After Adding a Letter
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2135
---

[LeetCode problem 2135](https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/)

```python
class Solution:
    def wordCount(self, startWords: List[str], targetWords: List[str]) -> int:
        s = set()
        for word in startWords:
            mask = 0
            for c in word:
                mask |= 1 << (ord(c) - ord('a'))
            s.add(mask)

        res = 0
        for word in targetWords:
            mask = 0
            for c in word:
                mask |= 1 << (ord(c) - ord('a'))
            for c in word:
                t = mask ^ (1 << (ord(c) - ord('a')))
                if t in s:
                    res += 1
                    break
        return res

```
