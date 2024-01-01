---
title: 1152. Analyze User Website Visit Pattern
seoTitle: LeetCode 1152. Analyze User Website Visit Pattern | Python solution and explanation
description: 1152. Analyze User Website Visit Pattern
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1152
---

[LeetCode problem 1152](https://leetcode.com/problems/analyze-user-website-visit-pattern/)

```python
class Solution:
    def mostVisitedPattern(
        self, username: List[str], timestamp: List[int], website: List[str]) -> List[str]:
        d = defaultdict(list)
        for user, _, site in sorted(zip(username, timestamp, website), key=lambda x: x[1]):
            d[user].append(site)

        cnt = Counter()
        for sites in d.values():
            m = len(sites)
            s = set()
            if m > 2:
                for i in range(m - 2):
                    for j in range(i + 1, m - 1):
                        for k in range(j + 1, m):
                            s.add((sites[i], sites[j], sites[k]))
            for t in s:
                cnt[t] += 1
        return sorted(cnt.items(), key=lambda x: (-x[1], x[0]))[0][0]
```
