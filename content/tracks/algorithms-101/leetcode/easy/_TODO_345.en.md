---
draft: true
title: 605. Can Place Flowers
seoTitle: LeetCode 605. Can Place Flowers | Python solution and explanation
description: An easy yet interesting problem in which we must determine whether we can plant a certain number of flowers in a flowerbed without violating the no-adjacent-flowers rule.
toc: true
tags: [Algorithms, Easy]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-08-1
lastmod: 2023-08-1
featuredImage: https://picsum.photos/700/241?grayscale
weight: 605
---

[LeetCode problem](https://leetcode.com/problems/can-place-flowers/)

## Problem Statement

In the "Can Place Flowers" problem, we have a long flowerbed in which some of the plots are planted with flowers (represented by 1's in an integer array), and some are not (represented by 0's). We must determine whether we can plant a certain number of new flowers (denoted as 'n') in the flowerbed without violating the no-adjacent-flowers rule, i.e., flowers cannot be planted in adjacent plots.

## Naive Solution

A simple approach to this problem would be to go through each plot in the flowerbed and try to plant a flower if the plot is empty and its neighboring plots are also empty. We keep doing this until we've planted all `n` flowers or there are no more suitable plots. If we can plant all `n` flowers, we return `true`; otherwise, we return `false`. However, this approach involves unnecessary computation for each plot and might not be efficient for large flowerbeds.

## Hints & Tips

The key to solving this problem efficiently is to realize that we don't need to consider all possible combinations. Instead, we should focus on finding the maximum number of flowers that can be planted in the given flowerbed, following the no-adjacent-flowers rule. Then we can simply compare this number with n to determine if it's possible to plant n new flowers.

## Approach

We will look for sequences of three consecutive empty plots (represented by `[0, 0, 0]`) in the flowerbed array. If we find such a sequence, we can plant a flower in the middle plot without violating the no-adjacent-flowers rule.

## Steps

1. We add `0` to both ends of the flowerbed array to simplify the logic for handling the edges of the array.
2. We initialize a count to `0` which will keep track of the maximum number of flowers that can be planted.
3. We iterate over each element of the padded flowerbed array.
4. For each element, we check if it and its next two neighbors form a `[0, 0, 0]` sequence. If so, we increment the count and update the middle element of the sequence to `1` to virtually plant a flower there.
5. Finally, we check if the count is greater than or equal to `n` to determine if it's possible to plant n new flowers.

## Solution

Here is the Python code implementing the above approach:

```python
class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        new_arr = [0] + flowerbed + [0]
        count = 0
        for i in range(len(new_arr)):
            if new_arr[i:i+3] == [0, 0, 0]:
                count += 1
                new_arr[i+1] = 1
        return count >= n
```

Another solution involves checking for valid spots directly within the original flowerbed array:

```python
content/tracks/algorithms-101/leetcode/easy/605.en.md
```

Both solutions effectively solve the problem but the second solution provides some optimization by reducing the extra space needed for the `new_arr`. It directly modifies the input `flowerbed` array.

