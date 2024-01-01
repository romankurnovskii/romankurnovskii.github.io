---
title: 1984. Minimum Difference Between Highest and Lowest of K Scores
seoTitle: LeetCode 1984. Minimum Difference Between Highest and Lowest of K Scores | Python solution and explanation
description: 1984. Minimum Difference Between Highest and Lowest of K Scores
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1984
---

[LeetCode problem 1984](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/)

```python
class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int:
        nums.sort()
        return min(nums[i + k - 1] - nums[i] for i in range(len(nums) - k + 1))

```
