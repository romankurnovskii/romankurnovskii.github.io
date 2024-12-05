---
title: 605. Can Place Flowers
seoTitle: LeetCode 605. Can Place Flowers | Python solution and explanation
description: An easy yet interesting problem in which we must determine whether we can plant a certain number of flowers in a flowerbed without violating the no-adjacent-flowers rule.
toc: true
tags: [Algorithms, Easy]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-08-21
lastMod: 2023-08-31
featuredImage: https://picsum.photos/700/241?grayscale
weight: 605
---

[LeetCode problem 605](https://leetcode.com/problems/can-place-flowers/)

In this problem, we are given a flowerbed represented by an integer array `flowerbed`, where 0 represents an empty plot and 1 represents a plot with a flower.

We need to determine if we can plant `n` new flowers in the flowerbed without violating the rule that no two adjacent plots can have flowers.

## Naive Solution

To solve this problem, we can use a greedy approach. We iterate through the flowerbed and check each plot. If a plot is empty and its adjacent plots are also empty, we can plant a flower in that plot.

We repeat this process until we have planted all `n` flowers or we have checked all plots in the flowerbed.

## Approach

To solve this problem, we will define a helper function `check_neighbors` that checks if a plot can be planted with a flower and updates the flowerbed and `n` accordingly.

## Steps

1. Initialize a variable `i` to iterate through the flowerbed.
2. For each plot in the flowerbed:
   2.1. If the current plot is empty and its previous plot is also empty (i.e., `flowerbed[i-1] == 0`), call the `check_neighbors` function.
   2.2. Otherwise, if the current plot is empty and its next plot is also empty (i.e., `flowerbed[i+1] == 0`), call the `check_neighbors` function.
3. Return `True` if `n` is less than or equal to 0 (i.e., all flowers have been planted), otherwise return `False`.

### Solution

```python
def canPlaceFlowers(flowerbed, n):
    def check_neighbors(n):
        if i < len(flowerbed) - 1:
            if flowerbed[i+1] == 0:
                flowerbed[i] = 1
                n -= 1
        else:
            flowerbed[i] = 1
            n -= 1
        return n

    for i in range(len(flowerbed)):
        if flowerbed[i] == 0:
            if i > 0:
                if flowerbed[i-1] == 0:
                    n = check_neighbors(n)
            else:
                n = check_neighbors(n)
    return n <= 0
```
