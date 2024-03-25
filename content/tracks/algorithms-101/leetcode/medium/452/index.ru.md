---
title: 452. Minimum Number of Arrows to Burst Balloons
seoTitle: LeetCode 452. Minimum Number of Arrows to Burst Balloons | Python solution and explanation
description: 452. Minimum Number of Arrows to Burst Balloons
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-03-18
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 452
---

[LeetCode problem 452](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)

Consider sorting the balloons based on their ending coordinates and focus on how the end of one balloon overlaps with the start of another.

The key to solving this problem is to realize that the fewer arrows we need, the more balloons we need to overlap with each arrow. By sorting the balloons by their end points, we ensure that we are always considering the next balloon that finishes earliest. This approach minimizes the number of arrows by maximizing the overlap between balloons.

## Approach

1. Sort the balloons by their ending coordinates.
1. Initialize an arrow_count to 1 and record the end of the first balloon as the end of the current arrow's range.
1. Iterate through the sorted balloons. For each balloon:
   - If the balloon starts after the current arrow's end, it means a new arrow is needed. Increment arrow_count and update end to the current balloon's end.
   - If the balloon is within the range of the current arrow (start ≤ end), continue, as the current arrow can burst this balloon as well.
4. Return the arrow_count.

```python
class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        if not points:
            return 0

        points.sort(key=lambda x: x[1])  # Sort the balloons by their end points

        arrow_count = 1
        arrow_end = points[0][1]

        for x_start, x_end in points:
            # If the current balloon starts after the end of the arrow's range,
            # need another arrow.
            if x_start > arrow_end:
                arrow_count += 1
                arrow_end = x_end

        return arrow_count
```

```python
class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        res = 0
        last = -inf
        for a, b in sorted(points, key=lambda x: x[1]):
            if a > last:
                res += 1
                last = b
        return res
```
