---
title: 1768. Merge Strings Alternately
seoTitle: LeetCode 1768. Merge Strings Alternately | Python solution and explanation
description: Merging strings alternately
toc: true
tags: [Algorithms, Easy]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-07-31
lastMod: 2023-12-01
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1768
---

[LeetCode problem](https://leetcode.com/problems/merge-strings-alternately)

## Problem Statement

The task is to merge two strings alternately, i.e., take one character from the first string, then one from the second, then again from the first, and so on. If one string finishes before the other, the remaining characters from the longer string are appended at the end.

## Naive Solution

A naive approach could involve maintaining two pointers, one for each string, and incrementally appending characters from each string to the result. Once we reach the end of one string, we append the rest of the other string to the result. However, this approach involves checking for the end of strings in each step which can be optimized.

## Efficient Solution

A more pythonic and efficient approach would be to use the built-in `zip` function. The `zip` function pairs the elements of two lists (or strings, in this case) until the shorter one ends. This allows us to alternately merge the two strings efficiently. After that, we append the remaining part of the longer string, if any.

## Steps

Here are the high-level steps of the algorithm:

1. Use the `zip` function to merge the two strings until one of them ends.
2. Append the remaining part of the longer string to the result.

## Solution

Here is a Python solution that implements the above algorithm:

```python
def mergeAlternately(word1, word2):
    i=0
    j=0

    res = ''
    while i<len(word1) and j<len(word2):
        res += word1[i]
        res += word2[j]
        i+=1
        j+=1

    for _i, word in [[i,word1], [j,word2]]:
        while _i<len(word):
            res += word[_i]
            _i+=1

    return res
```

```python
class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        res = [c1 + c2 for c1, c2 in zip(word1, word2)]
        return "".join(res) + word1[len(res):] + word2[len(res):]
```

In the `mergeAlternately` method, we use list comprehension and the zip function to merge the strings until one of them ends. We then append the remaining part of the longer string to the result. The join method is used to convert the list of characters into a string.
