---
title: 735. Asteroid Collision
seoTitle: LeetCode 735. Asteroid Collision | Python solution and explanation
description: A detailed guide to understanding and solving the "Asteroid Collision" problem from LeetCode.
toc: true
tags: [Array, Stack, Medium]
categories: [Algorithms, Medium, LeetCodeTop75]
date: 2023-08-24
lastMod: 2023-08-24
featuredImage: https://picsum.photos/700/241?grayscale
weight: 735
---

[LeetCode problem](<https://leetcode.com/problems/asteroid-collision/>)

## Problem Statement

Imagine a row of asteroids moving in space. Each asteroid has a size (given by its absolute value) and a direction it's moving in (given by its sign: positive for right, negative for left). All asteroids move at the same speed. Your task is to determine the final state of the asteroids after all collisions have been resolved.

Two important points to note:

1. When two asteroids of different directions meet, the smaller one explodes. If they are of the same size, both explode.
2. Two asteroids moving in the same direction will never meet and thus, never explode each other.

## Naive Solution

One straightforward approach would be to iterate through the array repeatedly. During each iteration, whenever you find two consecutive asteroids moving towards each other (i.e., a positive value followed by a negative value), remove the smaller one (or both if they are of the same size). Keep iterating until no such pairs are found. However, this approach can be very inefficient, especially for larger arrays.

## Hints & Tips

To solve this problem more efficiently, consider using a data structure that allows us to easily handle the asteroids in the order they are encountered, but can also backtrack when necessary. This hints at using a stack.

## Approach

Use a stack to simulate the asteroid collisions:

1. Traverse the list of asteroids.
2. If the asteroid is moving right (positive value), push it onto the stack.
3. If the asteroid is moving left (negative value), then:
   - While the top of the stack is positive and less than the absolute value of the current asteroid, pop elements from the stack (indicating that the asteroids have collided and exploded).
   - If the stack is empty or the top is negative, push the current asteroid onto the stack.
   - If the top of the stack is a positive number greater than the absolute value of the current asteroid, just ignore the current asteroid (it has exploded).
   - If the top of the stack has the same value as the absolute value of the current asteroid, pop the top (both asteroids have exploded).

## Steps

1. Initialize an empty stack.
2. Traverse the asteroid array.
3. For each asteroid:
   - If it's positive, push it onto the stack.
   - If it's negative:
     1. While the stack isn't empty and the top of the stack is positive and less than the absolute value of the current asteroid, pop the stack.
     2. If the stack is empty or the top is negative, push the current asteroid.
     3. If the top of the stack is positive and has the same value as the absolute value of the current asteroid, pop the stack and continue.

## Solution

```python
def asteroidCollision(asteroids):
    stack = []
    for asteroid in asteroids:
        if asteroid > 0:
            stack.append(asteroid)
        else:
            while stack and stack[-1] > 0 and stack[-1] < -asteroid:
                stack.pop()
            if not stack or stack[-1] < 0:
                stack.append(asteroid)
            elif stack[-1] == -asteroid:
                stack.pop()
    return stack
```
