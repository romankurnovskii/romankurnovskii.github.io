---
title: 11. Container With Most Water
seoTitle: LeetCode 11. Container With Most Water | Python Solution and Explanation
description: Finding the container that can hold the most water based on given heights.
toc: true
categories: [Algorithms, Medium, LeetCodeTop75]
tags: [Array, "Two Pointers", Greedy, "LeetCode Top Interview"]
series:
date: 2022-11-03
lastMod: 2023-08-07
featuredImage:
authors: []
weight: 11
---


[LeetCode problem 11](https://leetcode.com/problems/container-with-most-water/)

## Problem Statement

The problem involves an array of integers `height`, where each element represents the height of a line. These lines, along with the x-axis, form a series of containers. Your goal is to find the two lines that form the container with the greatest area.

## Naive Solution

The naive solution is to consider all pairs of lines and calculate the area of water each pair can contain. You would keep track of the maximum area encountered. This solution would take O(n^2) time, which is not efficient.

## Hints & Tips

The height of the water in any container is limited by the shorter of the two lines forming the container. Moreover, farther the lines, more will be the width of the container and thus, more will be the water it can contain.

## Approach

We can achieve a more efficient solution by using the two-pointer technique.

1. Start with two pointers, one at the start and one at the end of the array.
2. The initial container therefore includes the entire array, and has a certain amount of water.
3. Then, moving the pointers inward, you measure the container at each step, always choosing the pointer at the shorter line to move.

This is based on the rationale that moving the pointer at the taller line would not affect the container's height but reduce its width.

## Steps

1. Initialize left and right pointers at the start and end of the array.
2. Calculate the initial area and set it as the maximum area.
3. While the left pointer is less than the right pointer:
   - If the height at the left pointer is less than or equal to the height at the right pointer, increment the left pointer.
   - Otherwise, decrement the right pointer.
   - Calculate the area each time the pointers are moved, and update the maximum area if the current area is greater.

**Why it is important to find the minimum height of pointer?:**

The area of the container is determined by the shorter line and the distance between the two lines. Therefore, if we move the pointer at the taller line inward, we might get a taller height but the width between the two lines, and therefore the possible area, is guaranteed to decrease.

So the overall area is most likely going to decrease or stay the same. Because of this, we decide to move the pointer at the shorter line, in the hopes that we will find a taller line that will increase the area.

For example, consider an array `[1,8,6,2,5,4,8,3,7]`. When the left pointer is at the first position (height 1) and the right pointer is at the second last position (height 3), if we move the right pointer, we may come across a taller line (7) but since the left line (height 1) is still shorter, the possible area is still going to be less due to reduced width.

However, if we move the left pointer, we may come across a taller line (8) and this could increase the possible area.

So, the condition `if height[left] <= height[right]` is there to always move the pointer at the shorter line.

## Solution

```python
def maxArea(height):
    left = 0
    right = len(height) - 1
    max_area = 0

    while left < right:
        min_height = min(height[left], height[right])
        area =  min_height * (right - left)

        max_area = max(max_area, area)

        if height[left] <= height[right]:
            left += 1
        else:
            right -= 1

    return max_area
```
