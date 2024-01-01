---
title: 2085. Count Common Words With One Occurrence
seoTitle: LeetCode 2085. Count Common Words With One Occurrence | Python solution and explanation
description: 2085. Count Common Words With One Occurrence
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2085
---

[LeetCode problem 2085](https://leetcode.com/problems/count-common-words-with-one-occurrence/)

```python
class Solution:
    def countWords(self, words1: List[str], words2: List[str]) -> int:
        cnt1 = Counter(words1)
        cnt2 = Counter(words2)
        return sum(v == 1 and cnt2[w] == 1 for w, v in cnt1.items())

```
