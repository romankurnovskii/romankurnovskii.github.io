---
title: 1852. Distinct Numbers in Each Subarray
seoTitle: LeetCode 1852. Distinct Numbers in Each Subarray | Python solution and explanation
description: 1852. Distinct Numbers in Each Subarray
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1852
---

[LeetCode problem 1852](https://leetcode.com/problems/distinct-numbers-in-each-subarray/)

```python
class Solution:
    def distinctNumbers(self, nums: List[int], k: int) -> List[int]:
        cnt = Counter(nums[:k])
        res = [len(cnt)]
        for i in range(k, len(nums)):
            cnt[nums[i]] += 1
            cnt[nums[i - k]] -= 1
            if cnt[nums[i - k]] == 0:
                cnt.pop(nums[i - k])
            res.append(len(cnt))
        return res

```
