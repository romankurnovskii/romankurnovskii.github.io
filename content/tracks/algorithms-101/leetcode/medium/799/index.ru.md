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

Utilizing a <mark>Dynamic Programming</mark> approach allows for efficient computation. The key realization is that each glass only receives overflow from the glass directly above and the glass above and to the left. Therefore, by working row-by-row, we can calculate the overflow for each glass efficiently.

## Approach

To solve this problem efficiently, we can use a bottom-up dynamic programming approach. Imagine you're looking at the champagne tower from the top. Each glass receives champagne from the one(s) above it. The relationship between glasses can be broken down as follows:

1. **Parent-Child Relationship**: Each glass has a direct influence on the two glasses directly below it (child glasses). If a glass has an excess amount of champagne, it distributes this excess equally to its two child glasses.

2. **Calculating Overflow**: For any glass (*starting from top*), if the amount of champagne in it exceeds its capacity (which is 1 unit), then the overflow is given by `(amount - 1) / 2`. This is because each glass can hold up to 1 unit of champagne, and any excess will be split equally between its two child glasses.

3. **Propagation**: We start our simulation from the top of the tower. After pouring the champagne into the top glass, we calculate its overflow and propagate this overflow to its child glasses. We continue this process row by row until we have processed the entire tower or until we have processed up to the row of our query. This propagation ensures that every glass in the tower has the correct amount of champagne accounting for all the overflow from the glasses above it.

4. **Efficiency**: By using a 2D array to simulate the tower and processing each glass only once, we can calculate the amount of champagne in the queried glass in an efficient manner. This avoids the need for complex simulations or recursive calculations.

## Steps

1. **Initialize the Tower**: Create a 2D array representing the glasses. Pour the given amount into the top glass: `[[poured], [0,0], [0,0,0], ...]`
2. **Simulate the Pour**: For each glass, calculate how much overflows, and distribute this overflow to the glasses below.
3. **Return the Result**: After completing the simulation, return the amount in the specified glass. If it's more than 1 (the capacity of a glass), return 1.

## Solution

```python
def champagneTower(poured, query_row, query_glass):
    tower = [[0] * k for k in range(1, query_row + 3)]  # query_row + 3 for children update
    tower[0][0] = poured
    
    for row in range(query_row + 1):
        for col in range(row + 1):
            overflow = (tower[row][col] - 1.0) / 2.0
            if overflow > 0:                            # update children
                tower[row + 1][col] += overflow
                tower[row + 1][col + 1] += overflow
    
    return min(1, tower[query_row][query_glass])
```

{{< video src="../../assets/799.mp4" title="LeetCode 799 Solution" >}}
