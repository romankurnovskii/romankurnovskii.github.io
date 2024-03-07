---
title: Minimum Common Value
seoTitle: LeetCode Minimum Common Value | Python solution and explanation
description: Minimum Common Value
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2540
---

[LeetCode problem 2540](https://leetcode.com/problems/minimum-common-value/)

By initializing two pointers, one for each array, we can compare the elements they point to. If the elements are equal, we've found a common value. If not, we move the pointer pointing to the smaller value forward. This approach ensures that we only traverse each array once.

```python
class Solution:
    def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
        i = 0
        j = 0
        N1 = len(nums1)
        N2 = len(nums2)
        while i < N1 and j < N2:
            if nums1[i] == nums2[j]:
                return nums1[i]
            if nums1[i] < nums2[j]:
                i += 1
            else:
                j += 1
        return -1
```
