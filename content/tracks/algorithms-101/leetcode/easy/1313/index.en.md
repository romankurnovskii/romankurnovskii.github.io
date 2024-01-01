---
title: 1313. Decompress Run-Length Encoded List
seoTitle: LeetCode 1313. Decompress Run-Length Encoded List | Python solution and explanation
description: 1313. Decompress Run-Length Encoded List
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1313
---

[LeetCode problem 1313](https://leetcode.com/problems/decompress-run-length-encoded-list/)

```python
class Solution:
    def decompressRLElist(self, nums: List[int]) -> List[int]:
        res = []
        for i in range(1, len(nums), 2):
            res.extend([nums[i]] * nums[i - 1])
        return res

```
