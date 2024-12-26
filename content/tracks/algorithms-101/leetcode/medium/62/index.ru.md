---
title: 62. Unique Paths
description: LeetCode 62. Unique Paths
seoTitle: LeetCode 62. Unique Paths | Python solution and explanation
toc: true
authors: []
tags: [Math, "Dynamic Programming", Combinatorics]
categories: [Algorithms, Medium]
series: [Math, "Dynamic Programming", Combinatorics]
date: 2023-01-09
featuredImage:
weight: 62
---

[LeetCode problem](https://leetcode.com/problems/unique-paths/)

There is a robot on an `m x n` grid. The robot is initially located at the top-left corner (i.e., `grid[0][0]`). The robot tries to move to the bottom-right corner (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to `2 * 10^9`.

**Example 1:**

![LeetCode 62. Unique Paths](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)

    Input: m = 3, n = 7
    Output: 28
**Example 2:**

    Input: m = 3, n = 2
    Output: 3
    Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
    1. Right -> Down -> Down
    2. Down -> Down -> Right
    3. Down -> Right -> Down

**Approach 1:**

[LeetCode Submission](https://leetcode.com/problems/unique-paths/submissions/874653332/)

```python
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        if m == 1 or n == 1:
            return 1
        matrix = [ [1 for j in range(n)] for i in range(m)]

        for i in range(1, m):
            for j in range(1, n):
                max_above = 0
                max_left = 1
                if i > 0:
                    max_above = matrix[i-1][j]
                if j > 0:
                    max_left = matrix[i][j-1]
                matrix[i][j] = max_above + max_left

        m = matrix[i][j]
        return m

class Solution:
  def uniquePaths(self, m: int, n: int) -> int:
    matrix = [[1] * n for _ in range(m)]

    for i in range(1, m):
      for j in range(1, n):
        matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]

    return matrix[-1][-1]
```
