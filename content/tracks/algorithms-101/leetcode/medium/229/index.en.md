---
title: 229. Majority Element II
seoTitle: LeetCode 229. Majority Element II | Python solution and explanation
description: A detailed explanation and Python solution for LeetCode problem 229. Majority Element II.
toc: true
tags: [LeetCode]
categories: [Algorithms,LeetCode, Medium]
date: 2023-10-05
lastMod: 2023-10-05
featuredImage: https://picsum.photos/700/241?grayscale
weight: 229
---

[LeetCode problem 229](<https://leetcode.com/problems/majority-element-ii/>)

## Problem Statement

Given an integer array of size `n`, find all elements that appear more than ⌊ n/3 ⌋ times.

## Naive Solution

The immediate solution would involve using a hashmap or dictionary to track the occurrence of each number in the array. After which, we can iterate over the dictionary to find numbers whose occurrences are greater than `n/3`.

## Hints & Tips

- There can be at most one or two majority elements which appear more than `n/3` times in the array.
- Employ the [Boyer-Moore Voting Algorithm](https://www.topcoder.com/thrive/articles/boyer-moore-majority-vote-algorithm).

## Approach / Idea

We can apply a variation of the Boyer-Moore Voting Algorithm. The fundamental insight behind this algorithm is that at each step, we can discard a certain portion of the elements and still have the same majority elements.

For this problem, we'll maintain two counters and two majority candidates. This is because there could be at most two majority elements.

## Steps / High level algorithm

1. Initialize two counters and two majority candidates.
2. Parse the array:
    1. If the current element matches either of the majority candidates, increase the respective counter.
    2. If both counters are zero, reset both majority candidates and counters.
    3. Otherwise, decrease both counters.
3. Reassess the majority candidates by verifying their counts.

## Solution

```python
def majorityElement(self, nums: List[int]) -> List[int]:
    cand1 = 0  # Two majority candidates and their counters
    cand2 = 1
    count1 = 0
    count2 = 0
    
    for num in nums:
        if num == cand1:
            count1 += 1
        elif num == cand2:
            count2 += 1
        elif count1 == 0:
            cand1, count1 = num, 1
        elif count2 == 0:
            cand2, count2 = num, 1
        else:
            count1, count2 = count1 - 1, count2 - 1

    res = []
    count = len(nums) // 3
    for cand in (cand1, cand2):
        if nums.count(cand) > count:
            res.append(cand)

    return res
```
