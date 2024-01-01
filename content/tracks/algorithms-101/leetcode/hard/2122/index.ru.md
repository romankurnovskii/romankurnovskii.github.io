---
title: 2122. Recover the Original Array
seoTitle: LeetCode 2122. Recover the Original Array | Python solution and explanation
description: 2122. Recover the Original Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2122
---

[LeetCode problem 2122](https://leetcode.com/problems/recover-the-original-array/)

```python
class Solution:
    def recoverArray(self, nums: List[int]) -> List[int]:
        nums.sort()
        n = len(nums)
        for i in range(1, n):
            d = nums[i] - nums[0]
            if d == 0 or d % 2 == 1:
                continue
            vis = [False] * n
            vis[i] = True
            res = [(nums[0] + nums[i]) >> 1]
            l, r = 1, i + 1
            while r < n:
                while l < n and vis[l]:
                    l += 1
                while r < n and nums[r] - nums[l] < d:
                    r += 1
                if r == n or nums[r] - nums[l] > d:
                    break
                vis[r] = True
                res.append((nums[l] + nums[r]) >> 1)
                l, r = l + 1, r + 1
            if len(res) == (n >> 1):
                return res
        return []

```
