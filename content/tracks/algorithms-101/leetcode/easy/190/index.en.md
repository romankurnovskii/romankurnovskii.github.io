---
title: 190. Reverse Bits
seoTitle: 190. Reverse Bits | Python Solution and Explanation
description: 190. Reverse Bits
toc: true
authors:
tags: [Bit Manipulation, LeetCode]
categories: [Algorithms, Easy]
date: 2023-06-17
lastmod: 2023-06-17
featuredImage: https://picsum.photos/700/241?grayscale
weight: 190
---


[LeetCode problem](https://leetcode.com/problems/reverse-bits/)

This task involves understanding how binary representation works. An unsigned integer is a 32-bit value, where each bit represents a power of 2, from `2^0` (the least significant bit) to `2^31` (the most significant bit).

> Unsigned Integers (often called "uints") are just like integers (whole numbers) but have the property that they don't have a + or - sign associated with them. Thus they are always non-negative (zero or positive).

## Naive Solution

A naive solution to this problem could involve converting the number to a binary string, reversing the string, and then converting it back to an integer. However, this would not be the most efficient solution, especially for large numbers.

## Approach

Using [bitwise operation](https://romankurnovskii.com/en/posts/python-bitwise-operators/).

A better approach is to manipulate the bits of the number directly. This can be done by initializing an empty result and then repeatedly shifting the result to the left to make room for the next bit, and adding the last bit of the input number.

## Steps

1. Initialize the result to 0.
1. Repeat the following steps 32 times, once for each bit in the input number:
   1. Shift the result one bit to the left to make room for the next bit. This can be done with the `<<` operator.
   2. Add the last bit of the input number to the result. This can be done with the `&` operator, which performs a bitwise `AND` operation.
   3. Shift the input number one bit to the right to prepare for the next iteration. This can be done with the `>>` operator.

At the end of this process, the result will be the input number with its bits reversed.

## Solution

```python
class Solution:
    def reverseBits(self, n: int) -> int:
        result = 0
        for _ in range(32):
            result = (result << 1) + (n & 1)
            n >>= 1
        return result
```

`result << 1` shifts the bits of the result one place to the left, (`n & 1`) gets the last bit of `n`, and `n >>= 1` shifts the bits of `n` one place to the right.

### Understanding

**Example:**

Our number: `n = 0110 1010`

Our aim is to reverse these bits to get `0101 0110`.

In the solution, we initialize our result as `0` (`0000 0000` in binary). We're going to build this result bit by bit from the binary representation of `n`.

The key point of this operation is this line of code: `result = (result << 1) + (n & 1)`. This line does three things:

1. `(result << 1)`: This operation is a left shift operation. It shifts all the bits in result one place to the left. In binary, this is <mark>equivalent to multiplying by 2</mark>. So if result was `0101` (5 in decimal), after this operation result will be `1010` (10 in decimal). You can see we've made room for a new bit on the right.
2. `(n & 1)`: This operation is a bitwise `AND` operation. The `&` operator compares each binary digit of two integers and returns a new integer, with a `1` wherever both numbers had a `1` and a `0` anywhere else.
   - When `n` is ANDed with 1 (`0000 0001`), the result will be 1 only if the least significant bit of `n` is 1. This effectively gives us the last bit of `n`.
3. `(result << 1) + (n & 1)`: This line combines the above two steps. It shifts the bits of result one place to the left and adds the last bit of n to result.

Let's work through the first couple of iterations of the loop:

1. On the first iteration, result is `0000 0000`. We shift result left (it remains `0000 0000`), and add the last bit of `n` (which is 0). So result remains `0000 0000`.
   1. We then shift `n` right to become `0011 0101` (`n` From `0110 1010` to `0011 0101`).
2. On the second iteration, result is `0000 0000`. We shift result left (it remains `0000 0000`), and add the last bit of `n` (which is 1). So result becomes `0000 0001`. We then shift `n` right to become `0001 1010`.

If we repeat this process 8 times (for an 8-bit number), or 32 times (for a 32-bit number like in the problem), result will be the binary number formed by reversing the bits of n.

## Optimization

If this function is called many times, way to optimize it is to cache the results for each byte (8 bits) instead of each bit. This would divide the computation time by 8.
