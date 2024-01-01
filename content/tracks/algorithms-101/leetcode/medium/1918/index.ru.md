---
title: 1918. Kth Smallest Subarray Sum
seoTitle: LeetCode 1918. Kth Smallest Subarray Sum | Python solution and explanation
description: 1918. Kth Smallest Subarray Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1918
---

[LeetCode problem 1918](https://leetcode.com/problems/kth-smallest-subarray-sum/)

```python
class Solution:
    def kthSmallestSubarraySum(self, nums: List[int], k: int) -> int:
        def f(s):
            t = j = 0
            cnt = 0
            for i, x in enumerate(nums):
                t += x
                while t > s:
                    t -= nums[j]
                    j += 1
                cnt += i - j + 1
            return cnt >= k

        l, r = min(nums), sum(nums)
        return l + bisect_left(range(l, r + 1), True, key=f)

```
