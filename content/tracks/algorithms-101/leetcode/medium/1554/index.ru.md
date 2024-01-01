---
title: 1554. Strings Differ by One Character
seoTitle: LeetCode 1554. Strings Differ by One Character | Python solution and explanation
description: 1554. Strings Differ by One Character
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1554
---

[LeetCode problem 1554](https://leetcode.com/problems/strings-differ-by-one-character/)

```python
class Solution:
    def differByOne(self, dict: List[str]) -> bool:
        s = set()
        for word in dict:
            for i in range(len(word)):
                t = word[:i] + "*" + word[i + 1 :]
                if t in s:
                    return True
                s.add(t)
        return False

```
