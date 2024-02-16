---
title: 1115. Print FooBar Alternately
seoTitle: LeetCode 1115. Print FooBar Alternately | Python solution and explanation
description: 1115. Print FooBar Alternately
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1115
---

[LeetCode problem 1115](https://leetcode.com/problems/print-foobar-alternately/)

```python
from threading import Semaphore


class FooBar:
    def __init__(self, n):
        self.n = n
        self.f = Semaphore(1)
        self.b = Semaphore(0)

    def foo(self, printFoo: "Callable[[], None]") -> None:
        for _ in range(self.n):
            self.f.acquire()
            # printFoo() outputs "foo". Do not change or remove this line.
            printFoo()
            self.b.release()

    def bar(self, printBar: "Callable[[], None]") -> None:
        for _ in range(self.n):
            self.b.acquire()
            # printBar() outputs "bar". Do not change or remove this line.
            printBar()
            self.f.release()

```
