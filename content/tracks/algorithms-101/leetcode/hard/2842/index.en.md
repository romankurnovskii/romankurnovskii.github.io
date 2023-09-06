---
title: 2842. Count K-Subsequences of a String with Maximum Beauty
seoTitle: LeetCode 2842. Count K-Subsequences of a String with Maximum Beauty | Python solution and explanation
description: Count K-Subsequences of a String with Maximum Beauty
toc: true
tags: [Algorithms, Hard, Combinatorics, "LeetCode Contest 112"]
categories: [Algorithms, Hard, Combinatorics, LeetCode]
date: 2023-09-02
lastmod: 2023-09-02
featuredImage: https://picsum.photos/700/241?grayscale
weight: 2842
---

[LeetCode problem](https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty)

## Problem Statement

You are given a string `s` and an integer `k`. A k-subsequence is a subsequence of `s`, having length `k`, and all its characters are unique. The beauty of a k-subsequence is the sum of `f(c)` for every character `c` in the k-subsequence. Here, `f(c)` denotes the number of times the character `c` occurs in `s`.

The task is to find the number of k-subsequences whose beauty is maximum among all k-subsequences. Return the answer modulo $(10^9 + 7)$.

## Naive Solution

The naive solution would be to generate all possible k-subsequences of `s` and then calculate their beauty. However, this approach is computationally expensive and can take up a lot of time.

## Hints & Tips

- Using combinatorics can significantly speed up the solution.
- Keep track of character frequencies to quickly compute a k-subsequence's beauty.

## Approach

The approach for solving this problem efficiently relies on:

1. Using combinatorics to handle large inputs.
2. Utilizing a frequency count of each character in the string `s` for quick beauty calculation.

## Steps

### Step 1: Count Character Frequencies

First, use Python's Counter class to count the frequency of each character in the string `s`.

### Step 2: Handle Edge Cases

Check if there are enough unique characters in `s` to form a k-subsequence. If not, return 0.

### Step 3: Generate Combinations and Calculate Beauty

Use `itertools.combinations` to generate k-combinations of unique characters in `s`. For each combination, compute its beauty as the sum of `f(c)` for each character `c`.

### Step 4: Keep Track of Maximum Beauty and Count

Compare each combination's beauty with the maximum beauty so far. Update the maximum beauty and count the number of k-subsequences that achieve this beauty.

### Step 5: Return the Final Count

Return the total number of k-subsequences with maximum beauty, modulo $(10^9 + 7)$.

## Solution

```python
from collections import Counter
from itertools import combinations

MOD = 10**9 + 7

class Solution:
    def countKSubsequencesWithMaxBeauty(self, s: str, k: int) -> int:
        char_count = Counter(s)
        unique_chars = list(char_count.keys())
        
        if len(unique_chars) < k:
            return 0

        max_beauty = 0
        max_beauty_count = 0

        for char_comb in combinations(unique_chars, k):
            beauty = sum(char_count[c] for c in char_comb)
            
            if beauty > max_beauty:
                max_beauty = beauty
                max_beauty_count = 0
            
            if beauty == max_beauty:
                count = 1
                for c in char_comb:
                    count *= comb(char_count[c], 1)
                max_beauty_count += count
                max_beauty_count %= MOD

        return max_beauty_count % MOD
```
