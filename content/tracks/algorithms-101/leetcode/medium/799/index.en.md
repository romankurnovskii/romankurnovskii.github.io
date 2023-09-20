---
title: 799. Champagne Tower
seoTitle: LeetCode 799. Champagne Tower | Python Solution and Explanation
description: Understanding and solving the 799. Champagne Tower problem using Dynamic Programming.
toc: true
tags: [LeetCode, Dynamic Programming]
categories: [Algorithms, LeetCode, Medium]
date: 2023-09-23
lastMod: 2023-09-23
featuredImage: https://picsum.photos/700/241?grayscale
weight: 799
---

[LeetCode problem 799](https://leetcode.com/problems/champagne-tower/)

## Problem Statement

You are tasked with modeling a champagne tower. Glasses are stacked in a pyramid, with each row having one more glass than the previous. When champagne is poured into the top glass and it overflows, the overflowed champagne is split equally between the two glasses below. The objective is to determine how full a specified glass will be after pouring a given amount of champagne.

## Naive Solution

One could imagine a simulation, where we pour champagne into the top glass and then, glass-by-glass, simulate the overflow until we reach the desired glass. This approach, though conceptually simple, is computationally expensive and will not scale efficiently.

## Hints & Tips

Utilizing a Dynamic Programming approach allows for efficient computation. The key realization is that each glass only receives overflow from the glass directly above and the glass above and to the left. Therefore, by working row-by-row, we can calculate the overflow for each glass efficiently.

## Approach

We use a 2D array to represent the tower. Each element of this array will store the amount of champagne in the corresponding glass. We then simulate pouring the champagne, updating the array elements according to the overflow rules.

## Steps

1. **Initialize the Tower**: Create a 2D array representing the glasses. Pour the given amount into the top glass.
2. **Simulate the Pour**: For each glass, calculate how much overflows, and distribute this overflow to the glasses below.
3. **Return the Result**: After completing the simulation, return the amount in the specified glass. If it's more than 1 (the capacity of a glass), return 1.

## Solution

```python
def champagneTower(poured, query_row, query_glass):
    tower = [[0] * k for k in range(1, 102)]
    tower[0][0] = poured
    
    for r in range(query_row + 1):
        for c in range(r + 1):
            q = (tower[r][c] - 1.0) / 2.0
            if q > 0:
                tower[r + 1][c] += q
                tower[r + 1][c + 1] += q
    
    return min(1, tower[query_row][query_glass])
```
