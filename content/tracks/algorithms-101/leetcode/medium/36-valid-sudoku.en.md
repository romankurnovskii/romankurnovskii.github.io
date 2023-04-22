---
title: 36. Valid Sudoku
description: LeetCode 36. Valid Sudoku
toc: false
authors: [roman-kurnovskii]
tags: [Array, "Hash Table", Matrix]
categories: [Algorithms, Medium]
series:
date: 2022-12-03
featuredImage:
weight: 250
---

[LeetCode problem](https://leetcode.com/problems/valid-sudoku/)

Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits `1-9` without repetition.
Each column must contain the digits `1-9` without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits `1-9` without repetition.

**Note:**

- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.

**Example 1:**

![example](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)

    Input: board = 
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
    Output: true

**Example 2:**

    Input: board = 
    [["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
    Output: false
    Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

## Code

**Idea:**

![test-case](../../assets/36.jpg)

```python
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        exist = set()
        for i in range(9):
            for j in range(9):
                x = board[i][j]
                if x != '.':
                    uniqs = ( 
                        (i, x),
                        (x, j),
                        (int(i/3), int(j/3), x) ) # devide 3 because of third check in 3x3 block
                    for z in uniqs:
                        if z in exist:
                            return False
                        exist.add(z)
        return True
```
