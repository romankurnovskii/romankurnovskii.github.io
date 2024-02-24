---
title: 29. Divide Two Integers
description: LeetCode 29. Divide Two Integers
toc: true
authors: [roman-kurnovskii]
tags: [Math, "Bit Manipulation"]
categories: [Algorithms, Medium]
series:
date: 2022-11-20
featuredImage:
weight: 29
---

[LeetCode problem](https://leetcode.com/problems/divide-two-integers/)

Given two integers `dividend` and `divisor`, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to `8`, and `-2.7335` would be truncated to `-2`.

Return the quotient after dividing `dividend` by `divisor`.

Note: Assume we are dealing with an environment that could only store integers within the **32-bit** signed integer range: `[−231, 231 − 1]`. For this problem, if the quotient is strictly greater than `231 - 1`, then return `231 - 1`, and if the quotient is strictly less than -231, then return `-231`.

**Example 1:**

  Input: dividend = 10, divisor = 3
  Output: 3
  Explanation: 10/3 = 3.33333.. which is truncated to 3.

**Example 2:**

  Input: dividend = 7, divisor = -3
  Output: -2
  Explanation: 7/-3 = -2.33333.. which is truncated to -2.

## Code

**Idea:**

1. Remove decimals from both `divisor` and `divident`
2. Remember the result sign (`positive` or `< 0`)
3. Subtract `divisor` from `divident` until result is less or equal to zero.

Works but is too slow in case small number `divisor` (*1*) and greater number `dividend` (*-2147483648*):

```python
class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        res = 0

        dd = abs(dividend)
        ds = abs(divisor)

        sign = -1 if (dividend > 0 and divisor < 0) or (dividend < 0 and divisor > 0) else 1

        while dd >= ds:
            dd -= ds
            res += 1

        return sign * res
```

**Improve idea:**

1. Sum `divisor` after "success" subtract until result of subtract is `> 0`
2. Subtract `divisor` back until we can subtract it from `dividend`

```python
class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        res = 0

        dd = abs(dividend)
        ds = abs(divisor)

        sign = -1 if (dividend > 0 and divisor <
                      0) or (dividend < 0 and divisor > 0) else 1

        if divisor == -1 and dividend == -2147483648:
            return 2147483647
        elif divisor == 1:
            return sign * dd

        while dd >= ds:
            tmp = ds
            multiples = 1 # count of subtracts
            while dd >= tmp: ## sum divisor
                dd -= tmp
                res += multiples # hense sum count of subtracts

                tmp += tmp
                multiples += multiples
            else:
                if dd >= ds:
                    dd -= ds
                    res += 1

        return sign * res
```

## Better idea

**Idea:** [Bit manipulation](/en/posts/python-bitwise-operators/)

```python
class Solution:
  def divide(self, dividend, divisor):
      positive = (dividend < 0) is (divisor < 0)
      dividend, divisor = abs(dividend), abs(divisor)
      res = 0
      while dividend >= divisor:
              curr_divisor, num_divisors = divisor, 1
              while dividend >= curr_divisor:
                  dividend -= curr_divisor
                  res += num_divisors
                  
                  curr_divisor = curr_divisor << 1
                  num_divisors = num_divisors << 1
          
      if not positive:
          res = -res
      
      return min(max(-2147483648, res), 2147483647)
```

Explanation:

- <https://leetcode.com/problems/divide-two-integers/discuss/715094/Python-fast-code-with-detailed-explanation>

**Another:**

Time: $O(\log^2 n)$
Space: $O(1)$

```python
class Solution:
  def divide(self, dividend: int, divisor: int) -> int:
    if dividend == -2**31 and divisor == -1:
      return 2**31 - 1

    sign = -1 if (dividend > 0) ^ (divisor > 0) else 1
    res = 0
    dvd = abs(dividend)
    dvs = abs(divisor)

    while dvd >= dvs:
      k = 1
      while k * 2 * dvs <= dvd:
        k <<= 1
      dvd -= k * dvs
      res += k

    return sign * res
```
