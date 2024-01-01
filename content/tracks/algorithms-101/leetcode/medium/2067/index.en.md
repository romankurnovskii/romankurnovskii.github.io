---
title: 2067. Number of Equal Count Substrings
seoTitle: LeetCode 2067. Number of Equal Count Substrings | Python solution and explanation
description: 2067. Number of Equal Count Substrings
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2067
---

[LeetCode problem 2067](https://leetcode.com/problems/number-of-equal-count-substrings/)

```python
class Solution:
    def equalCountSubstrings(self, s: str, count: int) -> int:
        res = 0
        for x in range(1, 27):
            m = count * x
            if m > len(s):
                break
            cnt = Counter()
            y = 0
            for i, c in enumerate(s):
                cnt[c] += 1
                y += cnt[c] == count
                y -= cnt[c] == count + 1
                j = i - m
                if j >= 0:
                    cnt[s[j]] -= 1
                    y += cnt[s[j]] == count
                    y -= cnt[s[j]] == count - 1
                res += x == y
        return res

```
