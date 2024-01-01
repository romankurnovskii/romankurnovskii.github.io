---
title: 2251. Number of Flowers in Full Bloom
seoTitle: LeetCode 2251. Number of Flowers in Full Bloom | Python solution and explanation
description: Understanding the number of flowers in full bloom at specific times using binary search.
toc: true
tags: [LeetCode, Binary Search]
categories: [Algorithms, Hard]
date: 2023-09-22
lastMod: 2023-09-22
featuredImage: https://picsum.photos/700/241?grayscale
weight: 2251
---

[LeetCode Problem 2251](<https://leetcode.com/problems/number-of-flowers-in-full-bloom/>)

## Problem Statement

In the given problem, we are presented with two arrays. The first, `flowers`, represents when each flower starts and stops being in full bloom. The second, `people`, indicates when each person arrives to see the flowers. Our task is to determine, for each person, how many flowers they will see in full bloom upon their arrival.

## Naive Solution

A straightforward approach might involve iterating over each person's arrival time. For each time, we could iterate over the `flowers` list to count how many flowers are in full bloom. This approach, however, would lead to a time complexity of O(n*m), with n being the number of people and m being the number of flowers. With larger constraints, this could be quite inefficient.

## Hints & Tips

- Separating the start and end times of each flower's blooming period can simplify the problem.
- Binary search can be an effective tool to efficiently find specific intervals in sorted lists.

## Approach / Idea

Instead of associating the start and end times of each flower's blooming period, we can consider them separately. By focusing on how many flowers have started and stopped blooming by a specific time, we can easily determine the number of flowers in full bloom.

The idea is to use two separate arrays: one for all the start times (`starts`) and one for all the end times (`ends`). By sorting these arrays, we can use binary search to swiftly identify the number of flowers that have started and stopped blooming by any given time.

## Steps / High level algorithm

1. **Create Two Arrays**:
   - Initialize two empty lists, `starts` and `ends`.

2. **Fill Arrays with Data**:
   - Loop through each flower's blooming period in `flowers` and populate the `starts` and `ends` lists.

3. **Sort the Arrays**:
   - Sort both `starts` and `ends` to ensure efficient binary searches.

4. **Determine Blooming Flowers**:
   - For each person's arrival time in `people`:
     - Use binary search on `starts` to determine how many flowers have begun blooming.
     - Use another binary search on `ends` to see how many have finished.
     - Subtract the number of finished blooms from the started ones and append to the results list.

5. **Return the Result**:
   - Return the generated list containing the number of flowers in full bloom for each person.

## Solution

Below is the Python code implementing the above-mentioned approach:

```python
from bisect import bisect_right
from typing import List

class Solution:
    def fullBloomFlowers(self, flowers: List[List[int]], people: List[int]) -> List[int]:
        starts = []    # Initialize start and end arrays
        ends = []

        for start, end in flowers:  # Populate arrays with flower bloom periods
            starts.append(start)
            ends.append(end + 1)

        starts.sort() # Sort both arrays for efficient binary search
        ends.sort()

        res = []

        for person in people:  # Calc number of flowers for each person's arrival time
            i = bisect_right(starts, person)    # Use binary search to find flowers
            j = bisect_right(ends, person)      # that have started and finished blooming
            res.append(i - j)

        return res
```
