---
title: 191. Number of 1 Bits
seoTitle: 191. Number of 1 Bits | Python Solution and Explanation
description: Solving and understanding the LeetCode problem 191. Number of 1 Bits using bitwise operations in Python.
toc: true
tags: [Bit Manipulation, LeetCode]
categories: [Algorithms, Easy]
series: [LeetCode Top Interview Questions]
date: 2023-06-21
lastMod: 2023-06-21
featuredImage: https://picsum.photos/700/221?grayscale
weight: 191
---

[LeetCode problem](https://leetcode.com/problems/number-of-1-bits/)

## Problem Statement

Given an integer value represented in binary format, we need to count the number of '1' bits in its binary representation.

## Naive Solution

The naive solution for this problem would be to convert the binary number into a string and then simply iterate over the string and count the number of '1's. However, this solution is not optimal and is not taking advantage of the properties of binary numbers.

## Algorithm

The optimal solution for this problem involves using [<mark>bitwise operation</mark>](https://romankurnovskii.com/en/posts/python-bitwise-operators/). Bitwise operations are a type of operation that works on the binary representation of numbers.

Specifically, we'll use the bitwise `AND` operator (`&`) and bitwise right shift operator (`>>`).

To count the number of 1 bits in the binary representation of a number, we can `AND` the number with 1. If the result is 1, that means the least significant bit of the number is 1. We then right shift the number by 1 bit to check the next bit. We continue this process until the number becomes 0.

## High Level Solution Logic

1. Initialize a counter variable to 0.
2. While the number is not 0:
   - AND the number with 1.
   - If the result is 1, increment the counter.
   - Right shift the number by 1 bit.
3. Return the counter.

## Python Code

Here's the Python code for this solution:

```python
class Solution:
    def hammingWeight(self, n: int) -> int:
        bits = 0
        while n:
            bits += n & 1
            n >>= 1
        return bits
```

## Example

Let's say we have a binary number `00000001011`, which is `11` in decimal.

1. Initialize a counter variable to 0. So, `bits = 0`.
2. Start the loop. The number `n` is **11**, which is not **0**, so we proceed.
3. We perform the operation `n & 1`. In binary, `1011 & 0001` equals `0001`, which is 1 in decimal. This is because the bitwise `AND` operation returns 1 only if both bits being compared are 1. So, since our least significant bit is 1, our `AND` operation returns 1. We increment our counter bits by 1. Now `bits = 1`.
4. We right shift our number by 1 bit using the operation `n >>= 1`. This operation moves all the bits of the number one position to the right.
   1. Our number `1011` becomes 101 in binary or 5 in decimal.
5. Our updated number `n` is 5, which is not 0, so we repeat the process.
6. Now, `n & 1` is `101 & 001` equals 001, which is 1 in decimal.
   1. So, we increment our counter bits by 1.
   2. Now bits = 2.
7. We right shift our number by 1 bit. Our number 101 becomes 10 in binary or 2 in decimal.
   1. Our updated number `n` is 2, which is not 0, so we repeat the process.
8. Now, `n & 1` is `10 & 01` equals `00`, which is 0 in decimal. So, we do not increment our counter bits.
9. We right shift our number by 1 bit. Our number 10 becomes 1 in binary.
   1. Our updated number `n` is 1, which is not 0, so we repeat the process.
10. Now, `n & 1` is `1 & 1` equals 1. So, we increment our counter bits by 1. `Now bits = 3`.
11. We right shift our number by 1 bit. Our number 1 becomes 0 in binary.
12. Our updated number `n` is 0, which stops the loop.
