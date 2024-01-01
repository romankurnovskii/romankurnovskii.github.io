---
title: 2006. Count Number of Pairs With Absolute Difference K
seoTitle: LeetCode 2006. Count Number of Pairs With Absolute Difference K | Python solution and explanation
description: 2006. Count Number of Pairs With Absolute Difference K
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2006
---

[LeetCode problem 2006](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/)

```python
class Solution:
    def countKDifference(self, nums: List[int], k: int) -> int:
        res = 0
        cnt = Counter()
        for num in nums:
            res += cnt[num - k] + cnt[num + k]
            cnt[num] += 1
        return res

```
