---
title: 70. Climbing Stairs
description: LeetCode 70. Climbing Stairs
toc: false
authors: [roman-kurnovskii]
tags: [Math, "Dynamic Programming", Memoization]
categories: [Algorithms, Easy]
series:
date: 2022-10-29
featuredImage:
weight: 90
---

[LeetCode problem](https://leetcode.com/problems/climbing-stairs/)

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

**Example 1:**

    Input: n = 2
    Output: 2
    Explanation: There are two ways to climb to the top.
    1. 1 step + 1 step
    2. 2 steps

**Example 2:**

    Input: n = 3
    Output: 3
    Explanation: There are three ways to climb to the top.
    1. 1 step + 1 step + 1 step
    2. 1 step + 2 steps
    3. 2 steps + 1 step

## First accepted

**Idea:**

Tried to calculate by hand. There is a [sequence Fibonacci](https://www.mathsisfun.com/numbers/fibonacci-sequence.html) here

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1:
            return 1
        if n == 2:
            return 2
        
        prev1 = 1
        prev2 = 2
        current = 2
        while n > 2:
            current = prev1 + prev2
            prev1 = prev2
            prev2 = current
            n -= 1
        return current
```