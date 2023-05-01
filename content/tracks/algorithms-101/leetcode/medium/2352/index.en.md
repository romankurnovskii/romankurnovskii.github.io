---
title: 2352. Equal Row and Column Pairs
seoTitle: LeetCode 2352. Equal Row and Column Pairs | Python solution and explanation
description: 2352. Equal Row and Column Pairs
toc: true
tags: [Algorithms, Medium]
categories: [Algorithms, Medium, LeetCodeTop75]
date: 2023-08-24
lastmod: 2023-08-24
featuredImage: https://picsum.photos/700/241?grayscale
weight: 2352
---

[LeetCode problem](<https://leetcode.com/problems/equal-row-and-column-pairs/>)

## Problem Statement

You are given a square grid of integers, specifically a 0-indexed `n×n` matrix named `grid`. The objective is to determine how many pairs of rows and columns in the grid are identical in terms of their content and order.

To elucidate, if row $r_i$ and column $c_j$ have the same integers in the exact same sequence, they are considered an "equal" pair. The challenge is to count all such pairs in the given matrix.

## Naive Solution

A naive approach would be to compare each row with every column in the grid. This results in a $O(n^3)$ solution since for every row $O(n)$, you compare with each column $O(n)$, and for every comparison, you traverse the entire row or column $O(n)$. This method is inefficient for large matrices.

## Approach

Instead of comparing every row with every column directly, we can convert each row and column into a tuple and utilize a dictionary to keep a count of occurrences of each unique row. While iterating through the columns, we can directly reference our dictionary to see if the tuple representation of the column matches with any row.

**Why Tuples?**
Before we dive into the optimized approach, it's essential to understand the role of tuples here. We transform rows and columns into tuples because:

1. Tuples are immutable: their content cannot be altered after they're created.
2. They can be used as keys in dictionaries, unlike lists or sets. This property is pivotal for our solution.
3. Tuples maintain the order of elements, crucial for our problem's requirements.

## Steps

1. Convert each row to a tuple and count its occurrences using a dictionary.
2. Traverse each column, convert it to a tuple.
3. Check if the column tuple exists in our dictionary. If it does, increment the count by the occurrences of that tuple.

## Solution

```python
def equalPairs(self, grid: List[List[int]]) -> int:
    count = 0
    rows = {}

    # Store row tuples and their occurrence count
    for row in grid:
        row = tuple(row)
        rows[row]= 1 + rows.get(row, 0)
    
    # For each column, check if the column tuple exists in rows dictionary
    n = len(grid)
    for c in range(n):
        col = tuple(grid[r][c] for r in range(n))
        count += rows.get(col, 0)
        
    return count
```
