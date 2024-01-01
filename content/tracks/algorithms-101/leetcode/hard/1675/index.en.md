---
title: 1675. Minimize Deviation in Array
seoTitle: LeetCode 1675. Minimize Deviation in Array | Python solution and explanation
description: 1675. Minimize Deviation in Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1675
---

[LeetCode problem 1675](https://leetcode.com/problems/minimize-deviation-in-array/)

```python
class Solution:
    def minimumDeviation(self, nums: List[int]) -> int:
        h = []
        mi = inf
        for v in nums:
            if v & 1:
                v <<= 1
            h.append(-v)
            mi = min(mi, v)
        heapify(h)
        res = -h[0] - mi
        while h[0] % 2 == 0:
            x = heappop(h) // 2
            heappush(h, x)
            mi = min(mi, -x)
            res = min(res, -h[0] - mi)
        return res

```
