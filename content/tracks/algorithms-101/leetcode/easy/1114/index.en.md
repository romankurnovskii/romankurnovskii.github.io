---
title: 1114. Print in Order
seoTitle: LeetCode 1114. Print in Order | Python solution and explanation
description: 1114. Print in Order
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1114
---

[LeetCode problem 1114](https://leetcode.com/problems/print-in-order/)

```python
from threading import Semaphore


class Foo:
    def __init__(self):
        self.a = Semaphore(1)
        self.b = Semaphore(0)
        self.c = Semaphore(0)

    def first(self, printFirst: 'Callable[[], None]') -> None:
        self.a.acquire()
        # printFirst() outputs "first". Do not change or remove this line.
        printFirst()
        self.b.release()

    def second(self, printSecond: 'Callable[[], None]') -> None:
        self.b.acquire()
        # printSecond() outputs "second". Do not change or remove this line.
        printSecond()
        self.c.release()

    def third(self, printThird: 'Callable[[], None]') -> None:
        self.c.acquire()
        # printThird() outputs "third". Do not change or remove this line.
        printThird()
        self.a.release()

```
