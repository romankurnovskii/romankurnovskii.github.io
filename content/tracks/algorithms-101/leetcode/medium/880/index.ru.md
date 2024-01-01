---
title: 880. Decoded String at Index
seoTitle: LeetCode 880. Decoded String at Index | Python solution and explanation
description: Detailed explanation and Python solution for LeetCode problem 880. Decoded String at Index.
toc: true
tags: [LeetCode]
categories: [Algorithms, LeetCode, Medium]
date: 2023-09-15
lastMod: 2023-09-15
featuredImage: https://picsum.photos/700/241?grayscale
weight: 880
---

[LeetCode problem 880](<https://leetcode.com/problems/decoded-string-at-index/>)

## Problem Statement

Given an encoded string `s`, the encoded string is transformed into a tape based on the following criteria:

1. When a letter is encountered, it's written on the tape.
2. When a digit `d` is encountered, the current content of the tape is repeated `d - 1` more times.

You are required to find and return the kth letter (1-indexed) on the decoded tape.

## Naive Solution

A straightforward solution would involve constructing the entire decoded tape and then simply accessing the kth character. However, this is impractical given the constraints, as the size of the decoded string can become extremely large.

## Hints & Tips

- We can work backward from the desired index k.
- It is possible to determine the sequence of characters without decoding the entire string.

## Approach

Instead of trying to build the entire string, which might be vast, we can work in reverse. Given an index `k`, we can backtrack through the original encoded string to determine which character would be at that position in the decoded string.

## Steps

1. Iterate over the encoded string to determine the length of the decoded string.
2. Work backward:
    1. If the current character is a digit, reduce the size of the decoded string by dividing it by the digit and also adjust the k value.
    2. If the current character is a letter, reduce the size of the decoded string by 1. If k is equal to the size of the decoded string or k is 0, return the current character.

## Solution

```python
def decodeAtIndex(self, s: str, k: int) -> str:
    size = 0                        # Calculate the length of the decoded string
    for ch in s:
        if ch.isdigit():
            size *= int(ch)
        else:
            size += 1
    for ch in reversed(s):          # Work backward through the encoded string
        k %= size
        if k == 0 and ch.isalpha():
            return ch
        if ch.isdigit():            # Adjust the size based on the current character
            size /= int(ch)
        else:
            size -= 1
```
