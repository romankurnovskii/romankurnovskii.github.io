---
title: 130. Surrounded Regions
seoTitle: 130. Surrounded Regions | Python solution and explanation
description: 130. Surrounded Regions
toc: true
authors:
tags: 
categories:
series:
date: 2023-04-21
featuredImage:
weight: 130
---

[LeetCode problem](https://leetcode.com/problems/surrounded-regions/description/)

**Naive Solution:**

A naive solution would be to iterate through each cell in the grid, and for each `O`, check if it is surrounded by `X`'s in all four directions (up, down, left, and right). If so, flip it to `X`. However, this method has a high time complexity and does not take advantage of any properties of the problem.

**Approach:**
The more efficient solution is to perform a [**Depth-First Search (DFS)**](https://romankurnovskii.com/en/tracks/algorithms-101/algorithms/#depth-first-search-dfs) starting from the border `O`'s.

DFS is a way to explore a graph or tree by visiting as deep as possible in a single path before backtracking.

**Logic:**

1. In this problem, we will mark the border `O`'s and all their adjacent `O`'s as not to be flipped to `X`. Will temporary change these cells with `O!`.
   1. This means that if (later) cell is marked as `O!` then we will change it back to `O`. All other cells should be `X`.
   2. Loop through borders.
      1. If `O` is in cell then *check* its neighbors (dfs).
         1. Border cell mark to `O!`
2. Then, we can iterate through the entire grid, flipping any `O`'s that are not marked as not to be flipped.

```python
class Solution:
    def dfs(self, board, row, col):
        # If the current cell is out of bounds or not an 'O', return and stop DFS
        if (
            row < 0
            or col < 0
            or row >= len(board)
            or col >= len(board[0])
            or board[row][col] != "O"  # X or O!
        ):
            return

        # Mark the current cell as 'O!' (Don't flip)
        board[row][col] = "O!"

        # Define the possible directions to move (up, down, left, right)
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]

        # Explore each direction recursively by calling the DFS function
        for dr, dc in directions:
            self.dfs(board, row + dr, col + dc)

    def solve(self, board):
        m = len(board)
        n = len(board[0])

        # Iterate through the border cells
        # rows
        for row in range(m):
            for col in [0, n - 1]:  # left border coll, right border coll
                # If a border cell contains 'O', perform DFS on that cell
                if board[row][col] == "O":
                    self.dfs(board, row, col)
        # cells
        for col in range(n):
            for row in [0, m - 1]:  # upper border row, bottom border row
                if board[row][col] == "O":
                    self.dfs(board, row, col)

        # Iterate through the entire grid
        for row in range(m):
            for col in range(n):
                if board[row][col] == "O!":
                    board[row][col] = "O"
                else:
                    board[row][col] = "X"

        return board
```

![test-case](../../assets/130.jpg)
