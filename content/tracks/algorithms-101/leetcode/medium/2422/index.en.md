---
title: 2422. Merge Operations to Turn Array Into a Palindrome
seoTitle: LeetCode 2422. Merge Operations to Turn Array Into a Palindrome | Python solution and explanation
description: 2422. Merge Operations to Turn Array Into a Palindrome
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2422
---

[LeetCode problem 2422](https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/)

```python
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        i, j = 0, len(nums) - 1
        a, b = nums[i], nums[j]
        res = 0
        while i < j:
            if a < b:
                i += 1
                a += nums[i]
                res += 1
            elif b < a:
                j -= 1
                b += nums[j]
                res += 1
            else:
                i, j = i + 1, j - 1
                a, b = nums[i], nums[j]
        return res

```
