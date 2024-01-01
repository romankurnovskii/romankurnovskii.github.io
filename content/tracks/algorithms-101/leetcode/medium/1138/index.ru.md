---
title: 1138. Alphabet Board Path
seoTitle: LeetCode 1138. Alphabet Board Path | Python solution and explanation
description: 1138. Alphabet Board Path
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1138
---

[LeetCode problem 1138](https://leetcode.com/problems/alphabet-board-path/)

```python
class Solution:
    def alphabetBoardPath(self, target: str) -> str:
        i = j = 0
        res = []
        for c in target:
            v = ord(c) - ord("a")
            x = v // 5
            y = v % 5
            while j > y:
                j -= 1
                res.append("L")
            while i > x:
                i -= 1
                res.append("U")
            while j < y:
                j += 1
                res.append("R")
            while i < x:
                i += 1
                res.append("D")
            res.append("!")
        return "".join(res)
```
