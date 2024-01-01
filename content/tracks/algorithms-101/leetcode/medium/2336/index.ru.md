---
title: 2336. Smallest Number in Infinite Set
seoTitle: LeetCode 2336. Smallest Number in Infinite Set | Python solution and explanation
description: 2336. Smallest Number in Infinite Set
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2336
---

[LeetCode problem 2336](https://leetcode.com/problems/smallest-number-in-infinite-set/)

```python
from sortedcontainers import SortedSet


class SmallestInfiniteSet:
    def __init__(self):
        self.s = SortedSet(range(1, 1001))

    def popSmallest(self) -> int:
        x = self.s[0]
        self.s.remove(x)
        return x

    def addBack(self, num: int) -> None:
        self.s.add(num)


# Your SmallestInfiniteSet object will be instantiated and called as such:
# obj = SmallestInfiniteSet()
# param_1 = obj.popSmallest()
# obj.addBack(num)

```
