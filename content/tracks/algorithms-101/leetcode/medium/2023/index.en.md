---
title: 2023. Number of Pairs of Strings With Concatenation Equal to Target
seoTitle: LeetCode 2023. Number of Pairs of Strings With Concatenation Equal to Target | Python solution and explanation
description: 2023. Number of Pairs of Strings With Concatenation Equal to Target
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2023
---

[LeetCode problem 2023](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/)

```python
class Solution:
    def numOfPairs(self, nums: List[str], target: str) -> int:
        cnt = Counter(nums)
        res = 0
        for i in range(1, len(target)):
            a, b = target[:i], target[i:]
            if a != b:
                res += cnt[a] * cnt[b]
            else:
                res += cnt[a] * (cnt[a] - 1)
        return res

```
