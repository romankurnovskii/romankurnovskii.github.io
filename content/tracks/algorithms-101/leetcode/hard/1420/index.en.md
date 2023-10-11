---
title: 1420. Build Array Where You Can Find The Maximum Exactly K Comparisons
seoTitle: LeetCode 1420. Build Array Where You Can Find The Maximum Exactly K Comparisons | Python solution and explanation
description: Detailed analysis and explanation of the 1420. Build Array Where You Can Find The Maximum Exactly K Comparisons problem from LeetCode.
toc: true
tags: [LeetCode, Dynamic Programming]
categories: [Algorithms, Hard]
date: 2023-09-21
lastMod: 2023-09-21
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1420
---

[LeetCode Problem 1420](<https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/>)

## Problem Statement

In this problem, we have three integers, `n`, `m`, and `k`. We need to construct an array `arr` having the following properties:

1. It consists of exactly `n` integers.
2. Each integer in the array is between `1` and `m` inclusive.
3. After executing a certain algorithm on `arr`, we get a value known as `search_cost`. Our goal is to ensure `search_cost` is equal to `k`.

The main challenge is determining how many ways we can construct such an array `arr`.

## Naive Solution

A naive approach might involve generating all possible array combinations, then determining which ones fulfill our criteria. This method, however, would be inefficient due to its exponential time complexity. Given the constraints, this naive method won't be feasible.

## Hints & Tips

- Utilize dynamic programming to avoid recalculating overlapping subproblems.
- Keeping track of the maximum value encountered so far can help narrow down the possible outcomes.

## Approach / Idea

To tackle this problem efficiently, we use dynamic programming. The main idea is to maintain a three-dimensional `dp` array, which keeps track of:

1. Current length of the array we're constructing (`i`).
2. The maximum value used so far (`max_so_far`).
3. Remaining comparisons (`remain`).

With this DP table, we can progressively compute how many ways we can construct an array of length `i` while meeting our conditions.

## Steps / High-Level Algorithm

1. **Initialize the DP Array**:
   Create a three-dimensional `dp` array filled with zeros.

2. **Base Case**:
   When the array length equals `n`, the possible values for `max_so_far` are already decided, hence set `dp[n][max_so_far][0]` to `1`.

3. **Fill the DP Table**:
   - Iterate backwards, starting from the end towards the beginning.
   - For each `i`, determine the number of ways we can construct an array of that length based on `max_so_far` and `remain`.

   Note: This is where the majority of the dynamic programming logic comes into play.

4. **Calculate the Result**:
   Once the DP table is complete, `dp[0][0][k]` contains the number of ways we can construct the array.

## Solution

Here's the python code:

```python
class Solution:
    def numOfArrays(self, n: int, m: int, k: int) -> int:    
        dp = [[[0] * (k + 1) for _ in range(m + 1)] for __ in range(n + 1)]
        MOD = 10 ** 9 + 7

        for num in range(len(dp[0])):
            dp[n][num][0] = 1

        for i in range(n - 1, -1, -1):
            for max_so_far in range(m, -1, -1):
                for remain in range(k + 1):
                    ans = (max_so_far * dp[i + 1][max_so_far][remain]) % MOD
    
                    if remain > 0:
                        for num in range(max_so_far + 1, m + 1):
                            ans = (ans + dp[i + 1][num][remain - 1]) % MOD
                        
                    dp[i][max_so_far][remain] = ans

        return dp[0][0][k]
```
