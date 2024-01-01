---
title: 1861. Rotating the Box
seoTitle: LeetCode 1861. Rotating the Box | Python solution and explanation
description: 1861. Rotating the Box
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1861
---

[LeetCode problem 1861](https://leetcode.com/problems/rotating-the-box/)

```python
class Solution:
    def rotateTheBox(self, box: List[List[str]]) -> List[List[str]]:
        m, n = len(box), len(box[0])
        res = [[None] * m for _ in range(n)]
        for i in range(m):
            for j in range(n):
                res[j][m - i - 1] = box[i][j]
        for j in range(m):
            q = deque()
            for i in range(n - 1, -1, -1):
                if res[i][j] == '*':
                    q.clear()
                elif res[i][j] == '.':
                    q.append(i)
                elif q:
                    res[q.popleft()][j] = '#'
                    res[i][j] = '.'
                    q.append(i)
        return res

```
