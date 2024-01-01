---
title: 2241. Design an ATM Machine
seoTitle: LeetCode 2241. Design an ATM Machine | Python solution and explanation
description: 2241. Design an ATM Machine
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2241
---

[LeetCode problem 2241](https://leetcode.com/problems/design-an-atm-machine/)

```python
class ATM:
    def __init__(self):
        self.cnt = [0] * 5
        self.d = [20, 50, 100, 200, 500]

    def deposit(self, banknotesCount: List[int]) -> None:
        for i, v in enumerate(banknotesCount):
            self.cnt[i] += v

    def withdraw(self, amount: int) -> List[int]:
        res = [0] * 5
        for i in range(4, -1, -1):
            res[i] = min(amount // self.d[i], self.cnt[i])
            amount -= res[i] * self.d[i]
        if amount > 0:
            return [-1]
        for i, v in enumerate(res):
            self.cnt[i] -= v
        return res


# Your ATM object will be instantiated and called as such:
# obj = ATM()
# obj.deposit(banknotesCount)
# param_2 = obj.withdraw(amount)

```
