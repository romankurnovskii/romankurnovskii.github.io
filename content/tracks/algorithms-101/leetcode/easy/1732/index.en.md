---
title: 1732. Find the Highest Altitude
seoTitle: LeetCode 1732. Find the Highest Altitude | Python solution and explanation
description: 1732. Find the Highest Altitude
toc: true
tags: []
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-08-21
lastmod: 2023-08-21
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1732
---

[LeetCode problem](<https://leetcode.com/problems/find-the-highest-altitude/>)

## Problem Statement

In this problem, we are given a biker who is going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal to 0.

We are also given an integer array `gain` of length `n` where `gain[i]` represents the net gain in altitude between points `i` and `i + 1` for all `0 <= i < n`. The net gain could be negative, indicating a decrease in altitude, or positive, indicating an increase in altitude.

Our task is to find and return the highest altitude that the biker can reach at any point during the road trip.

Here's an example to illustrate the problem:

Let's say we have the `gain` array `[-5, 1, 5, 0, -7]`.

- At point 0, the altitude is 0 (as mentioned in the problem statement).
- At point 1, the altitude is 0 - 5 = -5 (net gain is -5).
- At point 2, the altitude is -5 + 1 = -4 (net gain is 1).
- At point 3, the altitude is -4 + 5 = 1 (net gain is 5).
- At point 4, the altitude is 1 + 0 = 1 (net gain is 0).
- At point 5, the altitude is 1 - 7 = -6 (net gain is -7).

The highest altitude is 1 (at points 3 and 4). Therefore, the answer is 1.

## Naive Solution

A naive solution would be to iterate through the gain array and keep a running sum of the altitudes. Then, you can simply return the maximum altitude from the running sum.

However, this approach is inefficient as it requires `O(n)` time complexity and `O(n)` space complexity to store the running sum.

## Hints & Tips

Instead of storing the running sum in an array, we can use a single variable to keep track of the highest altitude. This way, we reduce the space complexity to `O(1)`.

## Approach

We will iterate through the gain array and update the current altitude by adding the net gain at each point. We will also keep track of the highest altitude encountered so far.

## Steps

1. Initialize two variables: current_altitude and max_altitude, both set to 0.
2. Loop through the gain array.
3. For each `gain[i]`, update the current_altitude by adding `gain[i]`.
4. Update max_altitude to be the maximum between max_altitude and current_altitude.
5. Return max_altitude after the loop.

## Solution

Here's the Python code for this approach:

```python
def largestAltitude(gain):
    current_altitude = 0
    max_altitude = 0
    
    for i in gain:
        current_altitude += i
        max_altitude = max(max_altitude, current_altitude)
    
    return max_altitude
```
