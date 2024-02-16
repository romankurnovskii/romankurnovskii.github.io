---
title: 786. K-th Smallest Prime Fraction
seoTitle: LeetCode 786. K-th Smallest Prime Fraction | Python solution and explanation
description: 786. K-th Smallest Prime Fraction
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 786
---

[LeetCode problem 786](https://leetcode.com/problems/k-th-smallest-prime-fraction/)

```python
class Solution:
    def kthSmallestPrimeFraction(self, arr: List[int], k: int) -> List[int]:
        h = [(1 / y, 0, j + 1) for j, y in enumerate(arr[1:])]
        heapify(h)
        for _ in range(k - 1):
            _, i, j = heappop(h)
            if i + 1 < j:
                heappush(h, (arr[i + 1] / arr[j], i + 1, j))
        return [arr[h[0][1]], arr[h[0][2]]]

```
