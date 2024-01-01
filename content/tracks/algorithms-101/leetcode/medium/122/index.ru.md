---
title: 122. Best Time to Buy and Sell Stock II
seoTitle: 122. Best Time to Buy and Sell Stock II | Python soulution and explanation
description: 122. Best Time to Buy and Sell Stock II
toc: false
authors:
tags: [Array, "Dynamic Programming", Greedy]
categories: [Array, "Dynamic Programming", Greedy]
series: [Array, "Dynamic Programming", Greedy]
date: 2023-03-31
featuredImage:
weight: 122
---

[LeetCode problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/)

To solve this problem, we can use a greedy approach.

The idea is to keep adding the profit whenever the price on the next day is higher than the price on the current day.

This way, we will maximize profit.

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0

        for i in range(1, len(prices)):
            if prices[i] > prices[i - 1]:
                profit += prices[i] - prices[i - 1]
        
        return profit
```

**LeetCode Editorial:**

- [Editorial](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/editorial/)
