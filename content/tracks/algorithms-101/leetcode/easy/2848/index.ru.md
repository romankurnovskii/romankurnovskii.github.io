---
title: 2848. Points That Intersect With Cars
seoTitle: LeetCode 2848. Points That Intersect With Cars | Python solution and explanation
description: Solving and understanding the problem of calculating the total points intersected by cars parked on a number line using a set-based approach.
toc: true
tags: [Algorithms, Easy,     LeetCode]
date: 2023-09-10
lastMod: 2023-09-10
featuredImage: https://picsum.photos/700/241?grayscale
weight: 2848
---


[LeetCode problem 2848](https://leetcode.com/problems/points-that-intersect-with-cars/)

## Problem Statement

Given cars parked on a number line, represented by starting and ending coordinates, we aim to determine the number of points on this line that are covered by any part of these cars.

## Naive Solution

A basic approach is to simply iterate through each interval and for each interval, iterate through its range, adding each point to a list. Finally, we can return the length of this list to get the total points. However, this approach has a risk of counting points multiple times when two cars overlap.

## Hints & Tips

- Utilizing a set can prevent duplicate counting since sets do not allow duplicates.
- Iterating through each interval's range and adding it to the set will ensure unique counting.

## Approach

The idea is to use a set to hold all the integer points that the cars cover. We iterate through each car's interval, and for each interval, we iterate through its range, adding each point to the set. As sets do not allow duplicate values, points that are covered by multiple cars are not double-counted. Finally, we return the size of the set which gives the total unique points covered by the cars.

## Steps

1. Initialize an empty set `points`.
2. Iterate through each interval in `nums`.
3. For each interval, iterate through its range from start to end, adding each point to the `points` set.
4. Return the size of the `points` set.

## Solution

```python
def numberOfPoints(nums: List[List[int]]) -> int:
    points = set()
    for start, end in nums:
        for p in range(start, end + 1):
            points.add(p)
            
    return len(points)
```
