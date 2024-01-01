---
title: 2389. Longest Subsequence With Limited Sum
seoTitle: LeetCode 2389. Longest Subsequence With Limited Sum | Python solution and explanation
description: 2389. Longest Subsequence With Limited Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2389
---

[LeetCode problem 2389](https://leetcode.com/problems/longest-subsequence-with-limited-sum/)

```python
class Solution:
    def answerQueries(self, nums: List[int], queries: List[int]) -> List[int]:
        nums.sort()
        m = len(queries)
        res = [0] * m
        idx = sorted(range(m), key=lambda i: queries[i])
        s = j = 0
        for i in idx:
            while j < len(nums) and s + nums[j] <= queries[i]:
                s += nums[j]
                j += 1
            res[i] = j
        return res

```
