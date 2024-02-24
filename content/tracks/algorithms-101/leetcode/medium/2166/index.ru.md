---
title: 2166. Design Bitset
seoTitle: LeetCode 2166. Design Bitset | Python solution and explanation
description: 2166. Design Bitset
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2166
---

[LeetCode problem 2166](https://leetcode.com/problems/design-bitset/)

```python
class Bitset:
    def __init__(self, size: int):
        self.a = ['0'] * size
        self.b = ['1'] * size
        self.cnt = 0

    def fix(self, idx: int) -> None:
        if self.a[idx] == '0':
            self.a[idx] = '1'
            self.cnt += 1
        self.b[idx] = '0'

    def unfix(self, idx: int) -> None:
        if self.a[idx] == '1':
            self.a[idx] = '0'
            self.cnt -= 1
        self.b[idx] = '1'

    def flip(self) -> None:
        self.a, self.b = self.b, self.a
        self.cnt = len(self.a) - self.cnt

    def all(self) -> bool:
        return self.cnt == len(self.a)

    def one(self) -> bool:
        return self.cnt > 0

    def count(self) -> int:
        return self.cnt

    def toString(self) -> str:
        return ''.join(self.a)


# Your Bitset object will be instantiated and called as such:
# obj = Bitset(size)
# obj.fix(idx)
# obj.unfix(idx)
# obj.flip()
# param_4 = obj.all()
# param_5 = obj.one()
# param_6 = obj.count()
# param_7 = obj.toString()

```
