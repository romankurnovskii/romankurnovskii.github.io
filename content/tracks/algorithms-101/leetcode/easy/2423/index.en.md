---
title: 2423. Remove Letter To Equalize Frequency
seoTitle: LeetCode 2423. Remove Letter To Equalize Frequency | Python solution and explanation
description: 2423. Remove Letter To Equalize Frequency
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2423
---

[LeetCode problem 2423](https://leetcode.com/problems/remove-letter-to-equalize-frequency/)

```python
class Solution:
    def equalFrequency(self, word: str) -> bool:
        cnt = Counter(word)
        for c in cnt.keys():
            cnt[c] -= 1
            if len(set(v for v in cnt.values() if v)) == 1:
                return True
            cnt[c] += 1
        return False

```