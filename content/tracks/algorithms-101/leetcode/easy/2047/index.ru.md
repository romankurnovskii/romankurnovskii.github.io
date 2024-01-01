---
title: 2047. Number of Valid Words in a Sentence
seoTitle: LeetCode 2047. Number of Valid Words in a Sentence | Python solution and explanation
description: 2047. Number of Valid Words in a Sentence
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2047
---

[LeetCode problem 2047](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/)

```python
class Solution:
    def countValidWords(self, sentence: str) -> int:
        def check(token):
            hyphen = False
            for i, c in enumerate(token):
                if c.isdigit() or (c in '!.,' and i < len(token) - 1):
                    return False
                if c == '-':
                    if (
                        hyphen
                        or i == 0
                        or i == len(token) - 1
                        or not token[i - 1].islower()
                        or not token[i + 1].islower()
                    ):
                        return False
                    hyphen = True
            return True

        return sum(check(token) for token in sentence.split())

```
