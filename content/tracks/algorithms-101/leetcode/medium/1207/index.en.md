---
title: 1207. Unique Number of Occurrences
seoTitle: LeetCode 1207. Unique Number of Occurrences | Python solution and explanation
description: 1207. Unique Number of Occurrences
toc: true
tags: []
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-08-22
lastmod: 2023-08-22
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1207
---

[LeetCode problem](<https://leetcode.com/problems/unique-number-of-occurrences/>)

## Problem Statement

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

## Naive Solution

A naive approach would be to create a dictionary to store the count of each integer, then iterate over the dictionary and compare each count with the counts of other integers. This approach requires O(n^2) time complexity, where n is the length of the array. This is not efficient for large input sizes.

## Hints & Tips

To solve this problem efficiently, we can use Python's built-in Counter class from the collections module. A Counter is a dictionary subclass for counting hashable objects. It's a collection where elements are stored as dictionary keys, and their counts are stored as dictionary values.

## Approach

1. Create a Counter object from the input array.
2. Convert the Counter object to a dictionary.
3. Convert the dictionary values to a set.
4. Compare the size of the set with the size of the dictionary. If they are equal, return true. Otherwise, return false.

## Steps

1. Import the Counter class from the collections module.
2. Create a Counter object from the input array `arr`.
3. Convert the Counter object to a dictionary `dict_counts`.
4. Convert the dictionary values to a set `unique_counts`.
5. Compare the size of the set with the size of the dictionary. If they are equal, return true. Otherwise, return false.

## Solution

```python
from collections import Counter

def uniqueOccurrences(arr):
    # Create a Counter object from the input array
    dict_counts = dict(Counter(arr)) # {1: 3, 2: 2, 3: 1}

    # Convert the dictionary values to a set
    unique_counts = set(dict_counts.values())

    # Compare the size of the set with the size of the dictionary
    return len(unique_counts) == len(dict_counts)
```

This function uses the Counter class to count the occurrences of each integer in the input array. It then converts the Counter object to a dictionary and the dictionary values to a set. Finally, it compares the size of the set with the size of the dictionary.

If they are equal, it returns true. Otherwise, it returns false.
