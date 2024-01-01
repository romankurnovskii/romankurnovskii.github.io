---
title: 2182. Construct String With Repeat Limit
seoTitle: LeetCode 2182. Construct String With Repeat Limit | Python solution and explanation
description: 2182. Construct String With Repeat Limit
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2182
---

[LeetCode problem 2182](https://leetcode.com/problems/construct-string-with-repeat-limit/)

```python
class Solution:
    def repeatLimitedString(self, s: str, repeatLimit: int) -> str:
        cnt = [0] * 26
        for c in s:
            cnt[ord(c) - ord("a")] += 1
        res = []
        j = 24
        for i in range(25, -1, -1):
            j = min(i - 1, j)
            while 1:
                x = min(repeatLimit, cnt[i])
                cnt[i] -= x
                res.append(ascii_lowercase[i] * x)
                if cnt[i] == 0:
                    break
                while j >= 0 and cnt[j] == 0:
                    j -= 1
                if j < 0:
                    break
                cnt[j] -= 1
                res.append(ascii_lowercase[j])
        return "".join(res)

```
