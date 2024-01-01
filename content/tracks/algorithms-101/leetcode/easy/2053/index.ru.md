---
title: 2053. Kth Distinct String in an Array
seoTitle: LeetCode 2053. Kth Distinct String in an Array | Python solution and explanation
description: 2053. Kth Distinct String in an Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2053
---

[LeetCode problem 2053](https://leetcode.com/problems/kth-distinct-string-in-an-array/)

```python
class Solution:
    def kthDistinct(self, arr: List[str], k: int) -> str:
        counter = Counter(arr)
        for v in arr:
            if counter[v] == 1:
                k -= 1
                if k == 0:
                    return v
        return ''

```
