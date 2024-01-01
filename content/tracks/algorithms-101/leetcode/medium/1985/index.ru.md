---
title: 1985. Find the Kth Largest Integer in the Array
seoTitle: LeetCode 1985. Find the Kth Largest Integer in the Array | Python solution and explanation
description: 1985. Find the Kth Largest Integer in the Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1985
---

[LeetCode problem 1985](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/)

```python
class Solution:
    def kthLargestNumber(self, nums: List[str], k: int) -> str:
        def cmp(a, b):
            if len(a) != len(b):
                return len(b) - len(a)
            return 1 if b > a else -1

        nums.sort(key=cmp_to_key(cmp))
        return nums[k - 1]

```
