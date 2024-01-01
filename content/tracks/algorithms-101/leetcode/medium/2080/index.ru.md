---
title: 2080. Range Frequency Queries
seoTitle: LeetCode 2080. Range Frequency Queries | Python solution and explanation
description: 2080. Range Frequency Queries
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2080
---

[LeetCode problem 2080](https://leetcode.com/problems/range-frequency-queries/)

```python
class RangeFreqQuery:
    def __init__(self, arr: List[int]):
        self.mp = defaultdict(list)
        for i, x in enumerate(arr):
            self.mp[x].append(i)

    def query(self, left: int, right: int, value: int) -> int:
        if value not in self.mp:
            return 0
        arr = self.mp[value]
        l, r = bisect_right(arr, left - 1), bisect_right(arr, right)
        return r - l


# Your RangeFreqQuery object will be instantiated and called as such:
# obj = RangeFreqQuery(arr)
# param_1 = obj.query(left,right,value)

```
