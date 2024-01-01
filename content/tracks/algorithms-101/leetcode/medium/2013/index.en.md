---
title: 2013. Detect Squares
seoTitle: LeetCode 2013. Detect Squares | Python solution and explanation
description: 2013. Detect Squares
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2013
---

[LeetCode problem 2013](https://leetcode.com/problems/detect-squares/)

```python
class DetectSquares:
    def __init__(self):
        self.cnt = defaultdict(Counter)

    def add(self, point: List[int]) -> None:
        x, y = point
        self.cnt[x][y] += 1

    def count(self, point: List[int]) -> int:
        x1, y1 = point
        if x1 not in self.cnt:
            return 0
        res = 0
        for x2 in self.cnt.keys():
            if x2 != x1:
                d = x2 - x1
                res += self.cnt[x2][y1] * self.cnt[x1][y1 + d] * self.cnt[x2][y1 + d]
                res += self.cnt[x2][y1] * self.cnt[x1][y1 - d] * self.cnt[x2][y1 - d]
        return res


# Your DetectSquares object will be instantiated and called as such:
# obj = DetectSquares()
# obj.add(point)
# param_2 = obj.count(point)

```
