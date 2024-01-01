---
title: 1940. Longest Common Subsequence Between Sorted Arrays
seoTitle: LeetCode 1940. Longest Common Subsequence Between Sorted Arrays | Python solution and explanation
description: 1940. Longest Common Subsequence Between Sorted Arrays
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1940
---

[LeetCode problem 1940](https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/)

```python
class Solution:
    def longestCommomSubsequence(self, arrays: List[List[int]]) -> List[int]:
        def common(l1, l2):
            i, j, n1, n2 = 0, 0, len(l1), len(l2)
            res = []
            while i < n1 and j < n2:
                if l1[i] == l2[j]:
                    res.append(l1[i])
                    i += 1
                    j += 1
                elif l1[i] > l2[j]:
                    j += 1
                else:
                    i += 1
            return res

        n = len(arrays)
        for i in range(1, n):
            arrays[i] = common(arrays[i - 1], arrays[i])
        return arrays[n - 1]

```
