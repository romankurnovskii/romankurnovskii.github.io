---
title: 48. Rotate Image
description: LeetCode 48. Rotate Image
toc: true
authors: []
tags: [Array, Math, Matrix]
categories: [Algorithms, Medium]
series:
date: 2022-12-18
featuredImage:
weight: 48
---

[LeetCode problem 48](https://leetcode.com/problems/rotate-image/)

You are given an `n x n` 2D `matrix` representing an image, rotate the image by **90 degrees** (clockwise).

You have to rotate the image **in-place**, which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

**Example 1:**

![Example LeetCode 48. Rotate Image](https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg)

    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [[7,4,1],[8,5,2],[9,6,3]]

**Example 2:**

![Example LeetCode 48. Rotate Image](https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg)

    Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
    Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

## Idea

```python
class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        l = 0
        r = len(matrix) - 1

        while l < r:
            for i in range(r-l):  # for not only "corners"
                t = l
                b = r
                top_left = matrix[t][l + i]
                matrix[t][l + i] = matrix[b - i][l]  # top left=bottom left
                matrix[b - i][l] = matrix[b][r - i]  # bottom left=bottom right
                matrix[b][r - i] = matrix[t+i][r]  # bottom right=top right
                matrix[t + i][r] = top_left         # top right=top left

            l += 1
            r -= 1
```

## Approach 2: Reverse

```python
class Solution:
  def rotate(self, matrix: List[List[int]]) -> None:
    matrix.reverse()

    for i in range(len(matrix)):
      for j in range(i + 1, len(matrix)):
        matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
```

## Resources

- <https://www.youtube.com/watch?v=fMSJSS7eO1w>
- <https://walkccc.me/LeetCode/problems/0048/>
