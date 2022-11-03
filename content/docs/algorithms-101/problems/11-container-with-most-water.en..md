---
title: 11. Container With Most Water
description: LeetCode 11. Container With Most Water
toc: false
authors: [roman-kurnovskii]
tags: []
categories: [Algorithms]
series:
date: 2022-11-03
featuredImage:
weight: 260
---

[LeetCode problem](https://leetcode.com/problems/container-with-most-water/)

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the **maximum amount of water** a container can store.

Notice that you may not slant the container.

![LeetCode 11](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg)

**Example 1:**

    Input: height = [1,8,6,2,5,4,8,3,7]
    Output: 49
    Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

**Example 2:**

    Input: height = [1,1]
    Output: 1


## First accepted

**Idea:**

Two Pointer

1. Max water area is limited by the height of the **shorter** line
2. Get most left pointer and most right
3. Loop until left==right

```python
class Solution:
    def maxArea(self, height: List[int]) -> int:
        p1 = 0
        p2 = len(height) - 1

        max_water = 0
        while p1 < p2:
            area = (p2 - p1) * min(height[p1], height[p2])
            max_water = max(area, max_water)

            if height[p1] <= height[p2]:
                p1 += 1
            else:
                p2 -= 1
        return max_water
    
```
