---
title: 1648. Sell Diminishing-Valued Colored Balls
seoTitle: LeetCode 1648. Sell Diminishing-Valued Colored Balls | Python solution and explanation
description: 1648. Sell Diminishing-Valued Colored Balls
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1648
---

[LeetCode problem 1648](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/)

```python
class Solution:
    def maxProfit(self, inventory: List[int], orders: int) -> int:
        inventory.sort(reverse=True)
        mod = 10**9 + 7
        res = i = 0
        n = len(inventory)
        while orders > 0:
            while i < n and inventory[i] >= inventory[0]:
                i += 1
            nxt = 0
            if i < n:
                nxt = inventory[i]
            cnt = i
            x = inventory[0] - nxt
            tot = cnt * x
            if tot > orders:
                decr = orders // cnt
                a1, an = inventory[0] - decr + 1, inventory[0]
                res += (a1 + an) * decr // 2 * cnt
                res += (inventory[0] - decr) * (orders % cnt)
            else:
                a1, an = nxt + 1, inventory[0]
                res += (a1 + an) * x // 2 * cnt
                inventory[0] = nxt
            orders -= tot
            res %= mod
        return res

```
