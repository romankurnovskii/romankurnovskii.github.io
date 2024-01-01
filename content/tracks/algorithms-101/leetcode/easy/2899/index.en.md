---
title: Last Visited Integers
seoTitle: LeetCode Last Visited Integers | Python solution and explanation
description: Last Visited Integers
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2899
---

[LeetCode problem 2899](https://leetcode.com/problems/last-visited-integers/)

```python
class Solution:
    def lastVisitedIntegers(self, words: List[str]) -> List[int]:
        nums = []
        res = []
        k = 0
        for w in words:
            if w == "prev":
                k += 1
                i = len(nums) - k
                res.append(-1 if i < 0 else nums[i])
            else:
                k = 0
                nums.append(int(w))
        return res

```
