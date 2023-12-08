---
title: 1431. Kids With the Greatest Number of Candies
seoTitle: LeetCode 1431. Kids With the Greatest Number of Candies | Python solution and explanation
description: Finding kids with the potential to have the greatest number of candies
toc: true
tags: [Algorithms, Easy]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-12-04
lastMod: 2023-12-04
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1431
---

[LeetCode problem 1431. Kids With the Greatest Number of Candies](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies)
### Problem Statement

Imagine you're in a classroom with a bunch of kids, and each kid has a certain number of candies. You, being super generous, have some extra candies to give away. Now, you're wondering, if you give all these extra candies to one kid at a time, will that kid end up having the most candies in the class? And you want to check this for every kid in the class.

### Hint

To figure this out, first, find out who currently has the most candies in the class. Then, add the extra candies to each kid's current candies and see if that total is at least as much as the most-candies kid.

### Approach

Let's make it more relatable:

1. **Find the Kid with Most Candies Now:** Imagine you're counting how many candies each kid has. The kid with the most candies sets the record for everyone to beat.

2. **Give Extra Candies to Each Kid:** Now, you give your extra candies to each kid, one by one, and see if their new total beats or matches the record.

3. **Create a List of True or False:** For each kid, if their total candies with the extra ones are as many or more than the record, write down `True`; otherwise, write down `False`.

## Solution


```python
def kidsWithCandies(candies, extra_candies):
    max_candies = max(candies)
    result = []

    for candy in candies:
        result.append(candy + extra_candies >= max_candies)

    return result
```

In the `kidsWithCandies` method, we first find the maximum number of candies any kid has. We then use list comprehension to create the result list.

This problem shows how a problem that seems to require nested loops can be solved efficiently with a single pass over the array by making use of Python's built-in functions and list comprehension. It's a good practice problem for beginners to understand the concepts of array manipulation and using built-in functions.
