---
title: 1508. Range Sum of Sorted Subarray Sums
seoTitle: LeetCode 1508. Range Sum of Sorted Subarray Sums | Python solution and explanation
description: 1508. Range Sum of Sorted Subarray Sums
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1508
---

[LeetCode problem 1508](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/)

```python
class Solution:
    def rangeSum(self, nums: List[int], n: int, left: int, right: int) -> int:
        arr = []
        for i in range(n):
            s = 0
            for j in range(i, n):
                s += nums[j]
                arr.append(s)
        arr.sort()
        mod = 10**9 + 7
        return sum(arr[left - 1 : right]) % mod

```
