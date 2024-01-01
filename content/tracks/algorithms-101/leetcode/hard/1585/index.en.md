---
title: 1585. Check If String Is Transformable With Substring Sort Operations
seoTitle: LeetCode 1585. Check If String Is Transformable With Substring Sort Operations | Python solution and explanation
description: 1585. Check If String Is Transformable With Substring Sort Operations
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1585
---

[LeetCode problem 1585](https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/)

```python
class Solution:
    def isTransformable(self, s: str, t: str) -> bool:
        pos = defaultdict(deque)
        for i, c in enumerate(s):
            pos[int(c)].append(i)
        for c in t:
            x = int(c)
            if not pos[x] or any(pos[i] and pos[i][0] < pos[x][0] for i in range(x)):
                return False
            pos[x].popleft()
        return True

```
