---
title: 2849. Determine if a Cell Is Reachable at a Given Time
seoTitle: LeetCode 2849. | Determine if a Cell Is Reachable at a Given Time | Python solution and explanation
description: Understanding the concept and solving the problem of determining if a cell is reachable within a given time on a 2D grid.
toc: true
tags: [Algorithms, Medium, Grid, LeetCode]
date: 2023-09-10
lastMod: 2023-09-10
featuredImage: https://picsum.photos/700/241?grayscale
weight: 2849
---


[LeetCode problem 2849](https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time)

## Problem Statement

You are given starting coordinates `(sx, sy)` and final coordinates `(fx, fy)` on a 2D infinite grid. Starting from the initial position, you can move to any of the 8 adjacent cells in one second. The challenge is to determine if you can reach the final cell `(fx, fy)` in exactly `t` seconds.

## Naive Solution

A naive approach would be to use a recursive function to navigate the grid from the starting point `(sx, sy)` and attempt to reach the target `(fx, fy)` in `t` seconds. This approach will check every possible path, which can be very inefficient, especially for larger grids and values of `t`.

## Hints & Tips

- Understand that not all paths are equal. Moving diagonally is more efficient than moving in a straight line if both x and y distances are positive.
- Check the constraints. If you cannot reach the destination within the given time `t`, there's no need to try any further.

## Approach

The idea is to calculate the shortest possible time to reach the target and then compare it to the given time `t`. If the starting point and the ending point are the same, we can always return to the same position unless the time is exactly 1.

## Steps

1. Calculate the difference in x (`diff_x`) and y (`diff_y`) coordinates.
2. For the minimum of `diff_x` and `diff_y`, move diagonally. This reduces both x and y distances by 1 in a single step.
3. Move horizontally or vertically for the absolute difference between `diff_x` and `diff_y`.
4. If `(diff_x + diff_y)` is less than or equal to `t`, and `(t - (diff_x + diff_y))` is an even number or zero, return `True`, otherwise return `False`.

## Solution

```python
def isReachableAtTime(sx: int, sy: int, fx: int, fy: int, t: int) -> bool:
    diff_x = abs(fx - sx)           # Calculating the differences in x
    diff_y = abs(fy - sy)           # and y coordinates

    if diff_x == 0 and diff_y == 0: # If both starting and ending points are same
        return t != 1

    if diff_x <= t and diff_y <= t: # Check if we can reach the target within given time
        return True

    return False
```
