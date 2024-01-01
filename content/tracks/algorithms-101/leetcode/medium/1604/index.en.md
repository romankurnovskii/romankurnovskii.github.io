---
title: 1604. Alert Using Same Key-Card Three or More Times in a One Hour Period
seoTitle: LeetCode 1604. Alert Using Same Key-Card Three or More Times in a One Hour Period | Python solution and explanation
description: 1604. Alert Using Same Key-Card Three or More Times in a One Hour Period
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1604
---

[LeetCode problem 1604](https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/)

```python
class Solution:
    def alertNames(self, keyName: List[str], keyTime: List[str]) -> List[str]:
        d = defaultdict(list)
        for name, t in zip(keyName, keyTime):
            t = int(t[:2]) * 60 + int(t[3:])
            d[name].append(t)
        res = []
        for name, ts in d.items():
            if (n := len(ts)) > 2:
                ts.sort()
                for i in range(n - 2):
                    if ts[i + 2] - ts[i] <= 60:
                        res.append(name)
                        break
        res.sort()
        return res

```
