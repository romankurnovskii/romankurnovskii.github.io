---
title: 2150. Find All Lonely Numbers in the Array
seoTitle: LeetCode 2150. Find All Lonely Numbers in the Array | Python solution and explanation
description: 2150. Find All Lonely Numbers in the Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2150
---

[LeetCode problem 2150](https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/)

```python
class Solution:
    def findLonely(self, nums: List[int]) -> List[int]:
        counter = Counter(nums)
        res = []
        for num, cnt in counter.items():
            if cnt == 1 and counter[num - 1] == 0 and counter[num + 1] == 0:
                res.append(num)
        return res

```
