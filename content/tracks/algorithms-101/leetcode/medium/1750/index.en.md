---
title: 1750. Minimum Length of String After Deleting Similar Ends
seoTitle: LeetCode 1750. Minimum Length of String After Deleting Similar Ends | Python solution and explanation
description: 1750. Minimum Length of String After Deleting Similar Ends
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1750
---

[LeetCode problem 1750](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/)

```python
class Solution:
    def minimumLength(self, s: str) -> int:
        p1 = 0
        p2 = len(s) - 1

        while p1 < p2 and s[p1] == s[p2]:
            c = s[p1]

            while p1 <= p2 and s[p1] == c:
                p1 += 1
            while p1 <= p2 and s[p2] == c:
                p2 -= 1

        return p2 - p1 + 1
```
