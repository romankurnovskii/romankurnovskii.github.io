---
title: 1048. Longest String Chain
seoTitle: LeetCode 1048. Longest String Chain | Python Solution and Explanation
description: Solving the 1048. Longest String Chain problem using Dynamic Programming.
toc: true
tags: [LeetCode, Dynamic Programming]
categories: [Algorithms,LeetCode, Medium]
date: 2023-09-22
lastMod: 2023-09-22
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1048
---

[LeetCode problem 1048](https://leetcode.com/problems/longest-string-chain/)

## Problem Statement

You are given an array of words where each word consists of lowercase English letters. Your task is to determine the longest string chain you can form given this list. A word A can be a predecessor of word B if by adding exactly one letter to A (at any position), B is formed. The objective is to find the longest sequence where each word is a predecessor of the next.

## Naive Solution

The straightforward brute-force way would be to try all possible combinations of word chains. Starting with each word, try to find its successor in the list and continue this until no more successors can be found. Remember the longest chain you can form. This solution, however, will be inefficient, especially with larger lists.

## Hints & Tips

A valuable hint for this problem is to consider sorting the words based on their lengths. This ensures that words of length `n` will only ever be predecessors to words of length `n + 1`.

## Approach

The efficient way to solve this problem is using Dynamic Programming. The core idea is to maintain a hashmap where the key is a word and the value is the maximum chain length with that word as the end. This hashmap will assist in building solutions for longer words based on the solutions of shorter ones.

## Steps

1. **Sort the Words**: First, sort the words by their lengths. This guarantees when processing a word, all potential predecessors have already been handled.
2. **Hashmap for Chain Length**: As each word is processed, inspect all its possible predecessors (by removing one character from the word). Use the hashmap to fetch the chain length of the predecessor and add one to it.
3. **Determine Maximum Chain Length**: As each word is processed, update the maximum chain length.

## Solution

```python
def longestStrChain(words):
    words.sort(key=len)

    dp = {} # remember the maximum chain length for each word
    max_chain = 0 

    for word in words:
        dp[word] = 1  # Every word's minimum chain length is 1

        for i in range(len(word)):  # For each word, explore all its potential predecessors
            prev_word = word[:i] + word[i+1:]

            if prev_word in dp:
                dp[word] = max(dp[word], dp[prev_word] + 1)

        max_chain = max(max_chain, dp[word])

    return max_chain
```
