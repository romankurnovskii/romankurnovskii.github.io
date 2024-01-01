---
title: 1656. Design an Ordered Stream
seoTitle: LeetCode 1656. Design an Ordered Stream | Python solution and explanation
description: 1656. Design an Ordered Stream
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1656
---

[LeetCode problem 1656](https://leetcode.com/problems/design-an-ordered-stream/)

```python
class OrderedStream:
    def __init__(self, n: int):
        self.data = [None] * n
        self.ptr = 0

    def insert(self, idKey: int, value: str) -> List[str]:
        self.data[idKey - 1] = value
        res = []
        while self.ptr < len(self.data) and self.data[self.ptr]:
            res.append(self.data[self.ptr])
            self.ptr += 1
        return res


# Your OrderedStream object will be instantiated and called as such:
# obj = OrderedStream(n)
# param_1 = obj.insert(idKey,value)

```
