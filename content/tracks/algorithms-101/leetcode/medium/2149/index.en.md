---
title: 2149. Rearrange Array Elements by Sign
seoTitle: LeetCode 2149. Rearrange Array Elements by Sign | Python solution and explanation
description: 2149. Rearrange Array Elements by Sign
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2149
---

[LeetCode problem 2149](https://leetcode.com/problems/rearrange-array-elements-by-sign/)

```python
class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        res = [0] * len(nums)
        i, j = 0, 1
        for num in nums:
            if num > 0:
                res[i] = num
                i += 2
            else:
                res[j] = num
                j += 2
        return res

```
