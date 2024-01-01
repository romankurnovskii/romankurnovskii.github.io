---
title: 2024. Maximize the Confusion of an Exam
seoTitle: LeetCode 2024. Maximize the Confusion of an Exam | Python solution and explanation
description: 2024. Maximize the Confusion of an Exam
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2024
---

[LeetCode problem 2024](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/)

```python
class Solution:
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        def get(c, k):
            l = r = -1
            while r < len(answerKey) - 1:
                r += 1
                if answerKey[r] == c:
                    k -= 1
                if k < 0:
                    l += 1
                    if answerKey[l] == c:
                        k += 1
            return r - l

        return max(get('T', k), get('F', k))

```
