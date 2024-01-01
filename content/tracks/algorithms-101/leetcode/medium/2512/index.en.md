---
title: 251. Flatten 2D Vector
seoTitle: LeetCode 251. Flatten 2D Vector | Python solution and explanation
description: 251. Flatten 2D Vector
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 251
---

[LeetCode problem 251](https://leetcode.com/problems/flatten-2d-vector/)

```python
class Vector2D:
    def __init__(self, vec: List[List[int]]):
        self.i = 0
        self.j = 0
        self.vec = vec

    def next(self) -> int:
        self.forward()
        res = self.vec[self.i][self.j]
        self.j += 1
        return res

    def hasNext(self) -> bool:
        self.forward()
        return self.i < len(self.vec)

    def forward(self):
        while self.i < len(self.vec) and self.j >= len(self.vec[self.i]):
            self.i += 1
            self.j = 0


# Your Vector2D object will be instantiated and called as such:
# obj = Vector2D(vec)
# param_1 = obj.next()
# param_2 = obj.hasNext()

```
