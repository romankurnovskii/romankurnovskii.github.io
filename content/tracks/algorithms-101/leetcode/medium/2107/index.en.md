---
title: 2107. Number of Unique Flavors After Sharing K Candies
seoTitle: LeetCode 2107. Number of Unique Flavors After Sharing K Candies | Python solution and explanation
description: 2107. Number of Unique Flavors After Sharing K Candies
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2107
---

[LeetCode problem 2107](https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/)

```python
class Solution:
    def shareCandies(self, candies: List[int], k: int) -> int:
        cnt = Counter(candies[k:])
        res = len(cnt)
        for i in range(k, len(candies)):
            cnt[candies[i - k]] += 1
            cnt[candies[i]] -= 1
            if cnt[candies[i]] == 0:
                cnt.pop(candies[i])
            res = max(res, len(cnt))
        return res

```
