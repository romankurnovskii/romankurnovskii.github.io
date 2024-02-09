---
title: 1359. Count All Valid Pickup and Delivery Options
seoTitle: LeetCode 1359. Count All Valid Pickup and Delivery Options | Python solution and explanation
description: Detailed explanation for solving the LeetCode 1359. Count All Valid Pickup and Delivery Options problem.
toc: true
tags: [Algorithms, Hard, LeetCode]
categories: [Algorithms, LeetCode]
date: 2023-09-10
lastmod: 2023-09-10
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1359
---

[LeetCode problem 1359](<https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/>)

## Problem Statement

You're tasked with finding all valid sequences of pickup and delivery events for `n` orders such that for every order, the delivery always comes after its respective pickup. Because the answer can be immense, you're to return the result modulo \(10^9 + 7\).

## Naive Solution

A straightforward approach might be to generate all potential permutations of pickup and delivery actions and then exclude the unsuitable ones. However, this method would be exceedingly inefficient and would not scale for larger `n` values.

## Hints & Tips

Pattern observation can greatly simplify the problem. Breaking down the problem for smaller `n` values can reveal these patterns.

## Approach

By breaking down the problem and observing patterns for initial `n` values, a pattern emerges, providing insight into solving for any `n`.

### Observations

- For `n=1`, there's only 1 sequence: `(P1, D1)`.
- For `n=2`, by adding `(P2,D2)` to the sequence `(P1,D1)`, the number of possible sequences becomes `3+2+1 = 6`.
- For `n=3`, the number of possible sequences becomes `6 x (5+4+3+2+1) = 90`.
- A pattern emerges where the result for `n` can be calculated from the result for `n-1`.

This pattern can be exploited to create a formula for any `n`.

## Solution

```python
def countOrders(n: int) -> int:
    MOD = 10**9 + 7
    res = 1

    for x in range(1, n + 1):
        prev_order_combinations = res
        order_combinations = x * (x * 2 - 1)
        res = prev_order_combinations * order_combinations % MOD

    return res
```
