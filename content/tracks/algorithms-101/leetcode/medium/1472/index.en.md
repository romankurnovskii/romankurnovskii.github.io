---
title: 1472. Design Browser History
seoTitle: LeetCode 1472. Design Browser History | Python solution and explanation
description: 1472. Design Browser History
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1472
---

[LeetCode problem 1472](https://leetcode.com/problems/design-browser-history/)

```python
class BrowserHistory:
    def __init__(self, homepage: str):
        self.stk1 = []
        self.stk2 = []
        self.visit(homepage)

    def visit(self, url: str) -> None:
        self.stk1.append(url)
        self.stk2.clear()

    def back(self, steps: int) -> str:
        while steps and len(self.stk1) > 1:
            self.stk2.append(self.stk1.pop())
            steps -= 1
        return self.stk1[-1]

    def forward(self, steps: int) -> str:
        while steps and self.stk2:
            self.stk1.append(self.stk2.pop())
            steps -= 1
        return self.stk1[-1]


# Your BrowserHistory object will be instantiated and called as such:
# obj = BrowserHistory(homepage)
# obj.visit(url)
# param_2 = obj.back(steps)
# param_3 = obj.forward(steps)

```
