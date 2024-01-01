---
title: 202. Happy Number
seoTitle: 202. Happy Number | Python Solution and Explanation
description: Learn how to determine if a number is happy using Python.
toc: true
tags: [Algorithms, Python, LeetCode, Easy, Floyd Cycle Detection, Numbers]
categories: [Algorithms, Easy]
date: 2023-06-18
lastMod: 2023-07-28
featuredImage: https://picsum.photos/700/241?grayscale
series: [LeetCode Top Interview Questions]
weight: 202
---


[LeetCode problem](https://leetcode.com/problems/happy-number/)

## Problem Statement

In this problem, we are given a number `n`. We have to determine whether this number is a "happy" number or not. A happy number is a number defined by the following process:

1. Starting with any positive integer, replace the number by the sum of the squares of its digits.
2. Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
3. Those numbers for which this process ends in 1 are happy.

## Naive Solution

A naive solution would be to follow the process as stated in the problem description and use a data structure such as a set to check for repetitions indicating a cycle. If during the process, the number becomes 1, we can conclude that the number is happy. However, if we encounter a number that was already visited, it means we are stuck in a cycle, and the number is not happy.

1. We calculate the sum of squares of the digits of n in each iteration, and check if this sum is 1 or a number we've seen before.
2. If it's 1, we return true.
3. If it's a number we've seen before, we return false, as this means we're in an endless loop.

## Hints & Tips

However, continuously checking if a number was already visited can be costly in terms of time complexity. A more efficient way to detect cycles is to use the Floyd Cycle detection algorithm (also known as the ["Tortoise and the Hare" algorithm](https://www.youtube.com/watch?v=S5TcPmTl6ww)).

This algorithm allows us to detect a cycle in the sequence without having to store all previously seen numbers, making it more efficient in terms of space usage.

## Approach

Floyd Cycle detection algorithm works by moving two pointers at different speeds - a slow pointer (tortoise) and a fast pointer (hare). If there is a cycle, the fast pointer will eventually meet the slow pointer again.

## Steps

1. Initialize two pointers slow and fast as `n`.
2. Replace
   1. slow with the sum of the squares of its digits,
   2. and fast with the sum of squares of the next number in the sequence.
3. If fast becomes 1, return `True`. - `n` is a happy number.
4. If slow meets fast and the number is not 1, return `False`. - `n` is not a happy number as we have detected a cycle.

## Solution

```python
def isHappy(n):
    def get_next(num):  # get the next number in the sequence
        total_sum = 0
        while num > 0:
            # get the last digit of the number and the remaining part
            num, digit = divmod(num, 10)
            total_sum += digit ** 2
        return total_sum

    slow = n
    fast = get_next(n)

    visited = set()
    while fast != 1 and slow != fast:
        slow = get_next(slow)
        fast = get_next(get_next(fast))

        visited.add(slow)
        if fast in visited:
            break
    
    return fast == 1
```

In this solution, the function `get_next(n)` is used to get the next number in the sequence by replacing `n` with the sum of the squares of its digits.

We initialize `slow` and `fast` to `n` and `get_next(n)` respectively.

Then, until `fast` equals 1 or `slow` catches up to `fast`, we continue moving `slow` one step at a time and `fast` two steps at a time. If `fast` equals 1 at the end of the loop, `n` is a happy number.
