---
title: 2261. K Divisible Elements Subarrays
seoTitle: LeetCode 2261. K Divisible Elements Subarrays | Python solution and explanation
description: 2261. K Divisible Elements Subarrays
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2261
---

[LeetCode problem 2261](https://leetcode.com/problems/k-divisible-elements-subarrays/)

```python
class Solution:
    def countDistinct(self, nums: List[int], k: int, p: int) -> int:
        n = len(nums)
        s = set()
        for i in range(n):
            cnt = 0
            t = ""
            for x in nums[i:]:
                cnt += x % p == 0
                if cnt > k:
                    break
                t += str(x) + ","
                s.add(t)
        return len(s)

```
