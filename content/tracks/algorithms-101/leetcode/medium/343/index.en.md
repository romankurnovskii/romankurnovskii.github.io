---
title: 343. Integer Break
seoTitle: LeetCode 343. Integer Break | Python Solution and Explanation
description: Integer Break
toc: true
tags: [LeetCode, Math]
categories: [Algorithms, LeetCode, Medium]
date: 2023-10-06
lastMod: 2023-10-06
featuredImage: https://picsum.photos/700/241?grayscale
weight: 343
---

[LeetCode problem 343](<https://leetcode.com/problems/integer-break/>)

## Problem Statement

Given a positive integer `n`, our task is to divide it into the sum of `k` positive integers, where $k \geq 2$, in such a way that the product of these integers is maximized. Our goal is to determine the maximum possible product.

## Naive Solution

A straightforward or naive way to solve this would be to consider all potential combinations to divide the number `n` and calculate the product for each division. This method, while comprehensive, would be inefficient and impractical for larger values of `n`.

## Hints & Tips

- Try to break down `n` into smaller parts and observe the pattern of the results.
- The number 3 plays a significant role, so try to understand its impact on the problem.

## Approach

A pattern emerges when observing how the number can be broken down to maximize the product: the number 3 becomes significant. This realization stems from the fact that 3 multiplied by any number $x \geq 3$ is always greater than $x \times 2$ and $x \times 1$.

The only exception is 4, where $2 \times 2$ is preferable to 3 and 1.

Therefore, the optimized approach becomes:

1. When $n = 2$, the answer is 1 (because $1 \times 1 = 1$).
2. For $n = 3$, the answer becomes 2 (as $2 \times 1 = 2$).
3. If $n = 4$, the result is 4 (as $2 \times 2 = 4$).
4. For any $n > 4$, we can repeatedly subtract 3 from `n` and multiply the resulting product by 3.

   After all the 3s are extracted, the remaining `n` (which will be less than 4) will contribute its optimal value to the product (either 1, 2, or 4).

## Solution

```python
def integerBreak(n: int) -> int:
    if n == 2:          # base cases
        return 1
    if n == 3:
        return 2
    if n == 4:
        return 4

    product = 1
    while n > 4:        # As long as n is greater than 4,
        product *= 3    # increase the product by a factor of 3
        n -= 3          # and keep reducing n by 3 

    product *= n        # Multiply the remaining value of n to the product

    return product
```
