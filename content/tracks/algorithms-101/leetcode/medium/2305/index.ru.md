---
title: 2305. Fair Distribution of Cookies
seoTitle: LeetCode 2305. Fair Distribution of Cookies | Python solution and explanation
description: 2305. Fair Distribution of Cookies
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2305
---

[LeetCode problem 2305](https://leetcode.com/problems/fair-distribution-of-cookies/)

```python
class Solution:
    def distributeCookies(self, cookies: List[int], k: int) -> int:
        def dfs(i):
            if i >= len(cookies):
                nonlocal res
                res = max(cnt)
                return
            for j in range(k):
                if cnt[j] + cookies[i] >= res or (j and cnt[j] == cnt[j - 1]):
                    continue
                cnt[j] += cookies[i]
                dfs(i + 1)
                cnt[j] -= cookies[i]

        res = inf
        cnt = [0] * k
        cookies.sort(reverse=True)
        dfs(0)
        return res

```
