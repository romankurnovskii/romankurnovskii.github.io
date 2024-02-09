---
title: 1768. Merge Strings Alternately
seoTitle: LeetCode 1768. Merge Strings Alternately | Python solution and explanation
description: Merging strings alternately
toc: true
tags: [Algorithms, Easy]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-12-01
lastMod: 2023-12-01
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1768
draft: true
---

[LeetCode problem 1768. Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately)

## Problem Statement

- **Goal**: Merge two strings, `word1` and `word2`, by alternating their letters.
- **Method**: Start with `word1`, then `word2`, and keep alternating.
- **Extra Letters**: Append remaining letters of the longer string at the end.
- **Example**: For `word1 = "abc"` and `word2 = "pqr"`, the merged string should be `"apbqcr"`.

## Hint

Use two pointers to loop through both strings simultaneously, adding one letter from each at a time.

## Approach

1. **Create a Result List**: To store merged letters.
2. **Two Pointers**: `i` for `word1`, `j` for `word2`.
3. **Loop for Alternating Merge**: Add letters from both strings turn by turn.
4. **Handle Extra Letters**: If one string is longer, append its remaining letters.

## Solution

```python
def mergeAlternately(word1, word2):
    result = []
    i, j = 0, 0

    # Merge letters alternately
    while i < len(word1) and j < len(word2):
        result.append(word1[i])
        result.append(word2[j])
        i += 1
        j += 1

    # Append remaining characters from word1
    while i < len(word1):
        result.append(word1[i])
        i += 1

    # Append remaining characters from word2
    while j < len(word2):
        result.append(word2[j])
        j += 1

    return ''.join(result)
```

## Explanation

- **Loop Through Strings:** Alternate adding characters from word1 and word2.
- **Appending Remaining Characters:** Add the rest of the characters from the longer string.
- **Joining Characters:** Convert the character list to a string for the final result.
